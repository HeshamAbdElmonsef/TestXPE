import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";
import { CandidatesService } from '../services/candidates.service';
import { Candidates } from '../models/candidates';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.page.html',
  styleUrls: ['./candidates.page.scss'],
  standalone: false
})
export class CandidatesPage implements OnInit {

  candidates: Candidates[] = [];
  selectedFile: File | null = null;
  uploadMessage: string = '';
  page: number = 1;
  loading = false;
  constructor(private candidatesService: CandidatesService,private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    // يمكنك استدعاء loadCandidates هنا إذا كنت تريد تحميل البيانات عند بدء الصفحة
    // this.loadCandidates();
  }
  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onUpload(): void {
    if (!this.selectedFile) {
      this.uploadMessage = 'Please select a file first.';
      return;
    }

    this.candidatesService.uploadFile(this.selectedFile).subscribe({
      next: () => {
        this.uploadMessage = 'File uploaded successfully!';
      },
      error: () => {
        this.uploadMessage = 'Error uploading file.';
      }
    });
  }

  loadCandidates(): void {
    this.loading = true;
    this.candidatesService.getCandidates().subscribe({
      next: (data) => {
        console.log('Raw data received:', data);
        this.candidates = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching candidates:', err);
        this.loading = false;
      }
    });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
