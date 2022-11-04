import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private fibLow: number;
  private fibHigh: number;
  private intermediateSum: number;
  public result: number;

  ngOnInit(): void {
    this.initializeDefaults();
    let nextFib = this.calculateNextFib(this.fibLow, this.fibHigh);
    while (nextFib <= 4000000) {
      this.intermediateSum += nextFib;
      this.fibLow = this.fibHigh;
      this.fibHigh = nextFib;
      nextFib = this.calculateNextFib(this.fibLow, this.fibHigh);
    }
    this.result = this.intermediateSum;
  }

  private initializeDefaults(): void {
    this.fibLow = 2;
    this.fibHigh = 8;
    this.intermediateSum = 10;
  }

  private calculateNextFib(fibLow: number, fibHigh: number): number {
    return 4 * fibHigh + fibLow;
  }
}
