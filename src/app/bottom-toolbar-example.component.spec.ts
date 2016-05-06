import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BottomToolbarExampleAppComponent } from '../app/bottom-toolbar-example.component';

beforeEachProviders(() => [BottomToolbarExampleAppComponent]);

describe('App: BottomToolbarExample', () => {
  it('should create the app',
      inject([BottomToolbarExampleAppComponent], (app: BottomToolbarExampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bottom-toolbar-example works!\'',
      inject([BottomToolbarExampleAppComponent], (app: BottomToolbarExampleAppComponent) => {
    expect(app.text).toEqual('bottom-toolbar-example works!');
  }));
});
