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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cardinal-prescription-angular';
}
