import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  accessToken: string | null = null;

  ngOnInit(): void {
    // Simulate getting the access token after the user is redirected back
    // Here, we assume you store the token in localStorage or use a service
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.accessToken = token;
      console.log('Access Token found:', this.accessToken);
      this.loadQlikEmbedApp();
    } else {
      console.log('No access token found. Ensure OAuth is correctly set up.');
    }
  }

  loadQlikEmbedApp() {
    if (this.accessToken) {
      console.log('Loading Qlik Embed with access token...');
      const qlikEmbed = document.querySelector('qlik-embed');
      if (qlikEmbed) {
        qlikEmbed.setAttribute('data-access-token', this.accessToken);
        console.log('Access token set for Qlik Embed');
      } else {
        console.log('Qlik Embed component not found.');
      }
    }
  }
}
