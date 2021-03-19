import { DataService } from './../data.service';
import { ImageModelPage } from './../image-model/image-model.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  selectedArray: any = [];
  isFirstLoad = "True";

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    sapceBetween: 20
  }
  selectedQuestions: any;
  filteredPeople: any;

  
  finalImageData: any = [];
  storedData: any;
  constructor(private modalCtrl: ModalController, private DataService: DataService) { }


  ngOnInit() {
    this.isFirstLoad = "True";
    if(localStorage.getItem('test')){
      this.storedData = JSON.parse(localStorage.getItem('test'));
    }
    this.addMoreItems(this.isFirstLoad);

  }

  loadData(event, isFirstLoad) {
    setTimeout(() => {
      this.addMoreItems(isFirstLoad);
      event.target.complete();
    }, 500);
  }

  addMoreItems(isFirstLoad) {
    if (isFirstLoad == "True") {
      const tempData = this.storedData.filter(item => item.id < 11);
      this.finalImageData.push(tempData);
    } else {
      let tempdata = [];
      tempdata = this.storedData.splice(this.finalImageData[0].length, 10);
      this.finalImageData[0].push(...tempdata);
    }

  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


  openPreview(image) {
    this.modalCtrl.create({
      component: ImageModelPage,
      componentProps: {
        img: image
      }

    }).then(modal => modal.present());
  }

  addCheckbox(event, image) {
    if (event.detail.checked == true) {
      this.selectedArray.push(image);
    } else {
      this.filteredPeople = this.selectedArray.filter((item) => item.id !== image.id);
    }
    if (this.filteredPeople) {
      this.selectedArray = this.filteredPeople;
    }
  }

  delete() {;
    if (this.selectedArray) {
      var temdata = this.finalImageData[0].filter(item => !this.selectedArray.includes(item));
      this.finalImageData[0] = temdata;
    }
  }

}
