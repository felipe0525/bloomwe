
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '@/app/context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription 
} from '@/components/ui/dialog';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  Settings, LogOut, Edit2, Flame, Trophy, Calendar, 
  ChevronRight, MapPin, Mail, Bell, Shield, Info, Camera, Lock, Eye, EyeOff,
  Crown, Medal, Award, Star, CheckCircle2, Activity, Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const STATS_DATA = [
  { name: 'Lun', value: 3 },
  { name: 'Mar', value: 5 },
  { name: 'Mie', value: 2 },
  { name: 'Jue', value: 8 },
  { name: 'Vie', value: 4 },
  { name: 'Sab', value: 6 },
  { name: 'Dom', value: 1 },
];

const WELLNESS_DISTRIBUTION = [
  { name: 'Ejercicio', value: 35 },
  { name: 'Nutrición', value: 25 },
  { name: 'Mente', value: 20 },
  { name: 'Hidratación', value: 20 },
];

const ENERGY_LEVELS = [
  { day: 'Lun', level: 65 },
  { day: 'Mar', level: 80 },
  { day: 'Mie', level: 55 },
  { day: 'Jue', level: 95 },
  { day: 'Vie', level: 75 },
  { day: 'Sab', level: 90 },
  { day: 'Dom', level: 70 },
];

const COLORS = ['#17B5B5', '#4FD1C5', '#38B2AC', '#2C7A7B'];

const PLANS = [
  {
    id: 'bronce',
    name: 'Bronce',
    price: 'Gratis',
    icon: Award,
    color: 'text-amber-700',
    bgColor: 'bg-amber-100',
    features: ['Tips básicos', 'Calendario limitado', 'Comunidad básica'],
    active: false
  },
  {
    id: 'plata',
    name: 'Plata',
    price: '$9.99/mes',
    icon: Medal,
    color: 'text-slate-400',
    bgColor: 'bg-slate-100',
    features: ['Tips personalizados', 'Calendario completo', 'Registro de actividades'],
    active: false
  },
  {
    id: 'oro',
    name: 'Oro',
    price: '$19.99/mes',
    icon: Crown,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    features: ['Todas las funcionalidades', 'Asesoría con expertos', 'Estadísticas avanzadas'],
    active: true
  }
];

