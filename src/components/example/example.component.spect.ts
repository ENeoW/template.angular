import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { ExampleModule } from '../../';
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;
  let componentFixture: ComponentFixture<ExampleComponent>;
  let componentInstance: ExampleComponent;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ ExampleModule ]
      }).compileComponents().then(() => { /* Don't do anything */ });
    })
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(ExampleComponent);
    componentInstance = componentFixture.componentInstance;
  });

  it('should display time string', (done) => {
    componentFixture.detectChanges();

    setInterval(() => {
      componentFixture.detectChanges();

      const examplePageElement = componentFixture.debugElement.queryAll(By.css('.example-style'));
      const displayedTimeText = examplePageElement[0].nativeElement.innerText;

      expect(examplePageElement).toBeDefined();
      expect(examplePageElement.length).toEqual(1);
      expect(displayedTimeText.length).toEqual(8);
      expect(timeStringFormat.test(displayedTimeText)).toBeTruthy();

      done();
    }, 1000);
  });
});
