import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IUser } from '../interfaces/app-interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selectedId!: number;
  selectedUser!: IUser ;
  isUserFound: boolean = true;

  users: IUser[] = [
    {
      id: 1,
      name: 'Hadi'
    },
    {
      id: 2,
      name: 'Ali'
    },
    {
      id: 3,
      name: 'Roya'
    }
  ];
  
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.params['id'];
    this.selectedUser = this.users.find(user => user.id === this.selectedId)!;
    if (!this.selectedUser) {
      this.isUserFound = false;
    }
    // if (!this.selectedUser){
    //   this.router.navigate(['/users']);
    // }
    this.route.params.subscribe((params:Params) => {
      this.selectedUser = this.users.find(user => user.id === +params['id'])!;
    });
  }

}
