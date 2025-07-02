import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from 'cardinal-prescription-be-angular';

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

  // constructor(private translationService: TranslationService) {
  //   // Set the application language here.
  //   // Supported languages: 'fr', 'en', 'nl', 'de'
  //   this.translationService.setLanguage('fr');
  // }
}
