import axios, { AxiosInstance } from 'axios';
import { WalletInfo } from './auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

export interface AddWalletRequest {
  address: string;
  provider: string;
  type: 'connected' | 'external';
  label?: string;
}

export interface WalletResponse {
  success: boolean;
  message: string;
  data?: {
    wallet?: WalletInfo;
    wallets?: WalletInfo[];
    primaryWalletId?: string;
  };
  error?: string;
}

class WalletAPI {
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
   * Get all wallets for the current user
   */
  async getWallets(): Promise<WalletResponse> {
    try {
      const response = await this.apiClient.get('/wallet/list');
      return response.data as WalletResponse;
    } catch (error: any) {
      console.error('Failed to get wallets:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to retrieve wallets',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Add a new wallet to the user's account
   */
  async addWallet(walletData: AddWalletRequest): Promise<WalletResponse> {
    try {
      const response = await this.apiClient.post('/wallet/add', walletData);
      return response.data as WalletResponse;
    } catch (error: any) {
      console.error('Failed to add wallet:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to add wallet',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Set a wallet as the primary wallet
   */
  async setPrimaryWallet(walletId: string): Promise<WalletResponse> {
    try {
      const response = await this.apiClient.put(`/wallet/${walletId}/primary`);
      return response.data as WalletResponse;
    } catch (error: any) {
      console.error('Failed to set primary wallet:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to set primary wallet',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Update wallet label
   */
  async updateWalletLabel(walletId: string, label: string): Promise<WalletResponse> {
    try {
      const response = await this.apiClient.put(`/wallet/${walletId}/label`, { label });
      return response.data as WalletResponse;
    } catch (error: any) {
      console.error('Failed to update wallet label:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to update wallet label',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Remove a wallet from the user's account
   */
  async removeWallet(walletId: string): Promise<WalletResponse> {
    try {
      const response = await this.apiClient.delete(`/wallet/${walletId}`);
      return response.data as WalletResponse;
    } catch (error: any) {
      console.error('Failed to remove wallet:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to remove wallet',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }

  /**
   * Verify wallet ownership through signature
   */
  async verifyWallet(walletId: string, signature: string, message: string): Promise<WalletResponse> {
    try {
      const response = await this.apiClient.post(`/wallet/${walletId}/verify`, {
        signature,
        message
      });
      return response.data as WalletResponse;
    } catch (error: any) {
      console.error('Failed to verify wallet:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to verify wallet',
        error: error.response?.data?.error || 'Server error'
      };
    }
  }
}

export const walletAPI = new WalletAPI();