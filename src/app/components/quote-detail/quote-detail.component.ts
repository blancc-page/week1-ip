import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faHeartCrack, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})

export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  faTimes = faTimes;
  faHeartCrack = faHeartCrack;
  faHeart = faHeart;
  upvotes: number = 0;
  downvotes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  quoteDelete(complete: boolean){
    this.isComplete.emit(complete);
  }

  onLike(upvotes: number, quote: Quote){
    // if(upvotes == 0){
    //   this.upvotes +=2
    // } else {
      this.upvotes++;
      quote.like = this.upvotes++;
    // }
    console.log(upvotes);
  }

  onDislike(downvotes: number, quote: Quote){
    // if(downvotes == 0){
    //   this.downvotes +=2
    // } else {
      this.downvotes++;
      quote.dislike = this.downvotes++;
    // }
    console.log(downvotes);
  }
}
