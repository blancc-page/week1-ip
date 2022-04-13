import { Pipe, PipeTransform, Input } from '@angular/core';
import { Quote } from './quote';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {
  @Input() quote!: Quote;

  transform(value: any): unknown {
    let today:Date = new Date(); //get current date and time
    let postday :any = this.quote.postDate;
    var dateDifference = Math.abs(value - postday) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > postday){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
