import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let exampleService: ExampleService;

  beforeEach(() => {
    exampleService = new ExampleService();
  });

  it('should return observable with time string', (done) => {
    const timeStringFormat = /[0-9]{2}:[0-9]{2}:[0-9]{2}/i;

    exampleService.getTick().subscribe(
      (timeString) => {
        expect(timeStringFormat.test(timeString)).toBeTruthy(
          'Time string should have hh:mm:ss format',
        );

        // Stop asynchronous test.
        done();
      },
    );
  });
});
