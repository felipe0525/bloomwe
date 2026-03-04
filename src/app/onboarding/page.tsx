"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AppProvider, useApp } from '@/app/context/AppContext';
import { HOBBIES_LIST, LEVELS } from '@/app/lib/mock-data';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight, ChevronLeft, Camera, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const STEPS = [
  { id: 1, title: 'Tus Motivaciones' },
  { id: 2, title: 'Datos Personales' },
  { id: 3, title: 'Tus Hobbies' }
];

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setUserData, currentUser } = useApp();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    motivations: [] as string[],
    favoriteActivities: [] as string[],
    timeAvailable: '30 minutos',
    name: '',
    email: '',
    location: '',
    birthDate: '',
    profilePic: '',
    hobbies: {} as Record<string, { level: string }>
  });

  useEffect(() => {
    if (currentUser) {
      setFormData(prev => ({ ...prev, email: currentUser }));
    }
  }, [currentUser]);

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const toggleMotivation = (mot: string) => {
    setFormData(prev => ({
      ...prev,
      motivations: prev.motivations.includes(mot)
        ? prev.motivations.filter(m => m !== mot)
        : [...prev.motivations, mot]
    }));
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, profilePic: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextAction = () => {
    if (step === 2) {
      if (!formData.name) {
        toast({
          variant: "destructive",
          title: "Dato requerido",
          description: "Por favor, ingresa tu nombre completo.",
        });
        return;
      }
      
      if (!formData.birthDate) {
        toast({
          variant: "destructive",
          title: "Dato requerido",
          description: "Por favor, ingresa tu fecha de nacimiento.",
        });
        return;
      }

      // Validación de mayoría de edad (18 años)
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        toast({
          variant: "destructive",
          title: "Restricción de edad",
          description: "Debes ser mayor de edad (18+ años) para registrarte en bloomWe.",
        });
        return;
      }
    }
    
    if (step === 3) {
      handleFinish();
    } else {
      nextStep();
    }
  };

  const handleFinish = () => {
    setUserData({
      onboarded: true,
      motivations: formData.motivations,
      activities: formData.favoriteActivities,
      timeCommitment: formData.timeAvailable,
      name: formData.name,
      email: formData.email,
      location: formData.location,
      birthDate: formData.birthDate,
      profilePic: formData.profilePic || 'https://picsum.photos/seed/user/150/150',
      hobbies: formData.hobbies
    });
    router.push('/home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-secondary/30 p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          {STEPS.map(s => (
            <div key={s.id} className={cn("h-1 w-12 rounded-full transition-all duration-300", s.id <= step ? "bg-primary" : "bg-muted")} />
          ))}
        </div>
        <span className="text-sm font-semibold text-primary">{step} de 3</span>
      </div>

      <div className="flex-1 flex flex-col">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-bold">¿Qué te motiva más a cuidar tu bienestar?</h1>
            <div className="grid gap-3">
              {['Sentirme con más energía cada día', 'Prevenir enfermedades en el futuro', 'Aprender a alimentarme mejor'].map(opt => (
                <button
                  key={opt}
                  onClick={() => toggleMotivation(opt)}
                  className={cn("p-4 rounded-2xl border text-left transition-all", formData.motivations.includes(opt) ? "border-primary bg-primary/10 shadow-sm" : "bg-white border-border")}
                >
                  {opt}
                </button>
              ))}
            </div>

            <h1 className="text-2xl font-bold pt-4">¿Qué actividades disfrutas más?</h1>
            <div className="grid grid-cols-2 gap-3">
              {['Deportes', 'Danza', 'Yoga', 'Caminatas'].map(act => (
                <button
                  key={act}
                  onClick={() => setFormData(p => ({ ...p, favoriteActivities: p.favoriteActivities.includes(act) ? p.favoriteActivities.filter(a => a !== act) : [...p.favoriteActivities, act] }))}
                  className={cn("p-4 rounded-2xl border text-center", formData.favoriteActivities.includes(act) ? "border-primary bg-primary/10" : "bg-white")}
                >
                  {act}
                </button>
              ))}
            </div>
            
            <h1 className="text-2xl font-bold pt-4">¿Cuánto tiempo puedes dedicarte?</h1>
            <div className="grid grid-cols-3 gap-2">
              {['10 min', '30 min', '1 hora'].map(t => (
                <button
                  key={t}
                  onClick={() => setFormData(p => ({ ...p, timeAvailable: t }))}
                  className={cn("p-2 text-sm rounded-xl border", formData.timeAvailable === t ? "border-primary bg-primary/10" : "bg-white")}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-2xl font-bold text-center">Cuéntanos sobre ti</h1>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div 
                  onClick={handleImageClick}
                  className="w-24 h-24 rounded-full bg-muted flex items-center justify-center border-2 border-dashed border-primary cursor-pointer group overflow-hidden"
                >
                  {formData.profilePic ? (
                    <img src={formData.profilePic} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <User size={40} className="text-muted-foreground group-hover:text-primary" />
                  )}
                </div>
                <button 
                  onClick={handleImageClick}
                  className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white border-2 border-white shadow-lg hover:scale-110 transition-transform"
                >
                  <Camera size={14} />
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <Label>Nombre Completo</Label>
                <Input value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Tu nombre" />
              </div>
              <div className="space-y-1">
                <Label>Correo Electrónico</Label>
                <Input 
                  value={formData.email} 
                  readOnly 
                  className="bg-muted/50 text-muted-foreground cursor-not-allowed border-none shadow-none"
                  placeholder="ejemplo@correo.com" 
                />
                <p className="text-[10px] text-muted-foreground px-1">Tu correo se vinculó al registrarte.</p>
              </div>
              <div className="space-y-1">
                <Label>¿Dónde vives?</Label>
                <Input value={formData.location} onChange={e => setFormData(p => ({ ...p, location: e.target.value }))} placeholder="Ciudad o Zona" />
              </div>
              <div className="space-y-1">
                <Label>Fecha de Nacimiento</Label>
                <Input type="date" value={formData.birthDate} onChange={e => setFormData(p => ({ ...p, birthDate: e.target.value }))} />
                <p className="text-[10px] text-muted-foreground px-1">Debes ser mayor de edad para continuar.</p>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in overflow-y-auto max-h-[70vh] pb-8">
            <h1 className="text-2xl font-bold">Hobbies y Deportes</h1>
            <p className="text-muted-foreground text-sm">Selecciona tus actividades y tu nivel actual</p>
            <div className="grid gap-4">
              {HOBBIES_LIST.map(h => (
                <Card key={h} className={cn("overflow-hidden", formData.hobbies[h] ? "border-primary" : "opacity-70")}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Checkbox checked={!!formData.hobbies[h]} onCheckedChange={(checked) => {
                        const newHobbies = { ...formData.hobbies };
                        if (checked) newHobbies[h] = { level: 'Nuevo' };
                        else delete newHobbies[h];
                        setFormData(p => ({ ...p, hobbies: newHobbies }));
                      }} />
                      <span className="font-semibold">{h}</span>
                    </div>
                    {formData.hobbies[h] && (
                      <div className="grid grid-cols-4 gap-1 mt-3">
                        {LEVELS.map(lvl => (
                          <button
                            key={lvl}
                            onClick={() => setFormData(p => ({ ...p, hobbies: { ...p.hobbies, [h]: { level: lvl } } }))}
                            className={cn("text-[10px] py-1 px-2 rounded-full border transition-all", formData.hobbies[h]?.level === lvl ? "bg-primary text-white border-primary" : "bg-background")}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto flex gap-4 pt-6">
        {step > 1 && (
          <Button variant="outline" onClick={prevStep} className="flex-1 rounded-2xl h-12">
            <ChevronLeft size={20} className="mr-2" /> Atrás
          </Button>
        )}
        <Button 
          onClick={handleNextAction} 
          className="flex-[2] rounded-2xl h-12 bg-primary hover:bg-primary/90"
        >
          {step === 3 ? 'Comenzar' : 'Siguiente'} <ChevronRight size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default function OnboardingPage() {
  return (
    <AppProvider>
      <OnboardingFlow />
    </AppProvider>
  );
}
