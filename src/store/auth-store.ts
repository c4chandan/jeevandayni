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

      const credentials = emailOrMobile.toLowerCase();
      let role: "user" | "admin" | "franchise" = "user";
      let name = "Devendra Verma";
      let email = "devendra@example.com";

      if (credentials === "admin" || credentials === "admin@jeevandayni.com") {
        if (password && password !== "admin123") {
          throw new Error("Invalid password for Admin account.");
        }
        role = "admin";
        name = "Chandan Kumar (Admin)";
        email = "admin@jeevandayni.com";
      } else if (credentials === "franchise" || credentials === "franchise@jeevandayni.com") {
        if (password && password !== "franchise123") {
          throw new Error("Invalid password for Franchise account.");
        }
        role = "franchise";
        name = "Karan Singh (Franchise)";
        email = "franchise@jeevandayni.com";
      } else {
        if (credentials === "user" || credentials === "user@jeevandayni.com") {
          if (password && password !== "user123") {
            throw new Error("Invalid password for User account.");
          }
        }
      }
      
      const mockUser: User = {
        id: role === "admin" ? "adm_1" : role === "franchise" ? "frc_1" : "usr_1",
        name,
        email,
        mobile: "9876543210",
        role,
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
