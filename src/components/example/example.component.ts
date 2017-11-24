import { Component, OnInit } from '@angular/core';

import { ExampleService } from '../../services';

@Component({
  selector: '[app-example]',
  styleUrls: ['./example.component.scss'],
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
  // Current time string.
  public currentTime: string;

  /**
   * Component constructor with injected dependencies.
   * @param exampleService
   */
  public constructor(
    private exampleService: ExampleService
  ) {}

  /**
   * Implements onInit event handler.
   */
  public ngOnInit(): void {
    this.exampleService.getTick().subscribe(
      (timeString) => this.currentTime = timeString
    );
  }
}
