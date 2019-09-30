import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.page.html',
  styleUrls: ['./search-screen.page.scss'],
})
export class SearchScreenPage implements OnInit {

  searchText : any = 'BUSCAR';

  constructor(public loadingController: LoadingController) { }

  async presetLoading(){
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
