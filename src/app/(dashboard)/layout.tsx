"use client";

import { AppProvider } from '../context/AppContext';
import { BottomNav } from '@/components/BottomNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen pb-20 overflow-x-hidden">
        {children}
        <BottomNav />
      </div>
    </AppProvider>
  );
}
