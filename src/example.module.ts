import { NgModule } from '@angular/core';
import { ExampleComponent } from './components';
import { ExampleService } from './services';

@NgModule({
  providers: [
    ExampleService
  ],
  declarations: [
    ExampleComponent
  ],
  exports: [
    ExampleComponent
  ]
})
export class ExampleModule {
}
