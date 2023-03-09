import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {

  constructor(
    private elementRef: ElementRef
  ){}

  // ngOnInit(): void {
  //   this.initializeHeader();
  //   this.initializeAnimation();
  //   this.addEventListeners();
  // }

  // initializeHeader() {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;
  //   const target = { x: width / 2, y: height / 2 };
  //   const largeHeader = this.elementRef.nativeElement.querySelector('.large-header');
  //   largeHeader.style.height = height + 'px';
  //   const canvas = this.elementRef.nativeElement.querySelector('#demo-canvas');
  //   canvas.width = width;
  //   canvas.height = height;
  //   const ctx = canvas.getContext('2d');
  //   const points = [];

  //   // create points
  //   for (let x = 0; x < width; x = x + width / 20) {
  //     for (let y = 0; y < height; y = y + height / 20) {
  //       const px = x + Math.random() * width / 20;
  //       const py = y + Math.random() * height / 20;
  //       const p = { x: px, originX: px, y: py, originY: py };
  //       points.push(p);
  //     }
  //   }

  //   // for each point find the 5 closest points
  //   for (let i = 0; i < points.length; i++) {
  //     const closest = [];
  //     const p1 = points[i];
  //     for (let j = 0; j < points.length; j++) {
  //       const p2 = points[j];
  //       if (!(p1 == p2)) {
  //         let placed = false;
  //         for (let k = 0; k < 5; k++) {
  //           if (!placed) {
  //             if (closest[k] == undefined) {
  //               closest[k] = p2;
  //               placed = true;
  //             }
  //           }
  //         }
  //         for (let k = 0; k < 5; k++) {
  //           if (!placed) {
  //             if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
  //               closest[k] = p2;
  //               placed = true;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     p1.closest = closest;
  //   }

  //   // assign a circle to each point
  //   for (let i in points) {
  //     const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
  //     points[i].circle = c;
  //   }

  //   function Circle(pos, rad, color) {
  //     const _this = this;

  //     // constructor
  //     (function () {
  //       _this.pos = pos || null;
  //       _this.radius = rad || null;
  //       _this.color = color || null;
  //     })();

  //     this.draw = function () {
  //       if (!_this.active) return;
  //       ctx.beginPath();
  //       ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
  //       ctx.fillStyle = 'rgba(255,255,255,' + _this.active + ')';
  //       ctx.fill();
  //     };
  //   }

  //   function getDistance(p1, p2) {
  //     return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y
}
