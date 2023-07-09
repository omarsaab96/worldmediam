import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subbanner',
  templateUrl: './subbanner.component.html',
  styleUrls: ['./subbanner.component.scss']
})
export class SubbannerComponent implements OnInit {
  @Input() pageTitle: string = '';
  @Input() customclassname: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
