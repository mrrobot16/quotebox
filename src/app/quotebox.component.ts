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
  constructor(private quotes_serice: QuotesService){
  }
}
