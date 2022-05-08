import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public onUserRedirect() {
    this.router.navigate(['/users']);
  }

}
