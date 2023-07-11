import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  baseAPIUrl = "https://worldmediamanagement.onrender.com";

  name: string= '';
  email: string= '';
  message: string= '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted');
      console.log('Form values:', form.value);
    }
    const formData = form.value;

    this.http.post(this.baseAPIUrl+'/send-email', formData)
      .subscribe(
        (response) => {
          console.log('Email sent successfully');
          // Handle success, e.g., show a success message
        },
        (error) => {
          console.error('Failed to send email:', error);
          // Handle error, e.g., show an error message
        }
      );
  }

}
