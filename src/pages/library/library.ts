import { Component, OnInit } from '@angular/core';

import quotes from "../../data/quotes";
import {Quote} from "@angular/compiler";
import {QuotePage} from "../quote/quote";
import {QuotesPage} from "../quotes/quotes";


@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon:string}[];
  quotesPage = QuotesPage;
  ngOnInit(){
    this.quoteCollection = quotes;
}
}
