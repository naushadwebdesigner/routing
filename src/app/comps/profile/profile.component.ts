import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {

  name: null | string = '';
  email: null | string = '';
  id :number = 0;

  

  constructor(private _routes: ActivatedRoute){}

  ngOnInit(){
    this._routes.params.subscribe((params) => {
     this.name = params['name']
     this.id =  params['id']
     
    })
  }

}
