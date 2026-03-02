"use client";

import { useMemo } from "react";
import { useRoles } from "@/context/role-context";
import { useCollection, useFirestore } from "@/firebase";
import { doc, updateDoc, collection, query, where } from "firebase/firestore";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Clock, User, UserPlus } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

export default function ApprovalsPage() {
  const { role, division } = useRoles();
  const firestore = useFirestore();

  const isBoss = role === 'admin_boss';
  
  const enrollmentQuery = useMemo(() => {
    if (!firestore || !isBoss) return null;
    return query(collection(firestore, 'enrollmentRequests'), where('status', '==', 'pending'));
  }, [firestore, isBoss]);
  
  const { data: enrollmentRequests } = useCollection(enrollmentQuery);

  const handleApproveEnrollment = async (reqId: string, uid: string) => {
    if (!firestore) return;
    updateDoc(doc(firestore, "enrollmentRequests", reqId), { status: "approved" });
    updateDoc(doc(firestore, "users", uid), { status: "active" });
    toast({ title: "Access Granted", description: "User has been activated." });
  };

  const handleDeclineEnrollment = async (reqId: string, uid: string) => {
    if (!firestore) return;
    updateDoc(doc(firestore, "enrollmentRequests", reqId), { status: "rejected" });
    updateDoc(doc(firestore, "users", uid), { status: "rejected" });
    toast({ title: "Access Denied", description: "Enrollment request rejected." });
  };

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto">
      <motion.div {...fadeInUp} className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tighter">Approval Center</h1>
        <p className="text-slate-500 font-medium italic">
          {isBoss ? "Reviewing global policy changes and staff enrollment." : `Reviewing Staff requests for ${division} operations.`}
        </p>
      </motion.div>

      <Tabs defaultValue="operational" className="w-full">
        <TabsList className="bg-slate-100 border border-slate-200 p-1 h-12 mb-6">
          <TabsTrigger value="operational" className="data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-[10px] uppercase tracking-widest px-8">
            <Clock className="w-3.5 h-3.5 mr-2" /> Operational Queue
          </TabsTrigger>
          {isBoss && (
            <TabsTrigger value="enrollment" className="data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-[10px] uppercase tracking-widest px-8">
              <UserPlus className="w-3.5 h-3.5 mr-2" /> Enrollment Requests
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="operational">
          <Card className="bg-white border-slate-200 p-12 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
            <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <Check className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Queue Clear</h3>
              <p className="text-sm text-slate-500">No pending operational requests require your authorization.</p>
            </div>
          </Card>
        </TabsContent>

        {isBoss && (
          <TabsContent value="enrollment">
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              {enrollmentRequests && enrollmentRequests.length > 0 ? (
                <Card className="bg-white border-slate-200 overflow-hidden shadow-sm">
                  <Table>
                    <TableHeader className="bg-slate-50">
                      <TableRow className="border-slate-100">
                        <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary">Applicant</TableHead>
                        <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary">Requested Division</TableHead>
                        <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary">Submitted</TableHead>
                        <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary text-right">Clearance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {enrollmentRequests.map((req: any) => (
                        <TableRow key={req.id} className="border-slate-50 hover:bg-slate-50/50">
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <User className="w-3.5 h-3.5 text-slate-400" />
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-slate-900">{req.name}</span>
                                <span className="text-[10px] text-slate-400">{req.email}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-[10px] uppercase border-primary/20 text-primary bg-primary/5">
                              {req.requestedDivision}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-xs text-slate-500">
                            {req.timestamp?.seconds ? format(new Date(req.timestamp.seconds * 1000), 'MMM d, HH:mm') : 'Recent'}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => handleDeclineEnrollment(req.id, req.uid)}
                                className="h-8 w-8 p-0 text-red-500 hover:bg-red-50"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                onClick={() => handleApproveEnrollment(req.id, req.uid)}
                                className="h-8 bg-primary text-white font-bold text-[10px] uppercase px-4"
                              >
                                Grant Access
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              ) : (
                <Card className="bg-white border-slate-200 p-12 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                    <UserPlus className="h-6 w-6 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">No Pending Applicants</h3>
                    <p className="text-sm text-slate-500">All enrollment requests have been processed.</p>
                  </div>
                </Card>
              )}
            </motion.div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
