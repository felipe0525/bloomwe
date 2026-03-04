"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Users, Zap, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Home', icon: Home, href: '/home' },
  { label: 'Calendario', icon: Calendar, href: '/calendar' },
  { label: 'Social', icon: Users, href: '/social' },
  { label: 'Hacer', icon: Zap, href: '/hacer' },
  { label: 'Perfil', icon: User, href: '/profile' },
];

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto h-16 bg-white border-t border-border flex items-center justify-around px-2 z-50 tab-bar-shadow rounded-t-2xl">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full transition-all duration-300",
              isActive ? "text-primary scale-110" : "text-muted-foreground"
            )}
          >
            <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium mt-1">{item.label}</span>
            {isActive && <div className="absolute bottom-1 w-1 h-1 bg-primary rounded-full" />}
          </Link>
        );
      })}
    </nav>
  );
};