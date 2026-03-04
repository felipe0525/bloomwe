"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Bell, Zap, Users, Flame, Info, Trash2 } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';
import { cn } from '@/lib/utils';

const CATEGORY_ICONS: Record<string, any> = {
  activity: Zap,
  match: Users,
  streak: Flame,
  tip: Info,
  default: Bell
};

export default function NotificationsPage() {
  const router = useRouter();
  const { notifications, markAllNotificationsAsRead, clearAllNotifications } = useApp();

  return (
    <div className="flex flex-col gap-6 p-6 animate-fade-in bg-secondary/5 min-h-screen pb-24">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => router.back()} 
            className="rounded-full bg-white shadow-sm hover:bg-primary/5 shrink-0"
          >
            <ChevronLeft size={24} className="text-primary" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Notificaciones</h1>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Lo último en bloomWe</p>
          </div>
        </div>
        
        {notifications.length > 0 && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={clearAllNotifications}
            className="rounded-full bg-white shadow-sm hover:bg-destructive/10 text-destructive/50 hover:text-destructive shrink-0"
            title="Borrar todas las notificaciones"
          >
            <Trash2 size={20} />
          </Button>
        )}
      </header>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-[2.5rem] border border-dashed border-muted-foreground/20">
            <div className="bg-secondary/30 p-4 rounded-full mb-4">
              <Bell size={32} className="text-primary/30" />
            </div>
            <p className="text-muted-foreground font-medium text-sm">No tienes notificaciones por ahora.</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {notifications.map((notif) => {
              const Icon = CATEGORY_ICONS[notif.category] || CATEGORY_ICONS.default;
              return (
                <Card 
                  key={notif.id} 
                  className={cn(
                    "rounded-3xl border-none shadow-sm overflow-hidden bg-white transition-all",
                    notif.unread && "border-l-4 border-l-primary"
                  )}
                >
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className={cn(
                      "p-3 rounded-2xl shrink-0",
                      notif.unread ? "bg-primary/10 text-primary" : "bg-secondary/30 text-muted-foreground"
                    )}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className={cn("font-bold text-sm", notif.unread ? "text-foreground" : "text-muted-foreground")}>
                          {notif.title}
                        </h3>
                        {notif.unread && (
                          <span className="h-2 w-2 bg-primary rounded-full shrink-0 mt-1.5" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {notif.description}
                      </p>
                      <p className="text-[10px] text-primary/60 font-bold mt-2 uppercase tracking-tighter">
                        {notif.time}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {notifications.length > 0 && (
        <div className="mt-4 px-2">
          <Button 
            variant="outline" 
            onClick={markAllNotificationsAsRead}
            className="w-full h-12 rounded-2xl border-primary/20 text-primary font-bold bg-white shadow-sm"
          >
            Marcar todas como leídas
          </Button>
        </div>
      )}
    </div>
  );
}