export default function ProfilePage() {
  const { userData, setUserData, streak, logout } = useApp();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isPlansOpen, setIsPlansOpen] = useState(false);
  
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    location: '',
    birthDate: ''
  });

  useEffect(() => {
    if (isEditOpen && userData) {
      setEditForm({
        name: userData.name || '',
        email: userData.email || '',
        location: userData.location || '',
        birthDate: userData.birthDate || ''
      });
    }
  }, [isEditOpen, userData]);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && userData) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({
          ...userData,
          profilePic: reader.result as string
        });
        toast({
          title: "Foto actualizada",
          description: "Tu nueva foto de perfil se ha guardado correctamente.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    if (userData) {
      setUserData({
        ...userData,
        ...editForm
      });
      setIsEditOpen(false);
      toast({
        title: "Perfil actualizado",
        description: "Tus cambios se han guardado con éxito.",
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 animate-fade-in bg-secondary/5 min-h-screen pb-24">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-white shadow-sm hover:bg-primary/5">
              <Settings size={22} className="text-primary" />
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[2.5rem] max-w-[92vw] p-8 border-none">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Editar Perfil</DialogTitle>
              <DialogDescription className="text-xs">Actualiza tu información personal de bloomWe.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Nombre</Label>
                <Input 
                  value={editForm.name} 
                  onChange={e => setEditForm(p => ({ ...p, name: e.target.value }))}
                  className="rounded-2xl h-12 bg-secondary/20 border-none"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Email</Label>
                <Input 
                  value={editForm.email} 
                  onChange={e => setEditForm(p => ({ ...p, email: e.target.value }))}
                  className="rounded-2xl h-12 bg-secondary/20 border-none"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Ubicación</Label>
                <Input 
                  value={editForm.location} 
                  onChange={e => setEditForm(p => ({ ...p, location: e.target.value }))}
                  className="rounded-2xl h-12 bg-secondary/20 border-none"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Fecha de Nacimiento</Label>
                <Input 
                  type="date"
                  value={editForm.birthDate} 
                  onChange={e => setEditForm(p => ({ ...p, birthDate: e.target.value }))}
                  className="rounded-2xl h-12 bg-secondary/20 border-none"
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <Button onClick={handleSaveProfile} className="w-full h-14 rounded-2xl bg-primary font-bold shadow-lg shadow-primary/20">
                Guardar Cambios
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      <section className="flex flex-col items-center gap-4 bg-white p-8 rounded-[3rem] shadow-sm border border-border/50">
        <div className="relative">
          <Avatar className="h-28 w-28 border-4 border-primary/20 shadow-xl">
            <AvatarImage src={userData?.profilePic} className="object-cover" />
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
              {userData?.name?.[0]}
            </AvatarFallback>
          </Avatar>
          <button 
            onClick={handleImageClick}
            className="absolute bottom-0 right-0 p-2.5 bg-primary rounded-full text-white border-2 border-white shadow-lg hover:scale-110 transition-transform"
          >
            <Camera size={16} />
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{userData?.name || 'Usuario bloomWe'}</h2>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5 mt-1 font-medium">
            <MapPin size={14} className="text-primary" /> {userData?.location || 'Mundo Saludable'}
          </p>
        </div>
        <div className="flex gap-4 w-full mt-6">
          <div className="flex-1 bg-primary/10 p-5 rounded-[2rem] text-center border border-primary/20">
            <Flame size={24} className="mx-auto text-primary mb-1" fill="currentColor" />
            <p className="text-2xl font-black text-primary">{streak}</p>
            <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">Racha</p>
          </div>
          <div className="flex-1 bg-secondary/30 p-5 rounded-[2rem] text-center border border-border/50">
            <Trophy size={24} className="mx-auto text-primary mb-1" />
            <p className="text-2xl font-black text-primary">12</p>
            <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">Logros</p>
          </div>
        </div>
      </section>

      {/* Seccion de Membresía */}
      <section className="space-y-4">
        <h2 className="font-bold text-lg px-2 text-primary flex items-center gap-2">
          <Star size={20} /> Membresía
        </h2>
        <Card className="rounded-[2.5rem] border-none shadow-sm bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 overflow-hidden border border-yellow-500/20">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-400 rounded-2xl text-white shadow-lg shadow-yellow-500/20">
                <Crown size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Plan Oro</h3>
                <p className="text-[10px] text-muted-foreground font-medium">Todas las funcionalidades activas</p>
              </div>
            </div>
            <Dialog open={isPlansOpen} onOpenChange={setIsPlansOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="text-xs font-bold text-primary hover:bg-white/50 rounded-xl">
                  Gestionar Plan <ChevronRight size={16} />
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-[2.5rem] max-w-[95vw] p-6 border-none overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black text-center mb-2">Planes de bloomWe</DialogTitle>
                  <DialogDescription className="text-center">Elige el plan que mejor se adapte a tu estilo de vida.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-6">
                  {PLANS.map((plan) => (
                    <div 
                      key={plan.id}
                      className={cn(
                        "relative p-5 rounded-[2rem] border-2 transition-all",
                        plan.active ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" : "border-border bg-white"
                      )}
                    >
                      {plan.active && (
                        <Badge className="absolute top-4 right-4 bg-primary text-white text-[8px] uppercase tracking-widest font-black rounded-full px-2">
                          Actual
                        </Badge>
                      )}
                      <div className="flex gap-4 items-center mb-4">
                        <div className={cn("p-3 rounded-2xl", plan.bgColor, plan.color)}>
                          <plan.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{plan.name}</h4>
                          <p className="text-xs font-black text-primary/60">{plan.price}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-[11px] text-muted-foreground font-medium">
                            <CheckCircle2 size={14} className="text-primary shrink-0" /> {feature}
                          </li>
                        ))}
                      </ul>
                      {!plan.active && (
                        <Button className="w-full mt-4 h-10 rounded-xl bg-secondary text-primary hover:bg-primary hover:text-white font-bold transition-all">
                          Cambiar a {plan.name}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <Button onClick={() => setIsPlansOpen(false)} className="w-full h-12 rounded-2xl bg-primary font-bold">
                  Listo
                </Button>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="font-bold text-lg px-2 text-primary flex items-center gap-2">
          <BarChart size={20} /> Mis Estadísticas
        </h2>
        
        {/* Gráfico 1: Tips Semanales */}
        <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold text-muted-foreground uppercase flex items-center justify-between tracking-wider">
              Tips completados esta semana
              <Badge variant="outline" className="text-[9px] border-primary/20 text-primary">Últimos 7 días</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-48 pt-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={STATS_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#999' }} />
                <Bar dataKey="value" fill="#17B5B5" radius={[4, 4, 0, 0]} barSize={20} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-4">
          {/* Gráfico 2: Balance de Bienestar */}
          <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-muted-foreground uppercase flex items-center justify-between tracking-wider">
                Balance de Bienestar
                <Activity size={16} className="text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent className="h-56 pt-0 flex flex-col items-center">
              <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={WELLNESS_DISTRIBUTION}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {WELLNESS_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2">
                {WELLNESS_DISTRIBUTION.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                    <span className="text-[10px] font-bold text-muted-foreground">{entry.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gráfico 3: Nivel de Energía Semanal */}
          <Card className="rounded-[2.5rem] border-none shadow-sm bg-white overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-muted-foreground uppercase flex items-center justify-between tracking-wider">
                Rendimiento de Energía
                <Zap size={16} className="text-primary" fill="currentColor" />
              </CardTitle>
            </CardHeader>
            <CardContent className="h-48 pt-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ENERGY_LEVELS}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#999' }} />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="level" 
                    stroke="#17B5B5" 
                    strokeWidth={4} 
                    dot={{ r: 4, fill: '#17B5B5', strokeWidth: 2, stroke: '#fff' }} 
                    activeDot={{ r: 6, shadow: '0 0 10px rgba(23, 181, 181, 0.4)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-bold text-lg px-2 text-primary flex items-center gap-2">
          <Settings size={20} /> Preferencias
        </h2>
        <div className="grid gap-3">
          <div className="bg-white p-5 rounded-3xl flex items-center justify-between shadow-sm border border-border/30">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100 rounded-2xl text-blue-600"><Bell size={20} /></div>
              <Label className="font-bold">Notificaciones</Label>
            </div>
            <Switch defaultChecked />
          </div>

          <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
            <DialogTrigger asChild>
              <button className="bg-white p-5 rounded-3xl flex items-center justify-between shadow-sm border border-border/30 hover:bg-secondary/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-100 rounded-2xl text-purple-600"><Shield size={20} /></div>
                  <Label className="font-bold cursor-pointer">Privacidad</Label>
                </div>
                <ChevronRight size={20} className="text-muted-foreground" />
              </button>
            </DialogTrigger>
            <DialogContent className="rounded-[2.5rem] max-w-[92vw] p-8 border-none overflow-hidden">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center gap-2">
                  <Lock className="text-primary" size={24} /> Configuración de Privacidad
                </DialogTitle>
                <DialogDescription className="text-xs">
                  Gestiona quién puede ver tu actividad y cómo protegemos tus datos.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <div className="bg-secondary/20 p-5 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="font-bold flex items-center gap-2">
                        <Eye size={16} className="text-primary" /> Perfil Público
                      </Label>
                      <p className="text-[10px] text-muted-foreground">Otros usuarios podrán ver tu racha y logros.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="font-bold flex items-center gap-2">
                        <MapPin size={16} className="text-primary" /> Compartir Ubicación
                      </Label>
                      <p className="text-[10px] text-muted-foreground">Mostrar tiendas y eventos cerca de ti.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase text-primary tracking-widest ml-1">Sobre tus datos</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-white border border-border/50 rounded-xl">
                      <div className="p-1.5 bg-green-100 rounded-lg text-green-600"><Shield size={14} /></div>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Tus datos personales están encriptados y nunca se comparten con terceros sin tu consentimiento.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white border border-border/50 rounded-xl">
                      <div className="p-1.5 bg-orange-100 rounded-lg text-orange-600"><Info size={14} /></div>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Puedes solicitar la eliminación permanente de tu cuenta y todos tus datos en cualquier momento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button onClick={() => setIsPrivacyOpen(false)} className="w-full h-12 rounded-2xl bg-primary font-bold">
                  Entendido
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="bg-white p-5 rounded-3xl flex items-center justify-between shadow-sm border border-border/30">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-green-100 rounded-2xl text-green-600"><Calendar size={20} /></div>
              <Label className="font-bold">Sincronizar Calendario</Label>
            </div>
            <Switch />
          </div>
        </div>
      </section>

      <Button 
        onClick={logout}
        variant="destructive" 
        className="w-full h-14 rounded-2xl font-bold bg-red-50 text-red-500 hover:bg-red-100 border-none shadow-none mt-4"
      >
        <LogOut size={20} className="mr-2" /> Cerrar Sesión
      </Button>
      
      <div className="text-center pb-8">
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">bloomWe v1.0.0 • Tu Bienestar es nuestra meta</p>
      </div>
    </div>
  );
}
