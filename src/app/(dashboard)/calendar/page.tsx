
"use client";

import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Plus, Clock, Trash2, Calendar as CalendarIcon, Activity, ChevronRight } from 'lucide-react';
import { HOBBIES_LIST } from '@/app/lib/mock-data';
import { format, isAfter, startOfDay } from 'date-fns';
import { es } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { useApp, CalendarEvent } from '@/app/context/AppContext';

const INITIAL_EVENT_STATE = {
  title: '',
  time: '08:00',
  type: 'Yoga',
  notes: ''
};

export default function CalendarPage() {
  const { addNotification, events, addCalendarEvent, deleteCalendarEvent } = useApp();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<typeof INITIAL_EVENT_STATE>(INITIAL_EVENT_STATE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDate(new Date());
  }, []);

  const handleAddEvent = () => {
    if (!newEvent.title || !date) return;
    const event: CalendarEvent = {
      id: Math.random().toString(36).substr(2, 9),
      title: newEvent.title,
      time: newEvent.time,
      type: newEvent.type,
      date: date,
      notes: newEvent.notes
    };
    addCalendarEvent(event);
    addNotification('Evento Programado', `Has añadido "${event.title}" a tu agenda.`, 'activity');
    setIsAddOpen(false);
    setNewEvent(INITIAL_EVENT_STATE);
  };

  const handleDeleteEvent = (id: string) => {
    const event = events.find(e => e.id === id);
    deleteCalendarEvent(id);
    if (event) {
      addNotification('Evento Eliminado', `Se ha quitado "${event.title}" de tu agenda.`, 'activity');
    }
  };

  const dayEvents = events.filter(e => 
    date && e.date.toDateString() === date.toDateString()
  ).sort((a, b) => a.time.localeCompare(b.time));

  const upcomingEvents = events.filter(e => 
    date && isAfter(startOfDay(e.date), startOfDay(date))
  ).sort((a, b) => a.date.getTime() - b.date.getTime() || a.time.localeCompare(b.time));

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 p-6 animate-fade-in bg-secondary/5 min-h-screen pb-24">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tu Agenda</h1>
          <p className="text-xs text-muted-foreground">Gestiona tus eventos y metas</p>
        </div>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button size="icon" className="rounded-2xl h-12 w-12 bg-primary shadow-lg shadow-primary/20">
              <Plus size={24} />
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[2.5rem] max-w-[90vw] p-8">
            <DialogHeader>
              <DialogTitle>Nuevo Evento</DialogTitle>
              <DialogDescription className="text-xs">
                Programando para el {date ? format(date, "EEEE d 'de' MMMM", { locale: es }) : 'día seleccionado'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-5 py-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">¿Qué harás?</Label>
                <Input 
                  value={newEvent.title} 
                  onChange={e => setNewEvent(p => ({ ...p, title: e.target.value }))} 
                  placeholder="Ej: Yoga matutino" 
                  className="rounded-2xl h-12 bg-secondary/20 border-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Categoría</Label>
                  <Select value={newEvent.type} onValueChange={v => setNewEvent(p => ({ ...p, type: v }))}>
                    <SelectTrigger className="rounded-2xl h-12 bg-secondary/20 border-none">
                      <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      {HOBBIES_LIST.map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Hora</Label>
                  <Input 
                    type="time" 
                    value={newEvent.time} 
                    onChange={e => setNewEvent(p => ({ ...p, time: e.target.value }))} 
                    className="rounded-2xl h-12 bg-secondary/20 border-none"
                  />
                </div>
              </div>
              <div className="pt-4">
                <Button onClick={handleAddEvent} className="w-full h-14 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-primary/20">
                  Añadir al Calendario
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      <section className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-border/50 overflow-hidden min-h-[400px] flex flex-col justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-auto"
          locale={es}
          classNames={{
            day_selected: "bg-primary text-primary-foreground rounded-xl hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-secondary text-primary font-bold rounded-xl",
            day: cn("h-10 w-10 p-0 font-normal aria-selected:opacity-100 rounded-xl transition-colors hover:bg-secondary/50"),
          }}
        />
      </section>

      {/* Eventos del día seleccionado */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="font-bold text-lg text-primary">
            {date ? format(date, "d 'de' MMMM", { locale: es }) : 'Selecciona un día'}
          </h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
            {dayEvents.length} {dayEvents.length === 1 ? 'evento' : 'eventos'}
          </Badge>
        </div>

        {dayEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-[2.5rem] border border-dashed border-muted-foreground/20 text-center">
            <div className="bg-secondary/30 p-3 rounded-full mb-3">
              <CalendarIcon size={24} className="text-primary/40" />
            </div>
            <p className="text-muted-foreground text-xs font-medium">No hay eventos para este día.</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {dayEvents.map(event => (
              <Card key={event.id} className="rounded-3xl border-none shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow group">
                <CardContent className="p-4 flex gap-4 items-center">
                  <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Activity size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm truncate">{event.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Clock size={12} className="text-primary" /> {event.time}</span>
                      <span className="flex items-center gap-1"><Badge variant="outline" className="text-[8px] py-0 px-1.5 border-primary/20 text-primary">{event.type}</Badge></span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteEvent(event.id)} className="text-destructive/40 hover:text-destructive hover:bg-destructive/5 rounded-xl">
                    <Trash2 size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Próximos Eventos */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between px-2">
          <h2 className="font-bold text-lg text-foreground/80 flex items-center gap-2">
            Próximos Eventos
          </h2>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="p-6 bg-white/50 rounded-[2.5rem] border border-dashed border-muted-foreground/10 text-center">
            <p className="text-muted-foreground text-xs font-medium">No hay próximos eventos en tu agenda.</p>
          </div>
        ) : (
          <div className="grid gap-3">
            {upcomingEvents.map(event => (
              <Card 
                key={event.id} 
                className="rounded-3xl border-none shadow-none bg-white/60 hover:bg-white transition-all cursor-pointer border border-transparent hover:border-primary/10"
                onClick={() => setDate(event.date)}
              >
                <CardContent className="p-4 flex gap-4 items-center">
                  <div className="flex flex-col items-center justify-center bg-white rounded-2xl h-12 w-12 shadow-sm border border-border/50 shrink-0">
                    <span className="text-[10px] font-bold text-primary uppercase">{format(event.date, 'MMM', { locale: es })}</span>
                    <span className="text-sm font-black leading-none">{format(event.date, 'd')}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm truncate">{event.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground">
                      <Clock size={12} className="text-primary/60" /> 
                      <span>{event.time}</span>
                      <span className="text-primary/20">•</span>
                      <span>{event.type}</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground/30" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
