"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AppProvider, useApp } from '@/app/context/AppContext';
import { ArrowRight, Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const AuthContent = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login, signup } = useApp();
  const { toast } = useToast();
  const router = useRouter();

  const handleModeChange = (newMode: 'login' | 'signup') => {
    setMode(newMode);
    setError(null);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (mode === 'signup') {
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden.");
        return;
      }
      
      if (signup(email, password)) {
        toast({
          title: "¡Bienvenido a bloomWe!",
          description: "Cuenta creada con éxito. Vamos a configurar tu perfil.",
        });
        router.push('/onboarding');
      } else {
        setError("Esta cuenta ya existe. Prueba iniciando sesión.");
      }
    } else {
      if (login(email, password)) {
        toast({
          title: "Sesión iniciada",
          description: "¡Qué bueno verte de nuevo!",
        });
        router.push('/home');
      } else {
        setError("Usuario o contraseña incorrectos.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary/10 p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="mx-auto w-24 h-24 relative mb-4">
            <Image 
              src="https://res.cloudinary.com/dwoyltoyd/image/upload/v1770524240/dcfa7675-cd52-4d56-8a44-ee3279d51914.png"
              alt="bloomWe Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl font-black text-primary">bloomWe</h1>
          <p className="text-muted-foreground font-medium">Tu camino al bienestar comienza aquí</p>
        </div>

        <Card className="rounded-[2.5rem] border-none shadow-xl bg-white overflow-hidden">
          <CardHeader className="pt-8 pb-4 text-center">
            <CardTitle className="text-xl font-bold">
              {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </CardTitle>
            <CardDescription>
              {mode === 'login' 
                ? 'Ingresa tus credenciales para continuar' 
                : 'Regístrate para empezar tu transformación'}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-destructive/10 text-destructive text-xs font-bold p-4 rounded-2xl flex items-center gap-2 animate-fade-in border border-destructive/20">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Correo Electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input 
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="tu@correo.com"
                    className="rounded-2xl h-14 bg-secondary/20 border-none pl-12 focus-visible:ring-primary/30"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="••••••••"
                    className="rounded-2xl h-14 bg-secondary/20 border-none pl-12 pr-12 focus-visible:ring-primary/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {mode === 'signup' && (
                <div className="space-y-1.5 animate-fade-in">
                  <Label className="text-xs font-bold uppercase text-muted-foreground ml-1">Confirmar Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input 
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="••••••••"
                      className="rounded-2xl h-14 bg-secondary/20 border-none pl-12 pr-12 focus-visible:ring-primary/30"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              )}

              <Button type="submit" className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 mt-4 active:scale-[0.98] transition-transform">
                {mode === 'login' ? 'Entrar' : 'Registrarse'} <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <button 
                onClick={() => handleModeChange(mode === 'login' ? 'signup' : 'login')}
                className="text-sm font-bold text-primary hover:underline"
              >
                {mode === 'login' 
                  ? '¿No tienes cuenta? Regístrate gratis' 
                  : '¿Ya tienes cuenta? Inicia sesión'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default function AuthPage() {
  return (
    <AppProvider>
      <AuthContent />
    </AppProvider>
  );
}
