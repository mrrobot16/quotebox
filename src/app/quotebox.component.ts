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
  public author: string;

  constructor(private quotes_service: QuotesService){
    this.quote = null;
    this.author = "Craig J Lewis";
  }

  tapQuote(){
    this.quote = this.quotes_service.genQuote();
  }
}
