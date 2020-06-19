import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';

import {PrizeComponent} from './prize/prize.component';
import {FirePredictionsComponent} from './fire-predictions/fire-predictions.component';
import {PastForestFiresComponent} from './past-forest-fires/past-forest-fires.component';
import {GlobalWeatherDataComponent} from './global-weather-data/global-weather-data.component';
import {LanguageTranslatorComponent} from './language-translator/language-translator.component';
import {LogInComponent} from './log-in/log-in.component';
import {PageaboutusComponent} from './pageaboutus/pageaboutus.component';
import {RegisterComponent} from './register/register.component';
import { ReviewFormComponent} from './page-review/review-form.component';
import { MessageComponent } from './message/message.component';
import { PaymentComponent } from './payment/payment.component';
import { BlogComponent } from './blog/blog.component';
import { CenterComponent } from './center/center.component';


const routes: Routes = [
{path:'',component:TopComponent},
{path: "top", component: TopComponent},
{path: "fire-predictions",component : FirePredictionsComponent },
{path: "past-forest-fires",component : PastForestFiresComponent },
{path: "global-weather-data",component : GlobalWeatherDataComponent },
{path: "language-translator",component : LanguageTranslatorComponent },
{path: "log-in",component : LogInComponent },


{path:'prize',component:PrizeComponent},
{path: "pageaboutus",component : PageaboutusComponent },
{path: "register",component : RegisterComponent },
{path: "page-review",component :  ReviewFormComponent },
{path: "message",component :  MessageComponent },
{path: "payment",component :  PaymentComponent },
{path: "blog",component :  BlogComponent },
{path: "center",component :   CenterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
