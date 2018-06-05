import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from "ionic-angular";
import {Quote} from "@angular/compiler";
import {QuotesService} from "../../services/quotes";
import { TextToSpeech } from '@ionic-native/text-to-speech';



@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
quoteGroup: {category: string, quotes: Quote[], icon:string};

  constructor(private navParams: NavParams, private alertCtrl:AlertController, private quoteService: QuotesService, private tts: TextToSpeech) {}

  ngOnInit()
  {
    this.quoteGroup=this.navParams.data;
  }

  //ionViewDidLoad()
 // {
    //this.quoteGroup = this.navParams.data;
  //}//

  onAddToFavorites(selectedQuote: Quote)
  {
  const alert = this.alertCtrl.create({
    title: 'Add Quote',
    subTitle: 'Are you sure?',
    message: 'Are you sure you want to add the quote to favorite?',
    buttons: [{
      text:'Yes, go ahead',
      handler: () => {
        this.quoteService.addQuoteToFavorites(selectedQuote);

      }
    },
      {
        text:'No, I changed my mind!',
        role:'cancel',
        handler: () => {
          console.log('Cancelled!');
        }
      }]
  });

  alert.present();
  }

  onRemoveFromFavorites(quote:Quote)
  {
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote:Quote)
  {
    return this.quoteService.isQuoteFavorite(quote);
  }

  talktospeech(quote)
  {
    console.log(quote);
    this.tts.speak(quote)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
}
