import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from './services/translation/translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cardinal-prescription-angular';
  constructor(private translationService: TranslationService) {
    this.translationService.setLanguage('fr');
  }
}
