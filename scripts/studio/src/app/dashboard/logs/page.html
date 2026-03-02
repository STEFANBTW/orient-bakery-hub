
'use client';

import { useState, useMemo } from 'react';
import { useRoles } from '@/context/role-context';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  History, 
  Search, 
  Filter, 
  ArrowRight, 
  User, 
  ShieldCheck,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function AuditTrailPage() {
  const { currentUser, auditLogs } = useRoles();
  const [searchQuery, setSearchQuery] = useState('');
  const [divisionFilter, setDivisionFilter] = useState<string>('all');

  const isBoss = currentUser?.role === 'admin_boss';

  const filteredLogs = useMemo(() => {
    return auditLogs.filter(log => {
      const matchesSearch = log.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          log.staffName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDivision = isBoss 
        ? (divisionFilter === 'all' || log.division === divisionFilter)
        : log.division === currentUser?.division;

      return matchesSearch && matchesDivision;
    });
  }, [auditLogs, searchQuery, divisionFilter, isBoss, currentUser]);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <History className="w-5 h-5 text-primary" />
            </div>
            <Badge className="bg-slate-100 border-slate-200 text-slate-500 text-[9px] font-bold tracking-[0.2em] px-3 uppercase">
              Audit Trail
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter uppercase font-headline italic">
            Update History
          </h1>
          <p className="text-slate-500 font-medium italic">
            {isBoss ? "Global record of all authorized company adjustments." : `History of updates for the ${currentUser?.division} node.`}
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <Input 
            placeholder="Search items or personnel..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 bg-white border-slate-200 text-sm focus:ring-primary"
          />
        </div>
        
        {isBoss && (
          <div className="w-full md:w-[200px]">
            <Select value={divisionFilter} onValueChange={setDivisionFilter}>
              <SelectTrigger className="h-11 bg-white border-slate-200 font-bold text-[10px] uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  <SelectValue placeholder="All Divisions" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Divisions</SelectItem>
                <SelectItem value="bakery">Bakery</SelectItem>
                <SelectItem value="dining">Dining</SelectItem>
                <SelectItem value="games">Games</SelectItem>
                <SelectItem value="lounge">Lounge</SelectItem>
                <SelectItem value="market">Market</SelectItem>
                <SelectItem value="water">Water</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <Card className="bg-white border-slate-200 shadow-sm overflow-hidden">
        <ScrollArea className="w-full">
          <div className="min-w-[1000px]">
            <Table>
              <TableHeader className="bg-slate-50 border-b border-slate-200">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary py-5 px-6">Date & Time</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary px-6">Updated Item</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary px-6">Change Record</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary px-6">Personnel</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary px-6">Auth Level</TableHead>
                  {isBoss && <TableHead className="text-[10px] font-bold uppercase tracking-widest text-primary px-6">Division</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <TableRow key={log.id} className="border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <TableCell className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-900">
                            {format(new Date(log.timestamp), 'MMM d, yyyy')}
                          </span>
                          <span className="text-[10px] text-slate-400 font-code">
                            {format(new Date(log.timestamp), 'HH:mm:ss')}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-900">{log.itemName}</span>
                          <span className="text-[10px] text-slate-400 italic truncate max-w-[180px]">{log.reason}</span>
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400 line-through decoration-slate-300">{log.oldValue}</span>
                          <ArrowRight className="w-3 h-3 text-primary" />
                          <span className="text-xs text-emerald-600 font-bold">{log.newValue}</span>
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-slate-300" />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-900">{log.staffName}</span>
                            <span className="text-[9px] text-slate-400 uppercase font-bold">{log.staffRole}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-primary/40" />
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-900">{log.approverName}</span>
                            <span className="text-[9px] text-primary uppercase font-bold">{log.approverRole}</span>
                          </div>
                        </div>
                      </TableCell>
                      {isBoss && (
                        <TableCell className="px-6 py-4">
                          <Badge variant="outline" className="text-[9px] uppercase tracking-widest bg-slate-50 border-slate-200">
                            {log.division}
                          </Badge>
                        </TableCell>
                      )}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={isBoss ? 6 : 5} className="h-40 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <History className="w-8 h-8 text-slate-200" />
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">No history records found matching your filters.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}
