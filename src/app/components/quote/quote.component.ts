import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  @Output() quotes: Quote[] =[
    new Quote(
      
      "\"Be yourself; everyone else is already taken.\"",
      "Oscar Wilde",
      "Jamie",
       0,
       0,
       new Date(2020,3,14),
       1,
    ),
    new Quote(
       
      "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
       "Albert Einstien",
       "Linda",
       0,
       0,
       new Date(2019,6,9),
       2,
    ),
    new Quote(
      
      "\"So many books, so little time.\"",
       "Frank Zappa",
       "Brandy",
       0,
        0,
       new Date(2022,1,12),
       3,
    ),
    new Quote(
       
      "\"Live as if you were to die tomorrow. Learn as if you were to live forever\"",
      "Mahatma Ghandi",
      "MJ",
       0,
       0,
      new Date(2019,0,18),
      4,
    ),
    new Quote(
      
      "\"Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring\"",
       "Marilyn Monroe",
       "CJ",
       0,
       0,
       new Date(2019,2,14),
       5,
    ),
    new Quote(
      
      "\"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.\"",
       "Neil Gaiman",
       "Carl",
       0,
       0,
       new Date(2030,3,14),
       6,
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

  onAddQuote(newQuote: Quote){
    this.quotes.unshift(newQuote);
  }
}
