import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  images: any = [];

  constructor(private router: Router, private DataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    var data = await this.DataService.getData().toPromise();
    localStorage.setItem('test',JSON.stringify(data));
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

}
