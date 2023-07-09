import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-ourwork',
  templateUrl: './ourwork.component.html',
  styleUrls: ['./ourwork.component.scss']
})
export class OurworkComponent implements OnInit {
  selectedtab = 1
  showUncleBrownDetails = false
  settings = {
    counter: false,
  };

  constructor() { }

  ngOnInit(): void {
    $('.brandingDetails').slideUp()
  }

  showTab(n: any) {
    $('.tabContent').hide();
    $('.tabContent:eq(' + n + ')').show()
    $('.tab').removeClass('active')
    $('.tab:eq(' + n + ')').addClass('active')
  }

  showDetails() {
    if (this.showUncleBrownDetails) {
      this.showUncleBrownDetails = false

      $('.brandingDetails').slideUp()
    } else {
      this.showUncleBrownDetails = true
      $('.brandingDetails').slideDown()
    }
  }

}
