import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Detecção de mudanças otimizada
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Configuração do roteamento
    provideRouter(routes),
    // Carregamento assíncrono de animações
    provideAnimationsAsync(),
    // Configuração do PrimeNG, incluindo tema e opções
    providePrimeNG({
      theme: {
        preset: Aura, // Usando o tema Aura
        options: {
          darkModeSelector: '.my-app-dark' // Definindo seletor para o modo escuro
        }
      }
    }) // Fechando a função providePrimeNG
  ] // Fechando o array providers
};