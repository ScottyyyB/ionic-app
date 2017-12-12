import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  height: number;
  weight: number;
  imperialHeight: number;
  imperialWeight: number;
  bmiValue: number;
  bmiMessage: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  imperial: boolean = false;
  bmiSwitch() {
    if (!this.imperial) {
      this.imperial = true;
      return;
    }
    if (this.imperial) {
      this.imperial = false;
      return;
    }
  }

  calculateBMI() {
    if (this.weight > 0 && this.height > 0 && !this.imperial) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }

    if (this.imperialWeight > 0 && this.imperialHeight > 0 && this.imperial) {
      let finalBmi = this.imperialWeight * 703 / (this.imperialHeight * this.imperialHeight);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }

  private setBMIMessage() {

    if (this.bmiValue < 18.5) {
      this.bmiMessage = 'Underweight'
      return;
    }

    if (this.bmiValue < 25) {
      this.bmiMessage = 'Normal';
      return;
    }

    if (this.bmiValue < 30) {
      this.bmiMessage = 'Overweight';
      return;
    }

    else {
      this.bmiMessage = 'Obese';
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

}
