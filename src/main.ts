import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode, ComponentRef} from '@angular/core';
import {BottomToolbarExampleAppComponent, environment} from './app/';
import {HTTP_PROVIDERS} from '@angular/http';
import {MdIconRegistry} from '@angular2-material/icon';

if (environment.production) {
    enableProdMode();
}

var providers = [
    HTTP_PROVIDERS, MdIconRegistry
];

bootstrap(BottomToolbarExampleAppComponent, providers)
    .then(
        (appRef:ComponentRef<any>) => {

            // let mdIconRegistry:MdIconRegistry = appRef.injector.get(MdIconRegistry);
            // mdIconRegistry
            //     .addSvgIcon('thumb-up', '/assets/thumbup-icon.svg')
            //     .addSvgIconSetInNamespace('core', '/assets/core-icon-set.svg')
            //     .registerFontClassAlias('fontawesome', 'fa');
        },
        error => console.log(error)
    );



