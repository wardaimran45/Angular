import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit{

  id = ''

  //goal is to store the id

 constructor(public route: ActivatedRoute){}

 ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
   this.id = params['id']
  })
    // this.id = this.route.snapshot.params['id']
 }
}
