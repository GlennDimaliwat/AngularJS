import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  //styleUrls: ['./display-details.component.css']
  styles: [`
    .paragraph5 {
      color: white;
    }
  `]
})
export class DisplayDetailsComponent {

  paragraphDisplay: boolean = false;
  paragraphs = [];

  onDisplayDetailsButtonClick() {
    // Toggle 1st Paragraph
    this.paragraphDisplay = !this.paragraphDisplay; 

    // Push timestamps to the paragraphs array
    this.paragraphs.push(new Date());
  }

  getDetailVisibility() {
    return this.paragraphDisplay;
  }

}
