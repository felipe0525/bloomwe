"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppProvider, useApp } from './context/AppContext';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

function AppInitializer() {
  const { userData, currentUser, isLoaded } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (!currentUser) {
        router.push('/auth');
      } else if (!userData || !userData.onboarded) {
        router.push('/onboarding');
      } else {
        router.push('/home');
      }
    }
  }, [isLoaded, currentUser, userData, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8 gap-4">
      <div className="w-32 h-32 relative animate-bounce">
        <Image 
          src="https://res.cloudinary.com/dwoyltoyd/image/upload/v1770524240/dcfa7675-cd52-4d56-8a44-ee3279d51914.png"
          alt="bloomWe Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h1 className="text-2xl font-bold text-primary">bloomWe</h1>
      <Skeleton className="h-4 w-48" />
    </div>
  );
}

export default function EntryPage() {
  return (
    <AppProvider>
      <AppInitializer />
    </AppProvider>
  );
}
