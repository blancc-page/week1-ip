import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimeCountPipe } from './time-count.pipe';
import { HighlightDirective } from './highlight.directive';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    TimeCountPipe,
    HighlightDirective,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
