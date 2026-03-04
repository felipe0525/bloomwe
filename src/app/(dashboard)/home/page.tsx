"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useApp, RegisteredActivity } from '@/app/context/AppContext';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Flame, Droplets, Dumbbell, Brain, Apple, Clock, CheckCircle2, Zap, MapPin, Calendar as CalendarIcon, Trash2, Sparkles, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORY_ICONS: Record<string, any> = {
  hydration: Droplets,
  exercise: Dumbbell,
  mental: Brain,
  nutrition: Apple,
  default: Zap
};

export default function HomePage() {
  const { 
    userData, 
    dailyTips, 
    completedTipsToday, 
    toggleTipCompletion, 
    streak, 
    refreshTips, 
    registeredActivities, 
    cancelActivity,
    notifications 
  } = useApp();
  
  const [selectedTip, setSelectedTip] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [activityToCancel, setActivityToCancel] = useState<RegisteredActivity | null>(null);

  // Efecto corregido para generar tips inmediatamente cuando userData esté listo y no haya tips
  useEffect(() => {
    if (userData && dailyTips.length === 0 && !loading) {
      setLoading(true);
      refreshTips().finally(() => setLoading(false));
    }
  }, [dailyTips.length, refreshTips, userData, loading]);

  const progress = dailyTips.length > 0 ? (completedTipsToday.length / dailyTips.length) * 100 : 0;
  const hasUnreadNotifications = notifications.some(n => n.unread);

  const handleCancelActivity = () => {
    if (activityToCancel) {
      cancelActivity(activityToCancel.id);
      setActivityToCancel(null);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 animate-fade-in max-w-full overflow-x-hidden bg-secondary/5 min-h-screen pb-24">
      <header className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-muted-foreground text-sm font-medium truncate">¡Hola, {userData?.name?.split(' ')[0]}!</p>
          <h1 className="text-2xl font-bold truncate">Tu bloomWe hoy</h1>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/notifications">
            <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-full bg-white shadow-sm hover:bg-primary/5">
              <Bell size={20} className="text-primary" />
              {hasUnreadNotifications && (
                <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
              )}
            </Button>
          </Link>
          <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-full text-orange-600 border border-orange-100 shadow-sm">
            <Flame size={18} fill="currentColor" className="text-orange-500" />
            <span className="font-bold">{streak}</span>
          </div>
        </div>
      </header>

      <section className="space-y-4">
        <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-border">
          <div className="flex justify-between items-end mb-4">
            <h2 className="font-bold text-lg">Tu Progreso</h2>
            <span className="text-2xl font-black text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-4 bg-secondary" />
          <p className="text-xs text-muted-foreground mt-3 text-center font-medium">
            {completedTipsToday.length === dailyTips.length ? "¡Increíble! Has completado todo por hoy 🎉" : `Has completado ${completedTipsToday.length} de ${dailyTips.length} tips`}
          </p>
        </div>
      </section>

      {registeredActivities.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="font-bold text-xl">Tus Próximas Actividades</h2>
            <Badge variant="outline" className="text-[10px] border-primary/30 text-primary">Inscrito</Badge>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
            {registeredActivities.map((activity) => (
              <Card key={activity.id} className="min-w-[280px] rounded-3xl border-none shadow-sm bg-white overflow-hidden shrink-0 border border-border/50 relative group">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-xl text-primary">
                        <Dumbbell size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{activity.title}</h4>
                        <p className="text-[10px] text-primary font-bold uppercase">{activity.sport}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-destructive/40 hover:text-destructive hover:bg-destructive/5 rounded-full transition-colors"
                      onClick={() => setActivityToCancel(activity)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-medium">
                      <CalendarIcon size={14} className="text-primary" /> {activity.date}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-medium">
                      <Clock size={14} className="text-primary" /> {activity.time}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-medium">
                      <MapPin size={14} className="text-primary" /> {activity.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section className="space-y-4 w-full">
        <div className="flex items-center justify-between gap-2 px-2">
          <h2 className="font-bold text-xl shrink-0">Tips Diarios</h2>
          {dailyTips.length > 0 && (
            <Badge variant="secondary" className="bg-secondary/50 text-primary text-[10px] whitespace-nowrap border-none">Nuevos tips en 12h</Badge>
          )}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-[2.5rem] border border-dashed border-primary/20 text-center animate-pulse">
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Sparkles size={32} className="text-primary animate-spin" />
            </div>
            <h3 className="font-bold text-lg text-primary">Generando tus tips...</h3>
            <p className="text-muted-foreground text-sm font-medium mt-2">
              Estamos preparando contenido personalizado para tu bienestar.
            </p>
          </div>
        ) : dailyTips.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-[2.5rem] border border-dashed border-primary/20 text-center">
            <div className="bg-secondary/30 p-4 rounded-full mb-4">
              <Zap size={32} className="text-primary/30" />
            </div>
            <p className="text-muted-foreground text-sm font-medium">No se pudieron cargar los tips. Inténtalo de nuevo más tarde.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 w-full px-1">
            {dailyTips.map((tip) => {
              const Icon = CATEGORY_ICONS[tip.category.toLowerCase()] || CATEGORY_ICONS.default;
              const isCompleted = completedTipsToday.includes(tip.id);
              
              return (
                <Card 
                  key={tip.id} 
                  className={cn(
                    "transition-all duration-300 border border-border shadow-none rounded-[1.8rem] cursor-pointer w-full overflow-hidden", 
                    isCompleted ? "bg-primary/5 border-primary/20 opacity-70" : "bg-white hover:shadow-md"
                  )}
                  onClick={() => setSelectedTip(tip)}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className={cn("p-3 rounded-2xl shrink-0", isCompleted ? "bg-primary text-white" : "bg-secondary text-primary")}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn("font-bold text-sm truncate", isCompleted && "text-muted-foreground line-through")}>{tip.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[9px] uppercase tracking-wider font-black text-primary/80 truncate">{tip.category}</span>
                        <span className="text-muted-foreground text-[10px]">•</span>
                        <span className="text-muted-foreground text-[10px] font-medium">{tip.timeEstimate} min</span>
                      </div>
                    </div>
                    <div className="shrink-0" onClick={(e) => { e.stopPropagation(); toggleTipCompletion(tip.id); }}>
                       <div className={cn("w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all", isCompleted ? "bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/20" : "border-muted-foreground/20 bg-secondary/10 hover:border-primary/50")}>
                         {isCompleted && <CheckCircle2 size={18} />}
                       </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* Modal de Detalle de Tip */}
      <Dialog open={!!selectedTip} onOpenChange={() => setSelectedTip(null)}>
        <DialogContent className="sm:max-w-md rounded-[2.5rem] p-0 overflow-y-auto max-h-[90vh] border-none max-w-[92vw] no-scrollbar">
          {selectedTip && (
            <>
              <DialogHeader className="p-0 space-y-0 h-0 overflow-hidden">
                <DialogTitle className="sr-only">{selectedTip.title}</DialogTitle>
                <DialogDescription className="sr-only">{selectedTip.description}</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col">
                <div className="h-44 bg-primary flex items-center justify-center text-white p-8 text-center relative overflow-hidden shrink-0">
                  <div className="absolute top-0 right-0 p-12 bg-white/10 rounded-full -mr-12 -mt-12" />
                  <div className="absolute bottom-0 left-0 p-8 bg-black/5 rounded-full -ml-8 -mb-8" />
                  <h2 className="text-2xl font-black relative z-10">{selectedTip.title}</h2>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex justify-around bg-secondary/30 p-5 rounded-[2rem]">
                    <div className="text-center">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Nivel</p>
                      <p className="font-bold text-primary">{selectedTip.level}</p>
                    </div>
                    <div className="w-px bg-primary/20" />
                    <div className="text-center">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Tiempo</p>
                      <p className="font-bold text-primary">{selectedTip.timeEstimate} min</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-black text-[11px] text-primary uppercase tracking-[0.2em] mb-2">Descripción</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{selectedTip.description}</p>
                  </div>

                  <div>
                    <h4 className="font-black text-[11px] text-primary uppercase tracking-[0.2em] mb-3">Actividades Relacionadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTip.activities.map((a: string) => (
                        <Badge key={a} variant="secondary" className="bg-primary/5 border-none text-primary text-[10px] px-3 py-1 font-bold rounded-full">{a}</Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => {
                      toggleTipCompletion(selectedTip.id);
                      setSelectedTip(null);
                    }}
                    className={cn("w-full h-14 rounded-2xl font-bold text-lg shadow-lg transition-all", completedTipsToday.includes(selectedTip.id) ? "bg-muted text-muted-foreground shadow-none" : "bg-primary hover:bg-primary/90 shadow-primary/20")}
                  >
                    {completedTipsToday.includes(selectedTip.id) ? 'Marcar como pendiente' : '¡Completado!'}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Confirmación de Cancelación */}
      <Dialog open={!!activityToCancel} onOpenChange={() => setActivityToCancel(null)}>
        <DialogContent className="rounded-[2.5rem] max-w-[85vw] p-8 text-center border-none shadow-2xl">
          {activityToCancel && (
            <>
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-black text-destructive flex flex-col items-center gap-4">
                  <div className="bg-destructive/10 p-4 rounded-full">
                    <Trash2 size={40} className="text-destructive" />
                  </div>
                  ¿Cancelar actividad?
                </DialogTitle>
                <DialogDescription className="text-center pt-2 text-sm font-medium leading-relaxed">
                  Estás a punto de cancelar tu inscripción para <span className="text-primary font-bold">{activityToCancel.title}</span>. 
                  <br /><br />
                  ¿Estás seguro de que quieres eliminarla de tus actividades?
                </DialogDescription>
              </DialogHeader>
              <div className="pt-6 flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setActivityToCancel(null)} 
                  className="flex-1 h-12 rounded-2xl border-primary/20 text-primary font-bold"
                >
                  Volver
                </Button>
                <Button 
                  variant="destructive"
                  onClick={handleCancelActivity} 
                  className="flex-[1.5] h-12 rounded-2xl font-bold shadow-lg shadow-destructive/20"
                >
                  Sí, Cancelar
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
