import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { API_KEY } from './app/models/API_KEY';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let pageTitle = "Arrange Dynamic Title"
document.getElementById('pageTitle').innerHTML = pageTitle


const googleKey = API_KEY
const googleScript = document.createElement('script')
googleScript.src = googleKey
document.head.appendChild(googleScript)