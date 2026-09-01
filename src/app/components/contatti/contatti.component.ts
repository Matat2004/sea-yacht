import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit, AfterViewInit {
  
  values = [
    {
      icon: 'bi-gem',
      title: 'Eccellenza',
      description: 'Ogni dettaglio è curato con precisione maniacale per garantire la massima qualità.'
    },
    {
      icon: 'bi-heart',
      title: 'Passione',
      description: 'Il mare è la nostra vita. Costruiamo barche per chi condivide questo amore.'
    },
    {
      icon: 'bi-palette',
      title: 'Stile Italiano',
      description: 'Design senza tempo che unisce eleganza classica e innovazione moderna.'
    }
  ];

  stats = [
    { number: '25+', label: 'Anni di Esperienza' },
    { number: '500+', label: 'Barche Consegnate' },
    { number: '100%', label: 'Clienti Soddisfatti' },
    { number: '50', label: 'Premi Internazionali' }
  ];

  constructor() {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  setupScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
  }
}
