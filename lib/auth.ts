import axios, { AxiosInstance } from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

// Wallet information interface (matching backend)
export interface WalletInfo {
  id: string;
  address: string;
  type: "abstract" | "connected" | "external";
  provider?: string;
  label?: string; // User-defined label like "MetaMask Main", "Hardware Wallet"
  isDefault?: boolean; // Primary wallet for blockchain operations
  isVerified?: boolean; // Has completed signature verification
  createdAt: Date;
  lastUsed?: Date;
}

// Wavz System Interfaces (matching backend)
export interface WavzProfile {
  role: "creator" | "fan" | null;
  sparks: number;
  level: number;
  levelProgress: number;

  creatorStats?: {
    totalPosts: number;
    totalViews: number;
    totalLikes: number;
    totalComments: number;
    engagementRate: number;
    fanCount: number;
    monthlyEarnings: number;
  };

  fanStats?: {
    creatorsSupported: number;
    totalSpent: number;
    nftsHeld: number;
    stakingAmount: number;
    supportLevel: "bronze" | "silver" | "gold" | "diamond";
  };

  badges: string[];
  nftEvolution: {
    currentBadge: string;
    evolutionStage: number;
    nextEvolutionAt: number;
  };

  proofStats: {
    proofOfPost: number;
    proofOfHold: number;
    proofOfUse: number;
    proofOfSupport: number;
  };

  isOnboarded: boolean;
  onboardedAt?: Date;
  lastActivityAt: Date;
}

// InsightIQ integration interface (matching backend)
export interface InsightIQIntegration {
  userId: string | null;
  external_id: string | null;
  sdkToken: string | null;
  tokenExpiresAt: Date | null;
  isConnected: boolean;
  connectedAt: Date | null;
  connectedAccounts: {
    accountId: string;
    platform: "youtube" | "tiktok" | "instagram" | "twitter" | "twitch";
    username: string;
    displayName?: string;
    profilePicture?: string;
    followerCount?: number;
    isActive: boolean;
    connectedAt: Date;
    lastSyncAt?: Date;
  }[];
  createdAt: Date;
}

// Abstract Wallet interface (matching backend)
export interface AbstractWallet {
  address: string;
  network: string;
  createdAt: Date;
}

// Auth interfaces
export interface User {
  id: string;
  email: string;
  displayName: string;
  username: string;
  verificationLevel: string;
  abstractWallet?: AbstractWallet;
  wavzProfile: WavzProfile; // Wavz system data
  insightIQ?: InsightIQIntegration;
  preferences?: {
    notifications: boolean;
    theme: "light" | "dark";
    language: string;
  };
  isActive?: boolean;
  lastLogin?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: User;
    token: string;
    expiresIn: string;
  };
  error?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  displayName: string;
}

class AuthAPI {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: `${API_BASE_URL}/api`,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Add request interceptor to include auth token
    this.apiClient.interceptors.request.use(
      (config) => {
        const token = this.getStoredToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add response interceptor to handle auth errors
    this.apiClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.removeStoredToken();
          // Instead of redirecting to login page, the AuthProvider will handle this
          // by detecting the cleared token and updating the auth state
        }
        return Promise.reject(error);
      }
    );
  }

  private getStoredToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  }

  private setStoredToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  }

  private removeStoredToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_data");
    }
  }

  private setStoredUser(user: User): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("user_data", JSON.stringify(user));
    }
  }

  public getStoredUser(): User | null {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user_data");
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  }

  /**
   * Sign up with email and password
   */
  async signup(credentials: SignupCredentials): Promise<AuthResponse> {
    try {
      const response = await this.apiClient.post("/auth/signup", credentials);
      const authResponse: AuthResponse = response.data;

      if (authResponse.success && authResponse.data) {
        this.setStoredToken(authResponse.data.token);
        this.setStoredUser(authResponse.data.user);
      }

      return authResponse;
    } catch (error: any) {
      console.error("Signup error:", error);

      // Handle network errors
      if (!error.response) {
        return {
          success: false,
          message:
            "Unable to connect to server. Please check your internet connection.",
          error: "Network error",
        };
      }

      // Handle server errors
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Account creation failed. Please try again.",
        error: error.response?.data?.error || "Server error",
      };
    }
  }

  /**
   * Login with email and password
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await this.apiClient.post("/auth/login", credentials);
      const authResponse: AuthResponse = response.data;

      if (authResponse.success && authResponse.data) {
        this.setStoredToken(authResponse.data.token);
        this.setStoredUser(authResponse.data.user);
      }

      return authResponse;
    } catch (error: any) {
      console.error("Login error:", error);

      // Handle network errors
      if (!error.response) {
        return {
          success: false,
          message:
            "Unable to connect to server. Please check your internet connection.",
          error: "Network error",
        };
      }

      // Handle authentication errors
      if (error.response?.status === 401) {
        return {
          success: false,
          message: "Invalid email or password. Please try again.",
          error: "Authentication failed",
        };
      }

      // Handle other server errors
      return {
        success: false,
        message:
          error.response?.data?.message || "Sign in failed. Please try again.",
        error: error.response?.data?.error || "Server error",
      };
    }
  }

  /**
   * Get current user profile
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await this.apiClient.get("/auth/me");
      if (response.data.success) {
        const user = response.data.data.user;
        this.setStoredUser(user);
        return user;
      }
      return null;
    } catch (error) {
      console.error("Failed to get current user:", error);
      return null;
    }
  }

  /**
   * Refresh authentication token
   */
  async refreshToken(): Promise<boolean> {
    try {
      const response = await this.apiClient.post("/auth/refresh");
      if (response.data.success) {
        this.setStoredToken(response.data.data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Token refresh failed:", error);
      this.removeStoredToken();
      return false;
    }
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      await this.apiClient.post("/auth/logout");
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      this.removeStoredToken();
    }
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    const token = this.getStoredToken();
    const user = this.getStoredUser();
    return !!(token && user);
  }

  /**
   * Handle OAuth callback with token
   */
  handleAuthCallback(token: string): boolean {
    if (token) {
      this.setStoredToken(token);
      return true;
    }
    return false;
  }
}

export const authAPI = new AuthAPI();

// Utility functions
export const formatUserDisplayName = (user: User): string => {
  return user.displayName || user.email.split("@")[0];
};

export const getUserVerificationBadge = (level: string): string => {
  switch (level) {
    case "premium":
      return "👑";
    case "verified":
      return "✅";
    case "basic":
      return "🔸";
    default:
      return "🔰";
  }
};

export const formatPoints = (points: number): string => {
  if (points >= 1000000) {
    return `${(points / 1000000).toFixed(1)}M`;
  }
  if (points >= 1000) {
    return `${(points / 1000).toFixed(1)}K`;
  }
  return points.toString();
};
