import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.page.html',
  styleUrls: ['./image-model.page.scss'],
})
export class ImageModelPage implements OnInit {

  img: any;

  @ViewChild('slider', { read: ElementRef }) slider: ElementRef;

  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  }

  constructor(private navParams: NavParams, private modalCtrl: ModalController,private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  zoom(zoomIn: boolean) {
    let zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }

  shareImg(){
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });

    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

}
