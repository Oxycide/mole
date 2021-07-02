import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mole';
  isShow = true;
  isShow2 = true;
  isShow3 = true;
  isShow4 = true;
  isShow5 = true;
  isShow6 = true;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  toggleDisplay2() {
    this.isShow2 = !this.isShow2;
  }
  toggleDisplay3() {
    this.isShow3 = !this.isShow3;
  }
  toggleDisplay4() {
    this.isShow4 = !this.isShow4;
  }
  toggleDisplay5() {
    this.isShow5 = !this.isShow5;
  }
  toggleDisplay6() {
    this.isShow6 = !this.isShow6;
  }
}
