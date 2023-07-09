import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-vidphoto',
  templateUrl: './vidphoto.component.html',
  styleUrls: ['./vidphoto.component.scss']
})
export class VidphotoComponent implements OnInit {
  settings = {
    counter: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
