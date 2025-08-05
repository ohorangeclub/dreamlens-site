import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useLanguage } from './language-provider';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import type { DreamInterpretation } from '@shared/schema';

interface DreamInputProps {
  onResult: (result: DreamInterpretation) => void;
}

export function DreamInput({ onResult }: DreamInputProps) {
  const [dreamText, setDreamText] = useState('');
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const interpretMutation = useMutation({
    mutationFn: async (data: { dreamText: string; language: string }) => {
      const response = await apiRequest('POST', '/api/dreams/interpret', data);
      return response.json();
    },
    onSuccess: (result: DreamInterpretation) => {
      queryClient.invalidateQueries({ queryKey: ['/api/dreams'] });
      onResult(result);
      setDreamText('');
    },
    onError: (error) => {
      console.error('Dream interpretation error:', error);
      toast({
        title: "Error",
        description: t.errors.apiError,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (dreamText.trim().length < 10) {
      toast({
        title: "Error",
        description: t.errors.minLength,
        variant: "destructive",
      });
      return;
    }

    interpretMutation.mutate({
      dreamText: dreamText.trim(),
      language,
    });
  };

  return (
    <section className="mb-12">
      <div className="bg-white/10 dark:bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/20 shadow-2xl animate-float">
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <Label className="block text-gray-900 dark:text-white/90 text-lg font-semibold mb-4">
              {t.form.label}
            </Label>
            <Textarea 
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              className="w-full h-48 p-6 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-white/50 text-lg leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all duration-300" 
              placeholder={t.form.placeholder}
              disabled={interpretMutation.isPending}
            />
          </div>
          
          <div className="text-center">
            <Button 
              type="submit"
              disabled={interpretMutation.isPending || dreamText.trim().length < 10}
              className="group relative px-12 py-4 bg-gradient-to-r from-dream-purple to-dream-purple-light rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="flex items-center space-x-3">
                <i className="fas fa-magic"></i>
                <span>
                  {interpretMutation.isPending ? t.form.buttonLoading : t.form.button}
                </span>
              </span>
              {!interpretMutation.isPending && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-dream-purple-light to-dream-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
