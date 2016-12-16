import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';
import { bootloader } from '@angularclass/hmr';

platformBrowserDynamic().bootstrapModule(AppModule);

export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

// needed for hmr
// in prod this is replace for document ready
bootloader(main)