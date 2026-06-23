"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, UserPlus, CheckCircle, HelpCircle, Network, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NetworkNode {
  id: string;
  name: string;
  role: string;
  rank: string;
  sales: string;
  status: "active" | "inactive";
  leftLeg?: NetworkNode;
  rightLeg?: NetworkNode;
}

const mockNetwork: NetworkNode = {
  id: "1",
  name: "You (Jeevandayni Partner)",
  role: "Diamond Crown",
  rank: "Active",
  sales: "₹24,50,000",
  status: "active",
  leftLeg: {
    id: "2",
    name: "Amit Sharma",
    role: "Emerald Star",
    rank: "Active",
    sales: "₹12,40,000",
    status: "active",
    leftLeg: {
      id: "4",
      name: "Rohan Gupta",
      role: "Gold Member",
      rank: "Active",
      sales: "₹5,20,000",
      status: "active",
    },
    rightLeg: {
      id: "5",
      name: "Sanjana Verma",
      role: "Silver Member",
      rank: "Active",
      sales: "₹3,80,000",
      status: "active",
    },
  },
  rightLeg: {
    id: "3",
    name: "Priya Patel",
    role: "Ruby Star",
    rank: "Active",
    sales: "₹10,10,000",
    status: "active",
    leftLeg: {
      id: "6",
      name: "Vikram Malhotra",
      role: "Active Member",
      rank: "Active",
      sales: "₹1,90,000",
      status: "active",
    },
    rightLeg: {
      id: "7",
      name: "Neha Joshi",
      role: "Inactive Member",
      rank: "Pending KYC",
      sales: "₹0",
      status: "inactive",
    },
  },
};

export default function NetworkVisualization() {
  const [selectedNode, setSelectedNode] = useState<NetworkNode>(mockNetwork);
  const [hoveredNode, setHoveredNode] = useState<NetworkNode | null>(null);

  const renderTreeLines = () => {
    // Return SVG lines connecting the nodes
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: "450px" }}>
        <defs>
          <linearGradient id="line-grad-active" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F766E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="line-grad-inactive" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#64748B" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Layer 1 to Layer 2 */}
        <line x1="50%" y1="50" x2="25%" y2="180" stroke="url(#line-grad-active)" strokeWidth="2.5" strokeDasharray="4 4" />
        <line x1="50%" y1="50" x2="75%" y2="180" stroke="url(#line-grad-active)" strokeWidth="2.5" strokeDasharray="4 4" />

        {/* Layer 2 Left to Layer 3 */}
        <line x1="25%" y1="180" x2="12.5%" y2="310" stroke="url(#line-grad-active)" strokeWidth="2" />
        <line x1="25%" y1="180" x2="37.5%" y2="310" stroke="url(#line-grad-active)" strokeWidth="2" />

        {/* Layer 2 Right to Layer 3 */}
        <line x1="75%" y1="180" x2="62.5%" y2="310" stroke="url(#line-grad-active)" strokeWidth="2" />
        <line x1="75%" y1="180" x2="87.5%" y2="310" stroke="url(#line-grad-inactive)" strokeWidth="2" />
      </svg>
    );
  };

  const NodeCard = ({ node, className, positionStyle }: { node: NetworkNode; className?: string; positionStyle: React.CSSProperties }) => {
    const isActive = node.status === "active";
    return (
      <div
        style={positionStyle}
        className={`absolute -translate-x-1/2 flex flex-col items-center z-10 ${className}`}
        onMouseEnter={() => setHoveredNode(node)}
        onMouseLeave={() => setHoveredNode(null)}
        onClick={() => setSelectedNode(node)}
      >
        <motion.div
          whileHover={{ scale: 1.08 }}
          className={`cursor-pointer w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-lg transition-colors ${
            isActive
              ? "bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 border-brand-primary hover:border-brand-secondary text-brand-primary"
              : "bg-muted border-muted-foreground/30 text-muted-foreground"
          }`}
        >
          <Network className="w-6 h-6" />
        </motion.div>
        <div className="mt-2 text-center">
          <p className="text-xs font-semibold font-heading max-w-[120px] truncate text-foreground">
            {node.name.split(" ")[0]}
          </p>
          <p className="text-[10px] text-muted-foreground">{node.role}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="network-visual" className="py-24 lg:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 mb-3 px-3 py-1 text-xs">
            Interactive MLM Tree
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Visualize Your <span className="gradient-text">Referral Network</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch your binary legs grow in real-time. Click on any network node to inspect downline sales performance, KYC status, and commissions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          {/* Left panel: Info & Control */}
          <div className="lg:col-span-1 flex flex-col justify-between space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-primary" /> Node Inspector
              </h3>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Name</span>
                    <p className="font-semibold text-foreground">{selectedNode.name}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Current Role</span>
                      <p className="text-sm font-medium text-foreground">{selectedNode.role}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Status</span>
                      <Badge className={selectedNode.status === "active" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-amber-500/10 text-amber-600 border-amber-500/20"}>
                        {selectedNode.rank}
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Total Team Sales</span>
                    <p className="text-xl font-bold text-brand-primary flex items-center gap-1 font-numbers">
                      <IndianRupee className="w-4 h-4 shrink-0" />
                      {selectedNode.sales.replace("₹", "")}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-6 text-white shadow-xl">
              <h4 className="font-heading font-bold text-lg mb-2 flex items-center gap-2">
                <UserPlus className="w-5 h-5" /> Start Earning Today
              </h4>
              <p className="text-sm text-white/80 mb-6">
                Build your two binary wings, support your partners, and claim your share of the direct & matching sales commissions.
              </p>
              <Button variant="secondary" className="w-full bg-white text-brand-primary hover:bg-white/90">
                Join Network Now
              </Button>
            </div>
          </div>

          {/* Right panel: SVG Interactive Tree */}
          <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-6 shadow-sm relative min-h-[450px] flex items-center justify-center overflow-x-auto">
            <div className="relative w-full max-w-[650px] h-[400px] shrink-0">
              {renderTreeLines()}

              {/* Node Placement */}
              {/* Level 1 Root */}
              <NodeCard node={mockNetwork} positionStyle={{ left: "50%", top: "20px" }} />

              {/* Level 2 Children */}
              {mockNetwork.leftLeg && (
                <NodeCard node={mockNetwork.leftLeg} positionStyle={{ left: "25%", top: "150px" }} />
              )}
              {mockNetwork.rightLeg && (
                <NodeCard node={mockNetwork.rightLeg} positionStyle={{ left: "75%", top: "150px" }} />
              )}

              {/* Level 3 Children Left Leg */}
              {mockNetwork.leftLeg?.leftLeg && (
                <NodeCard node={mockNetwork.leftLeg.leftLeg} positionStyle={{ left: "12.5%", top: "280px" }} />
              )}
              {mockNetwork.leftLeg?.rightLeg && (
                <NodeCard node={mockNetwork.leftLeg.rightLeg} positionStyle={{ left: "37.5%", top: "280px" }} />
              )}

              {/* Level 3 Children Right Leg */}
              {mockNetwork.rightLeg?.leftLeg && (
                <NodeCard node={mockNetwork.rightLeg.leftLeg} positionStyle={{ left: "62.5%", top: "280px" }} />
              )}
              {mockNetwork.rightLeg?.rightLeg && (
                <NodeCard node={mockNetwork.rightLeg.rightLeg} positionStyle={{ left: "87.5%", top: "280px" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
