import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('heroVideo')
  heroVideo?: ElementRef<HTMLVideoElement>;

  private videoObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    const video = this.heroVideo?.nativeElement;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    video.addEventListener('canplay', this.onVideoReady);
    video.addEventListener('loadeddata', this.onVideoReady);

    this.videoObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        this.tryPlayVideo(video);
      }
    });

    this.videoObserver.observe(video);

    this.tryPlayVideo(video);
  }

  private onVideoReady = (): void => {
    const video = this.heroVideo?.nativeElement;

    if (video) {
      this.tryPlayVideo(video);
    }
  };

  private tryPlayVideo(video: HTMLVideoElement): void {
    if (!video.paused || video.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
      return;
    }

    video.play().catch(error => {
      console.warn('Avvio automatico del video non riuscito:', error);
    });
  }

  ngOnDestroy(): void {
    this.videoObserver?.disconnect();

    const video = this.heroVideo?.nativeElement;

    if (video) {
      video.removeEventListener('canplay', this.onVideoReady);
      video.removeEventListener('loadeddata', this.onVideoReady);
    }
  }
}
