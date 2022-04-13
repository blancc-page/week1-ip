import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quotes!: Quote;
  @Output() quoteAdd = new EventEmitter<{ quoteText: string, authorName: string, submittedBy: string }>();

  newQuote = new Quote(  
    "",
    "",
    "",
     0,
     0,
     new Date(),
     0,
  )

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.quoteAdd.emit(this.newQuote);
  }
}
