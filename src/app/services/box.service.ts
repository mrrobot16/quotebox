import { Injectable } from '@angular/core';

@Injectable()
export class BoxService {
  public quotes: Array<any>;
  public quote: string;
  public author: string;
  constructor() {
    this.quotes = []
  }

}
