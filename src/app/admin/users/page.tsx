"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Check, X, ShieldAlert, UserCheck } from "lucide-react";

interface MockUser {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
  kycStatus: "pending" | "verified" | "rejected";
  sponsor: string;
}

const initialUsers: MockUser[] = [
  { id: "JV1001", name: "Anish Sharma", email: "anish@example.com", mobile: "+91 98765 43210", role: "Distributor", kycStatus: "pending", sponsor: "JV0999" },
  { id: "JV1002", name: "Priya Roy", email: "priya@example.com", mobile: "+91 87654 32109", role: "Franchise Owner", kycStatus: "verified", sponsor: "JV0852" },
  { id: "JV1003", name: "Rohan Das", email: "rohan@example.com", mobile: "+91 76543 21098", role: "Distributor", kycStatus: "pending", sponsor: "JV0912" },
  { id: "JV1004", name: "Sita Nair", email: "sita@example.com", mobile: "+91 65432 10987", role: "Distributor", kycStatus: "rejected", sponsor: "JV0788" },
  { id: "JV1005", name: "Gopal Varma", email: "gopal@example.com", mobile: "+91 95432 10887", role: "Distributor", kycStatus: "verified", sponsor: "JV1002" },
];

export default function AdminUsersKYC() {
  const [users, setUsers] = useState<MockUser[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const handleKycStatus = (id: string, status: "verified" | "rejected") => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, kycStatus: status } : user))
    );
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-heading text-foreground">User & KYC Verification</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Perform administrative verification on registered users and process their Aadhaar, PAN, and Bank details.
        </p>
      </div>

      {/* Control panel */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, ID, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-10 rounded-xl"
          />
        </div>
      </div>

      {/* Users table */}
      <Card className="rounded-3xl border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border/40 pb-4">
          <CardTitle className="text-lg font-bold font-heading text-foreground">
            Registered Distributors
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-xs font-semibold text-muted-foreground bg-muted/20">
                <th className="p-4 pl-6">User Details</th>
                <th className="p-4">Mobile</th>
                <th className="p-4">Sponsor ID</th>
                <th className="p-4">KYC Status</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 text-sm">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-muted/10 transition-colors">
                    <td className="p-4 pl-6">
                      <div className="font-semibold text-foreground">{user.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                        <span className="bg-brand-primary/10 text-brand-primary px-1.5 py-0.5 rounded text-[10px] font-bold uppercase">
                          {user.id}
                        </span>
                        <span>{user.email}</span>
                      </div>
                    </td>
                    <td className="p-4 text-foreground">{user.mobile}</td>
                    <td className="p-4">
                      <span className="font-mono text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">
                        {user.sponsor}
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${
                          user.kycStatus === "verified"
                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                            : user.kycStatus === "rejected"
                            ? "bg-red-500/10 text-red-600 border-red-500/20"
                            : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                        }`}
                      >
                        {user.kycStatus}
                      </Badge>
                    </td>
                    <td className="p-4 pr-6 text-right">
                      {user.kycStatus === "pending" ? (
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleKycStatus(user.id, "verified")}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg px-3 flex items-center gap-1 h-8"
                          >
                            <Check className="w-3.5 h-3.5" /> Verify
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleKycStatus(user.id, "rejected")}
                            className="text-red-600 border-red-200 hover:bg-red-50 rounded-lg px-3 flex items-center gap-1 h-8"
                          >
                            <X className="w-3.5 h-3.5" /> Reject
                          </Button>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground flex items-center justify-end gap-1">
                          {user.kycStatus === "verified" ? (
                            <>
                              <UserCheck className="w-4.5 h-4.5 text-emerald-600" />
                              Approved
                            </>
                          ) : (
                            <>
                              <ShieldAlert className="w-4.5 h-4.5 text-red-600" />
                              Rejected
                            </>
                          )}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-muted-foreground">
                    No distributors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
