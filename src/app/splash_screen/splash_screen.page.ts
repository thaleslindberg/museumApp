import { Component } from '@angular/core';

@Component({
  selector: 'app-splash_screen',
  templateUrl: 'splash_screen.page.html',
  styleUrls: ['splash_screen.page.scss'],
})
export class SplashScreenPage {

  welcomeText : string = 'Seja bem vindo!';
  museumName : string = 'MUSEU DE ARTE ASSIS CHATEUBRIAND';


  constructor() {}

}
