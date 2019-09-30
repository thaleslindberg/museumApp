import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: 'Buscando',
      duration: 2000
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Carregamento encerrado!');
  }

  ngOnInit() {
  }

}
