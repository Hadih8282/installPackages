import { Component } from '@angular/core';

//////////////////////////////////////////
// (5)

interface FavoriteChangedEvenArgs {
  newValue: boolean;
}

/////////////////////////////////////////

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //  *this template for bootstrap icons*
  template: `
    <!-- ////////////////////////////////////////////////////////// -->
    <!-- (1) -->
    <!-- 
    <div (click)="OnDivClicked($event)">
      <button
        (click)="OnClick($event)"
        class="btn btn-primary"
        [class.hadi]="isActive"
      >
        Add name
      </button>
    </div> -->

    <!-- ///////////////////////////////////////////////////// -->
    <!-- (2) -->

    <!-- <input (keyup.enter)="onKeyUp($any($event.target).value)" class="form-control"> -->

    <!-- <input #email (keyup.enter)="onKeyUp(email.value)" class="form-control"> -->

    <!-- ///////////////////////////////////////////////////////// -->
    <!-- (3) -->

    <!-- <input [value]="email" (keyup.enter)="email = $any($event.target).value; onKeyUp()" class="form-control" /> -->
    <!-- //also// -->
    <!-- <input [(ngModel)]="email" (keyup.enter)=" onKeyUp()" class="form-control" /> -->
    <!-- doc

    writing import { FormsModule } from '@angular/forms'; in app.module.ts and 
    writing FormsModule in imports in @NgModule 

    ccc -->

    <!-- /////////////////////////////////////////////////////////////// -->
    <!-- (4) -->

    <!-- {{course.title | uppercase | lowercase }} <br>
    {{course.students | number}} <br>
    {{course.rating | number: "2.3-3"}} <br>
    {{course.price | currency:'BTC'}} <br>
    {{course.releaseDate | date:'shortDate'}} <br> -->

    <!-- /////////////////////////////////////////////////////// -->
  `,
})
export class AppComponent {
  title = 'installPackages';
  ////////////////////////////////////////////////
  // (1)

  // isActive = true;

  // OnDivClicked(e: Event) {
  //   console.log('clicked the div', e);
  // }

  // OnClick(e: Event) {
  //   e.stopPropagation();
  //   console.log('clicked the button', e);
  // }

  /////////////////////////////////////////////////
  // (2)

  // onKeyUp($event:Event) {
  //   console.log($event);
  // }

  // onKeyUp(email:string) {
  //   console.log(email);
  // }

  /////////////////////////////////////////////////
  // (3)

  // email: string = "hadi@em.com";

  // onKeyUp() {
  //   console.log(this.email);
  // }

  /////////////////////////////////////////////////
  // (4)

  // course = {
  //   title: "The Complete Angular Course",
  //   rating: 4.9645,
  //   students: 30123,
  //   price: 190.95,
  //   releaseDate: new Date(2016, 3, 1)
  // }

  ////////////////////////////////////////////////
  // (5)

  // post = {
  //   title: 'Title',
  //   isArrow: true,
  // };
  // onArrowChange(isArrow1: FavoriteChangedEvenArgs) {
  //   console.log('Arrow changed', isArrow1);
  // }

  //////////////////////////////////////////////////
  // sode morakab && (5)
  // cal() {
  //   var number = 300;

  //   for (var i = 0; i <= 300; i++) {
  //     number += number * 0.03;
  //     console.log( i + 1, number );
  //   }
  // }

  //////////////////////////////////////////////////
  // *ngIf

  // courses = [];

  //////////////////////////////////////////////////
  // *ngSwitchCase

  // viewMode = 'Something';

  //////////////////////////////////////////////////
  // *ngFor

  // courses = [
  //   { id: 1, name: 'course1'},
  //   { id: 2, name: 'course2'},
  //   { id: 3, name: 'course3'},
  // ]

  /////////////////////////////////////////////////
  // *ngFor && Change Detectiv

  // courses = [
  // { id: 1, name: 'course1'},
  // { id: 2, name: 'course2'},
  // { id: 3, name: 'course3'},
  // ]

  // num = 4;

  // onAdd() {
  //   this.courses.push({ id: this.num, name: 'course'+ this.num });
  //   this.num = this.num + 1 ;
  // }

  // onRemove(course:any) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  // onChange(course:any) {
  //   course.name = 'UPDATED';
  // }

  ////////////////////////////////////////////////
  // *ngFor && TrackBy

  // courses: any;

  // loadCourses() {
  //   this.courses = [
  //     { id: 1, name: 'course1' },
  //     { id: 2, name: 'course2' },
  //     { id: 3, name: 'course3' },
  //   ];
  // }

  // trackCourse(index: any, course: { id: any; }) {
  //   return course ? course.id : undefined;
  // }
 
  //////////////////////////////////////////////////
}
