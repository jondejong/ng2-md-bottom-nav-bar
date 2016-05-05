import {Component} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
    moduleId: module.id,
    selector: 'bottom-toolbar-example-app',
    templateUrl: 'bottom-toolbar-example.component.html',
    styleUrls: ['bottom-toolbar-example.component.css'],
    directives: [MdToolbar, MdIcon],
    viewProviders: [MdIconRegistry]
})
export class BottomToolbarExampleAppComponent {

    constructor(mdIconRegistry: MdIconRegistry) {
        mdIconRegistry
            .addSvgIcon('thumb-up', '/demo-app/icon/assets/thumbup-icon.svg')
            .addSvgIconSetInNamespace('core', '/demo-app/icon/assets/core-icon-set.svg')
            .registerFontClassAlias('fontawesome', 'fa');
    }

    title = 'bottom-toolbar-example works!';
}

