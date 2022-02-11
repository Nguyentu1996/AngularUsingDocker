import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  name = 'TestDocker';
  constructor(
    private cdr: ChangeDetectorRef
  ) {

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'tutest';
      // this.cdr.markForCheck();
    }, 5000)
  }

}
