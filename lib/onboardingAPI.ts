import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

export interface OnboardingStatus {
  isOnboarded: boolean;
  role: 'creator' | 'fan' | null;
  onboardedAt?: Date;
  nextStep: 'dashboard' | 'role-selection';
}

export interface SparksAwardResponse {
  sparksAwarded: number;
  totalSparks: number;
  level: number;
  levelProgress: number;
  levelUp: boolean;
  reason: string;
}

export interface OnboardingResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

class OnboardingAPI {
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
   * Set user role during onboarding
   */
  async setRole(role: 'creator' | 'fan'): Promise<OnboardingResponse> {
    try {
      const response = await this.apiClient.post('/onboarding/role', { role });
      return response.data as OnboardingResponse;
    } catch (error: any) {
      console.error('Failed to set role:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to set role',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Get onboarding status
   */
  async getStatus(): Promise<OnboardingResponse<OnboardingStatus>> {
    try {
      const response = await this.apiClient.get('/onboarding/status');
      return response.data as OnboardingResponse<OnboardingStatus>;
    } catch (error: any) {
      console.error('Failed to get onboarding status:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to get onboarding status',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Award Sparks (for testing/admin)
   */
  async awardSparks(amount: number, reason?: string): Promise<OnboardingResponse<SparksAwardResponse>> {
    try {
      const response = await this.apiClient.post('/onboarding/sparks', { amount, reason });
      return response.data as OnboardingResponse<SparksAwardResponse>;
    } catch (error: any) {
      console.error('Failed to award Sparks:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to award Sparks',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }
}

export const onboardingAPI = new OnboardingAPI();
