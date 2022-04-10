
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 // Single File Upload
 private file: File;

 // Multiple File Upload
 private fileOne: File;
 private fileTwo: File;
 private fileThree: File;

  constructor(private http: HttpClient) {}
  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
  }
  async submitForm() {
    let formData = new FormData();
    formData.append("photo", this.file, this.file.name);

    const serverUrl = "http://localhost:3000/upload";
    const nestServerUrl = "http://localhost:3000/photos/upload";

    this.http.post(serverUrl, formData).subscribe((response) => {
      console.log(response);
    });
  }
  onFileOneChange(fileChangeEvent) {
    this.fileOne = fileChangeEvent.target.files[0];
  }

  onFileTwoChange(fileChangeEvent) {
    this.fileTwo = fileChangeEvent.target.files[0];
  }

  onFileThreeChange(fileChangeEvent) {
    this.fileThree = fileChangeEvent.target.files[0];
  }


  async submitMultipleForm() {
    let formData = new FormData();
    formData.append("photos[]", this.fileOne, this.fileOne.name);
    formData.append("photos[]", this.fileTwo, this.fileTwo.name);
    formData.append("photos[]", this.fileThree, this.fileOne.name);

    const serverUrl = "http://localhost:3000/uploads";
    const nestServerUrl = "http://localhost:3000/photos/uploads";

    this.http.post(serverUrl, formData).subscribe((response) => {
      console.log(response);
    });
  }
}
