import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit{

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navCtrl: NavController,
    private authService: AuthService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async register() {
    if (this.password !== this.confirmPassword) {
      const toast = await this.toastController.create({
        message: 'Passwords do not match!',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      return;
    }
  
    const userData = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      confirmPassword:this.confirmPassword
    };
  
    console.log('Sending to server:', userData); // تأكد من الحقول
  
    this.authService.register(userData).subscribe(
      async response => {
        const toast = await this.toastController.create({
          message: 'Registration successful!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.navCtrl.navigateForward('/Login');
      },
      async error => {
        console.error('Registration error:', error);
  
        let errorMessage = 'Registration failed.';
        if (error.error && error.error.errors) {
          const firstErrorKey = Object.keys(error.error.errors)[0];
          errorMessage = error.error.errors[firstErrorKey][0];
        }
  
        const toast = await this.toastController.create({
          message: errorMessage,
          duration: 3000,
          color: 'danger'
        });
        toast.present();
      }
    );
  }

  cancel() {
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }
  goBack() {
    this.navCtrl.navigateForward('/home');
  }

}

