import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  colorBoolean: boolean = false
  randomColor: string;
  textColor: string;
  backgroundColor: string
  constructor() { }

  ngOnInit(): void {
  }

  changePicture() {
    var img = new Image();
    img.src='./assets/images/owen_wilson/wow.jpg';
    document.getElementById('wow');
  }

  switchBackground() {
   const randomColorArray = [
      'green',
      'yellow',
      'blue',
      'purple',
      'orange',
      'red',
      'pink',
      'lightgreen'
    ];
    this.randomColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)]
}
  switchColor() {
   const randomColorArray = [
      'green',
      'yellow',
      'blue',
      'purple',
      'orange',
      'red',
      'pink',
      'lightgreen'
    ];
    this.textColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)]
}

  audioPlay(){

}

  enlarge() {
    //size-button-container ++ height and width &&move position right
  }

}
