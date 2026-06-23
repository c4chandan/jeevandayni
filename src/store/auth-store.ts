import { create } from "zustand";
import { User, Rank } from "@/types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (emailOrMobile: string, password?: string) => Promise<boolean>;
  register: (data: Partial<User> & { sponsorId?: string; binaryPosition?: string }) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

const mockRank: Rank = {
  id: "rank_diamond",
  name: "Diamond Partner",
  level: 5,
  icon: "💎",
  color: "#0F766E",
  requiredPV: 10000,
  benefits: ["10% matching", "Diamond Pool share"],
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (emailOrMobile, password) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: "usr_1",
        name: "Devendra Verma",
        email: "devendra@example.com",
        mobile: "9876543210",
        role: "user",
        status: "active",
        rank: mockRank,
        sponsorId: "sponsor_123",
        kycStatus: "verified",
        joinedAt: new Date().toISOString(),
      };
      
      set({ user: mockUser, isAuthenticated: true, isLoading: false });
      return true;
    } catch (err: any) {
      set({ error: err.message || "Login failed", isLoading: false });
      return false;
    }
  },

  register: async (data) => {
    set({ isLoading: true, error: null });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const mockUser: User = {
        id: "usr_new",
        name: data.name || "New Partner",
        email: data.email || "",
        mobile: data.mobile || "",
        role: "user",
        status: "active",
        rank: {
          id: "rank_active",
          name: "Active Member",
          level: 1,
          icon: "🌱",
          color: "#10B981",
          requiredPV: 0,
          benefits: ["Direct income enabled"],
        },
        sponsorId: data.sponsorId || "",
        kycStatus: "pending",
        joinedAt: new Date().toISOString(),
      };
      
      set({ user: mockUser, isAuthenticated: true, isLoading: false });
      return true;
    } catch (err: any) {
      set({ error: err.message || "Registration failed", isLoading: false });
      return false;
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false, error: null });
  },

  clearError: () => set({ error: null }),
}));
