import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  email: string = ''; // بريد إلكتروني للاختبار
  password: string = '';   // كلمة مرور للاختبار
  
  constructor(private navCtrl: NavController
    ,private fb: FormBuilder
    ,  private authService: AuthService
    ,private toastCtrl: ToastController,
  
  ) {}


    async login() {
      try {
        const response = await this.authService.login(this.email, this.password).toPromise();
        
        if (response && response.token) {
          const successToast = await this.toastCtrl.create({
            message: 'Login successful!',
            duration: 2000,
            color: 'success'
          });
          successToast.present();
          this.navCtrl.navigateForward('/candidates');
        } else {
          throw new Error('Invalid response');
        }
      } catch (error) {
        const errorToast = await this.toastCtrl.create({
          message: 'Invalid email or password!',
          duration: 2000,
          color: 'danger'
        });
        errorToast.present();
      }
    }
  cancel() {
    // Clear the form fields and log cancel action
    this.email = '';
    this.password = '';
    console.log('Login cancelled');

  }

  goBack() {
    // Navigate to the previous page
    this.navCtrl.navigateForward('/home');
  }
}
