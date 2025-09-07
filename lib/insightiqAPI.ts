import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

export interface ConnectedAccount {
  accountId: string;
  platform: 'youtube' | 'tiktok' | 'instagram' | 'twitter' | 'twitch';
  username: string;
  displayName?: string;
  profilePicture?: string;
  followerCount?: number;
  isActive: boolean;
  connectedAt: Date;
  lastSyncAt?: Date;
}

export interface InsightIQStatus {
  hasIntegration: boolean;
  isActive: boolean;
  insightIqUserId?: string;
  connectedAccountsCount: number;
  connectedPlatforms: string[];
  createdAt?: Date;
}

export interface AccountMetrics {
  account: ConnectedAccount;
  metrics: {
    followers: number;
    engagement_rate: number;
    total_posts: number;
    total_views: number;
    total_likes: number;
    total_comments: number;
    total_shares: number;
  };
  period: string;
  updated_at: string;
}

export interface SDKTokenResponse {
  success: boolean;
  message: string;
  data?: {
    sdk_token: string;
    user_id: string;
    expires_at: string;
    is_cached?: boolean;
  };
  error?: string;
}

export interface InsightIQResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

class InsightIQAPI {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: `${API_BASE_URL}/api`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
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
  }

  private getStoredToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  }

  /**
   * Create InsightIQ user for current Wavz user
   */
  async createUser(): Promise<InsightIQResponse> {
    try {
      const response = await this.apiClient.post('/insightiq/create-user');
      return response.data as InsightIQResponse;
    } catch (error: any) {
      console.error('Failed to create InsightIQ user:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to create InsightIQ user',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Generate SDK token for frontend Connect modal
   */
  async generateSDKToken(products: string[] = ['IDENTITY', 'ENGAGEMENT']): Promise<SDKTokenResponse> {
    try {
      const response = await this.apiClient.post('/insightiq/sdk-token', { products });
      return response.data as SDKTokenResponse;
    } catch (error: any) {
      console.error('Failed to generate SDK token:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to generate SDK token',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Get InsightIQ integration status
   */
  async getStatus(): Promise<InsightIQResponse<InsightIQStatus>> {
    try {
      const response = await this.apiClient.get('/insightiq/status');
      return response.data as InsightIQResponse<InsightIQStatus>;
    } catch (error: any) {
      console.error('Failed to get InsightIQ status:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to get status',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Get all connected social media accounts
   */
  async getConnectedAccounts(): Promise<InsightIQResponse<{ connectedAccounts: ConnectedAccount[]; count: number }>> {
    try {
      const response = await this.apiClient.get('/insightiq/accounts');
      return response.data as InsightIQResponse<{ connectedAccounts: ConnectedAccount[]; count: number }>;
    } catch (error: any) {
      console.error('Failed to get connected accounts:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to get connected accounts',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Get analytics metrics for a specific account
   */
  async getAccountMetrics(accountId: string, period: string = 'last_30_days'): Promise<InsightIQResponse<AccountMetrics>> {
    try {
      const response = await this.apiClient.get(`/insightiq/metrics/${accountId}`, {
        params: { period }
      });
      return response.data as InsightIQResponse<AccountMetrics>;
    } catch (error: any) {
      console.error('Failed to get account metrics:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to get account metrics',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Disconnect a social media account
   */
  async disconnectAccount(accountId: string): Promise<InsightIQResponse> {
    try {
      const response = await this.apiClient.delete(`/insightiq/accounts/${accountId}`);
      return response.data as InsightIQResponse;
    } catch (error: any) {
      console.error('Failed to disconnect account:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to disconnect account',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }
}

export const insightIQAPI = new InsightIQAPI();