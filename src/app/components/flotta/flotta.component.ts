import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flotta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flotta.component.html',
  styleUrl: './flotta.component.css'
})
export class FlottaComponent implements OnInit {
  selectedBoat: any = null;
  
  // Using high-quality yacht images
  boats = [
    {
      id: 1,
      name: 'Python C 33',
      shortDesc: 'Sportività ed eleganza',
      description: 'Il perfetto equilibrio tra sportività ed eleganza. 33 piedi di pura adrenalina con interni di lusso. Ideale per weekend indimenticabili.',
      image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1000',
      specs: { length: '9.90m', speed: '50kn', guests: '10' },
      features: ['Prendisole di poppa', 'Cabina armatoriale', 'Cucina esterna']
    },
    {
      id: 2,
      name: 'Python C-27 S',
      shortDesc: 'Agile e veloce',
      description: 'Agile, veloce e incredibilmente spazioso. Ideale per chi cerca prestazioni senza rinunciare al comfort di una giornata in mare.',
      image: 'https://media-assets.wired.it/photos/615f2c188f3096026bed2f33/master/w_1600%2Cc_limit/1527847718_7_780_EXT_02_FY780.jpg',
      specs: { length: '8.50m', speed: '45kn', guests: '8' },
      features: ['Design sportivo', 'Bassi consumi', 'Ampio pozzetto']
    },
    {
      id: 3,
      name: 'Python 50 Luxury',
      shortDesc: 'L\'ammiraglia',
      description: 'L\'ammiraglia che ridefinisce gli standard. Spazi immensi e finiture artigianali di altissimo livello per una crociera senza compromessi.',
      image: 'https://images.unsplash.com/photo-1621275471769-e6aa344546d5?auto=format&fit=crop&q=80&w=1000',
      specs: { length: '15.00m', speed: '40kn', guests: '14' },
      features: ['Flybridge', '3 Cabine', 'Stabilizzatore giroscopico']
    },
    {
      id: 4,
      name: 'Python Sport 40',
      shortDesc: 'Dominare il mare',
      description: 'Design aggressivo e prestazioni da corsa. Per chi vuole dominare il mare con stile e raggiungere la destinazione prima di tutti.',
      image: 'https://www.barcheamotore.com/wp-content/uploads/2021/02/Beneteau-Granturismo-36-fuoribordo-1.jpg',
      specs: { length: '12.00m', speed: '55kn', guests: '12' },
      features: ['Hard top apribile', 'Garage tender', 'Sistema audio premium']
    },
    {
      id: 5,
      name: 'Python Explorer',
      shortDesc: 'Avventura senza limiti',
      description: 'Costruito per l\'avventura. Robustezza e autonomia per esplorare ogni angolo del Mediterraneo in totale sicurezza.',
      image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=1000',
      specs: { length: '13.50m', speed: '35kn', guests: '12' },
      features: ['Lungo raggio', 'Scafo rinforzato', 'Ampio stivaggio']
    }
  ];

  ngOnInit() {
    // Scroll to top on init
    window.scrollTo(0, 0);
  }

  openDetail(boat: any) {
    this.selectedBoat = boat;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeDetail() {
    this.selectedBoat = null;
    document.body.style.overflow = 'auto';
  }
}
