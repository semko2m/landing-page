import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { LandingPageRoutingModule } from "./landing-page.routing.module";
import { PageComponent } from "./components/page/page.component";
import { ScrollAnimationDirective } from "./directives/scroll-animation.directive";
import { FeatureListComponent } from "./components/feature-list/feature-list.component";



@NgModule({
  declarations: [
    WelcomeComponent,
    ThankYouComponent,
    PageComponent,
    FeatureListComponent,
    ScrollAnimationDirective
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
