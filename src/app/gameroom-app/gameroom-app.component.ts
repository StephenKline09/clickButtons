import { Component, OnInit } from '@angular/core'
import { gsap } from "gsap"

const images = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/supermario.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/donkeykong.jpg",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/394353/waluigi.jpg"
]

const X_CHANGE = 1000
const Y_CHANGE = 1000
const BACKGROUND_POS_PERCENT = 11.1
const TIMER_INTERVAL = 2250
const IMAGE_PIECE_COUNT = 10
const ROTATION = 25

let indy = 0
let isChanging = false

@Component({
  selector: 'app-gameroom-app',
  templateUrl: './gameroom-app.component.html',
  styleUrls: ['./gameroom-app.component.scss']
})
export class GameroomAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.displayImage(indy)
  }

//   removeImage() {
//     return new Promise((resolve, reject) => {
//       for (let i = 0; i < IMAGE_PIECE_COUNT; i++) {
//         const chunk = document.getElementById(`chunk${i}`)

//         TweenMax.to(chunk, 1, {
//           rotation: ROTATION,
//           ease: Strong.easeInOut,
//           onComplete: () => {
//             TweenMax.fromTo(
//               chunk,
//               1,
//               { x: 0, y: 0 },
//               {
//                 y: i % 2 === 0 ? -Y_CHANGE : Y_CHANGE,
//                 x: i % 2 === 0 ? -X_CHANGE : X_CHANGE,
//                 ease: Strong.easeInOut,
//                 onComplete: () => {
//                   chunk.parentNode.removeChild(chunk)
//                   resolve(true)
//                 }
//               }
//             )
//           }
//         })
//       }
//     })
//   }

//   displayImage(index) {
//     const src = images[index]
//     const image = document.getElementById("theImage")
//     let pos = 0

//     for (let i = 0; i < IMAGE_PIECE_COUNT; i++) {
//       const chunk = document.createElement("div")

//       chunk.id = `chunk${i}`
//       chunk.style.background = `url('${src}')`
//       chunk.style.backgroundPosition = `${pos}% ${pos}%`
//       chunk.style.height = "40px"
//       chunk.style.width = "400px"
//       pos += BACKGROUND_POS_PERCENT

//       image.appendChild(chunk)

//       TweenMax.fromTo(
//         chunk,
//         1,
//         {
//           x: i % 2 === 0 ? -X_CHANGE : X_CHANGE,
//           y: i % 2 === 0 ? Y_CHANGE : -Y_CHANGE,
//           rotation: -ROTATION
//         },
//         {
//           y: 0,
//           x: 0,
//           ease: Strong.easeInOut,
//           onComplete: () => {
//             TweenMax.to(chunk, 1, {
//               rotation: 0,
//               ease: Strong.easeInOut,
//               onComplete: () => isChanging = false
//             })
//           }
//         }
//       )
//     }
//   }

//   changePosition(movement) {
//     //To ensure that switching does not happen if a switch is already happening
//     if (!isChanging) {
//       if (indy + movement < 0) {
//         indy = images.length - 1
//       } else if (indy + movement > images.length - 1) {
//         indy = 0
//       } else {
//         indy += movement
//       }

//       isChanging = true
//       this.removeImage().then(() => this.displayImage(indy))
//     }
//   }

//   // window.onload = () => {
//   //   this.displayImage(indy)
//   // }

}
