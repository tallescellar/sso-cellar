
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CompanyLogo from './CompanyLogo';

const LoginPage = () => {
  const [step, setStep] = useState(1); // 1 = email, 2 = password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simular verificação do email
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 800);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular autenticação
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao sistema.",
      });
    }, 1500);
  };

  const handleGoogleLogin = () => {
    toast({
      title: "Google Sign-In",
      description: "Funcionalidade será implementada com Supabase.",
    });
  };

  const goBack = () => {
    setStep(1);
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
          <CardHeader className="text-center pb-6 pt-8">
            <div className="mb-6 flex justify-center">
              <CompanyLogo />
            </div>
            <h1 className="text-2xl font-normal text-gray-900 mb-2">
              {step === 1 ? 'Entrar' : 'Bem-vindo'}
            </h1>
            {step === 1 ? (
              <p className="text-sm text-gray-600">
                para continuar com CELLAR VINHOS
              </p>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <span>{email}</span>
              </div>
            )}
          </CardHeader>
          
          <CardContent className="px-10 pb-6">
            {step === 1 ? (
              // Step 1: Email
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-normal text-gray-700">
                    Email ou telefone
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                    className="h-14 text-base border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                    required
                    autoFocus
                  />
                </div>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors inline-block"
                >
                  Esqueceu o email?
                </Link>

                <div className="pt-2">
                  <p className="text-sm text-gray-600">
                    Não está no seu computador? Use o modo visitante para fazer login com privacidade.{' '}
                    <Link to="#" className="text-blue-600 hover:text-blue-800 font-medium">
                      Saiba mais sobre como usar o modo visitante
                    </Link>
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6">
                  <Link
                    to="/signup"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Criar conta
                  </Link>

                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    disabled={isLoading || !email}
                  >
                    {isLoading ? 'Verificando...' : 'Avançar'}
                  </Button>
                </div>
              </form>
            ) : (
              // Step 2: Password
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-normal text-gray-700">
                    Digite sua senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=""
                    className="h-14 text-base border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                    required
                    autoFocus
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Manter conectado
                  </label>
                </div>

                <div className="flex items-center justify-between pt-6">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={goBack}
                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 font-medium"
                  >
                    Voltar
                  </Button>

                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    disabled={isLoading || !password}
                  >
                    {isLoading ? 'Entrando...' : 'Avançar'}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>

          <CardFooter className="px-10 pb-8">
            {/* Google Sign-In Button */}
            <div className="w-full border-t border-gray-200 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleLogin}
                className="w-full h-12 border-gray-300 hover:bg-gray-50 flex items-center justify-center space-x-3 rounded-full"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium text-gray-700">Entrar com o Google</span>
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="text-xs text-gray-500 space-x-4">
            <Link to="#" className="hover:text-gray-700 transition-colors">Português (Brasil)</Link>
          </div>
          <div className="text-xs text-gray-500 space-x-4 mt-2">
            <Link to="#" className="hover:text-gray-700 transition-colors">Ajuda</Link>
            <span>•</span>
            <Link to="#" className="hover:text-gray-700 transition-colors">Privacidade</Link>
            <span>•</span>
            <Link to="#" className="hover:text-gray-700 transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
