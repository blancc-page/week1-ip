import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes: Quote[] =[
    new Quote(
      1,
      "\"Be yourself; everyone else is already taken.\"",
      "Oscar Wilde",
      "Jamie",
       2,
       5,
    ),
    new Quote(
       2,
      "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
       "Albert Einstien",
       "Linda",
       6,
       2
    ),
    new Quote(
       3,
      "\"So many books, so little time.\"",
       "Frank Zappa",
       "Brandy",
       10,
       1
    ),
    new Quote(
       4,
      "\"Live as if you were to die tomorrow. Learn as if you were to live forever\"",
      "Mahatma Ghandi",
      "MJ",
       15,
      3,
    ),
    new Quote(
      5,
      "\"Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring\"",
       "Marilyn Monroe",
       "CJ",
       15,
       3
    ),
    new Quote(
      6,
      "\"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.\"",
       "Neil Gaiman",
       "Carl",
       7,
       8
    ),
  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggleQuoteDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete: any, index: number){
    if(isComplete){
      this.quotes.splice(index, 1);
    }
  }
}
