import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  formData = {
    firstName:'',
    lastName:'',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Make an HTTP POST request to your backend API endpoint for user registration
    const apiUrl = 'http://localhost:8090/tp-jwt/admin/'; // Replace with your actual API endpoint
    this.http.post(apiUrl, this.formData).subscribe(
      (response) => {
        // Handle success response from the backend
        console.log('User registration successful!', response);
      },
      (error) => {
        // Handle error response from the backend
        console.error('Error during user registration:', error);
      }
    );
  }

}
