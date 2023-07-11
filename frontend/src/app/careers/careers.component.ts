import { Component, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  baseAPIUrl = "https://worldmediamanagement.onrender.com";


  formData = {
    name: '',
    email: '',
    cv: null as File | null
  };

  errorName = false
  errorEmail = false
  errorCV = false

  constructor(private http: HttpClient) { }


  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.formData.cv = fileList[0];
    }
  }

  isEmptyOrSpaces(str: any) {
    return str === null || str.match(/^ *$/) !== null;
  }

  checkname() {
    if (this.isEmptyOrSpaces(this.formData.name)) {
      this.errorName = true
    } else {
      this.errorName = false
    }
  }

  checkemail(email: any) {
    // Empty Check
    if (email.trim() === '') {
      this.errorEmail = true
      return false; // Empty email
    }

    // Invalid Email Format Check
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    regex.test(email) ? this.errorEmail = false : this.errorEmail = true;
    return regex.test(email);
  }

  checkCV(fileInput: any) {
    return fileInput.files.length === 0;
  }

  submitForm() {

    if (this.isEmptyOrSpaces(this.formData.name)) {
      console.log('name required')
      this.errorName = true
    } else {
      this.errorName = false
    }

    if (this.checkemail(this.formData.email)) {
      console.log('email ok')
      this.errorEmail = false
    } else {
      console.log('email empty or invalid')
      this.errorEmail = true
    }

    this.checkCV(document.getElementById('cv')) ? this.errorCV = true : this.errorCV = false

    if (!this.errorName && !this.errorEmail && !this.errorCV) {
      // Create FormData object
      const formData = new FormData();
      formData.append('name', this.formData.name);
      formData.append('email', this.formData.email);
      formData.append('cv', this.formData.cv!);

      // Send the form data to the server
      this.http.post(this.baseAPIUrl + '/send-cv', formData)
        .subscribe(
          response => {
            // Handle the server response here
            console.log(response);
            // Reset the form after successful submission
            this.formData = {
              name: '',
              email: '',
              cv: null
            };
          },
          error => {
            // Handle any error that occurred during the request
            console.error(error);
          }
        );
    }



  }
}
