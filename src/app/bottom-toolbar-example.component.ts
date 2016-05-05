import {Component} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
    moduleId: module.id,
    selector: 'bottom-toolbar-example-app',
    templateUrl: 'bottom-toolbar-example.component.html',
    styleUrls: ['bottom-toolbar-example.component.css'],
    directives: [MdToolbar, MdIcon, MdButton],
    viewProviders: [MdIconRegistry]
})
export class BottomToolbarExampleAppComponent {

    text:String;

    constructor(mdIconRegistry: MdIconRegistry) {
        this.text = "This is some sweet content"
    }

}

