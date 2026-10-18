
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  readonly values = [
    {
      icon: 'bi-compass',
      title: 'Ascolto',
      description:
        'Ogni scelta parte dalle tue esigenze, dalle tue abitudini e dal tuo modo di vivere il mare.'
    },
    {
      icon: 'bi-gem',
      title: 'Qualità',
      description:
        'Attenzione alle caratteristiche, ai dettagli e a ciò che rende un’imbarcazione adatta a te.'
    },
    {
      icon: 'bi-people',
      title: 'Relazione',
      description:
        'Un rapporto diretto e trasparente, costruito attraverso il dialogo e la fiducia.'
    }
  ];

  scrollToStory(event: Event): void {
  event.preventDefault();

  const storySection =
    this.elementRef.nativeElement.querySelector('#storia');

  storySection?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elements: NodeListOf<HTMLElement> =
  this.elementRef.nativeElement.querySelectorAll(
    '.animate-on-scroll'
  );

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element: HTMLElement) => {
        element.classList.add('visible');
      });
      return;
    }

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    elements.forEach((element: HTMLElement) => {
      this.observer?.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
