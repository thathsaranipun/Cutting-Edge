import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrizeComponent } from './prize/prize.component';
import { TopComponent } from './top/top.component';
import { HttpClientModule } from '@angular/common/http';
import { FirePredictionsComponent } from './fire-predictions/fire-predictions.component';
import { PastForestFiresComponent } from './past-forest-fires/past-forest-fires.component';
import { GlobalWeatherDataComponent } from './global-weather-data/global-weather-data.component';
import { LanguageTranslatorComponent } from './language-translator/language-translator.component';
import { LogInComponent } from './log-in/log-in.component';
import { AgmCoreModule } from '@agm/core';
import {PageaboutusComponent} from './pageaboutus/pageaboutus.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PredicpipeService } from './predicpipe.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AppServices} from 'src/services/app-services'
import { ReviewFormComponent} from './page-review/review-form.component';
import { MessageComponent } from './message/message.component';
import { PaymentComponent } from './payment/payment.component';
import { BlogComponent} from './blog/blog.component';
import { CenterComponent } from './center/center.component';
import { WeatherService } from './weather.service';
import { CenterService } from './center.service';




// import { ApixuService } from "./apixu.service";
// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
   
    PrizeComponent,
    TopComponent,
    FirePredictionsComponent,
    PastForestFiresComponent,
    GlobalWeatherDataComponent,
    LanguageTranslatorComponent,
    LogInComponent,
    PageaboutusComponent,
    RegisterComponent,
    ReviewFormComponent,
    MessageComponent,
    PaymentComponent,
    BlogComponent,
    CenterComponent,
  
   

  ],



  

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    Ng2SearchPipeModule ,

    // ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      // apiKey: 'AIzaSyDd0RZJ9cs3qzV5q_P6E7bXJFOV_C4ovWo'
      
      apiKey: 'AIzaSyCesJKQnqce3i1oLyfO89ku8fYnNRj0VGo'
    })





  ],
    
  providers: [PredicpipeService,AppServices,WeatherService,CenterService],
  bootstrap: [AppComponent]
})
export class AppModule { }


