import { Component } from '@angular/core';
import {QuotesService} from './services/quotes.service';

@Component({
  moduleId: module.id,
  selector: 'quotebox-app',
  providers:[QuotesService],
  templateUrl: 'quotebox.component.html',
  styleUrls: ['quotebox.component.css']
})
export class QuoteboxAppComponent {
  public quote: string;
  constructor(private quotes_service: QuotesService){
    this.quote = null;
    this.tapQuote();
  }

  tapQuote(){
    this.quote = this.quotes_service.genQuote();
    console.log("this.quote in QuoteBox component");
    console.log('this.quote');
    console.log(this.quote);
  }
}
