"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRoles } from '@/context/role-context';
import { Loader2 } from 'lucide-react';

/**
 * Root Landing Page
 * Handles immediate redirection based on verified profile status.
 */
export default function Home() {
  const { user, profile, loading } = useRoles();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace('/login');
    } else if (profile?.status === 'pending') {
      router.replace('/login'); 
    } else if (profile?.status === 'active') {
      router.replace('/dashboard');
    } else {
      // Handle cases where auth exists but profile is missing
      router.replace('/login');
    }
  }, [user, profile, loading, router]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40">
          Syncing Session...
        </p>
      </div>
    </div>
  );
}