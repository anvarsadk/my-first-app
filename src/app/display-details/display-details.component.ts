import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  showContent = true;
  clickLog = [];
  // clickCount = 0;
  // bgColor = 'white';
  // showColor = false;
  clickLogTime = [];

  toggleContent() {
    this.showContent = !(this.showContent);
    this.clickLog.push(this.clickLog.length+1);
    this.clickLogTime.push(new Date());
    /*if(this.clickCount==5) {
      this.bgColor = 'blue';
      this.showColor = true;
    }*/
  }

  showBlueBackground(c){
    return (c>=5)? 'blue': 'white';
  }

  showWhiteColor(c){
    return c>=5;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
