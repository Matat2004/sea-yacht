import {
  Component,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BoatSpecs {
  length: string;
  speed: string;
  guests: string;
}

interface Boat {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
  specs: BoatSpecs;
  features: string[];
}

@Component({
  selector: 'app-flotta',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './flotta.component.html',
  styleUrl: './flotta.component.css'
})
export class FlottaComponent implements OnInit, OnDestroy {

  selectedBoat: Boat | null = null;

  boats: Boat[] = [
    {
      id: 1,
      name: 'Python C 33',
      shortDesc: 'Sportività ed eleganza',
      description:
        'Il perfetto equilibrio tra sportività ed eleganza. ' +
        'Un’imbarcazione pensata per chi desidera unire prestazioni ' +
        'e comfort durante le proprie giornate in mare.',
      image:
        '/barca3.jpg',
      specs: {
        length: '9,90 m',
        speed: '50 kn',
        guests: '10'
      },
      features: [
        'Prendisole di poppa',
        'Cabina armatoriale',
        'Cucina esterna'
      ]
    },
    {
      id: 2,
      name: 'Python C-27 S',
      shortDesc: 'Agile e dinamico',
      description:
        'Linee sportive e spazi progettati per vivere il mare ' +
        'con libertà. Una proposta per chi cerca un’imbarcazione ' +
        'versatile e adatta a diverse occasioni di navigazione.',
      image:
        '/barca2.png',
      specs: {
        length: '8,50 m',
        speed: '45 kn',
        guests: '8'
      },
      features: [
        'Design sportivo',
        'Ampio pozzetto',
        'Spazi dedicati al relax'
      ]
    },
    {
      id: 3,
      name: 'Python 50 Luxury',
      shortDesc: 'Spazio e comfort',
      description:
        'Un’imbarcazione dal carattere distintivo, pensata per ' +
        'chi desidera più spazio a bordo e un’esperienza di ' +
        'navigazione orientata al comfort.',
      image:
        '/barca1.avif',
      specs: {
        length: '15,00 m',
        speed: '40 kn',
        guests: '14'
      },
      features: [
        'Flybridge',
        'Tre cabine',
        'Spazi dedicati alla convivialità'
      ]
    },
    {
      id: 4,
      name: 'Python Sport 40',
      shortDesc: 'Carattere e prestazioni',
      description:
        'Linee decise e un’impostazione sportiva per chi ama ' +
        'un’esperienza di navigazione dinamica, senza rinunciare ' +
        'alla cura degli spazi e dei dettagli.',
      image:
        '/barca4.jpg',
      specs: {
        length: '12,00 m',
        speed: '55 kn',
        guests: '12'
      },
      features: [
        'Hard top apribile',
        'Soluzioni per il tempo libero',
        'Sistema audio'
      ]
    },
    {
      id: 5,
      name: 'Python Explorer',
      shortDesc: 'Libertà di esplorare',
      description:
        'Una proposta dal carattere avventuroso, pensata per ' +
        'chi ama esplorare nuovi itinerari e trascorrere più tempo ' +
        'in acqua.',
      image:
        '/barca5.jpg',
      specs: {
        length: '13,50 m',
        speed: '35 kn',
        guests: '12'
      },
      features: [
        'Impostazione orientata alla navigazione',
        'Spazi di stivaggio',
        'Aree dedicate al relax'
      ]
    }
  ];

  private previousBodyOverflow = '';

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }

  scrollToFleet(event: MouseEvent): void {
  event.preventDefault();

  document.getElementById('la-flotta')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

  openDetail(boat: Boat): void {
    if (this.selectedBoat) {
      return;
    }

    this.previousBodyOverflow = document.body.style.overflow;
    this.selectedBoat = boat;
    document.body.style.overflow = 'hidden';
  }

  closeDetail(): void {
    this.selectedBoat = null;
    document.body.style.overflow = this.previousBodyOverflow;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.selectedBoat) {
      this.closeDetail();
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = this.previousBodyOverflow;
  }
}
