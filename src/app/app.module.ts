import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudcountComponent } from './studcount/studcount.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EditorsComponent } from './editors/editors.component';
import { BasicComponent } from './basic/basic.component';
import { ElementsComponent } from './elements/elements.component';
import { AttributesComponent } from './attributes/attributes.component';
import { HeadingsComponent } from './headings/headings.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';
import { StylesComponent } from './styles/styles.component';
import { FormattingComponent } from './formatting/formatting.component';
import { QuatationComponent } from './quatation/quatation.component';
import { CommentsComponent } from './comments/comments.component';
import { ColorsComponent } from './colors/colors.component';
import { CssComponent } from './css/css.component';
import { LinksComponent } from './links/links.component';
import { ImagesComponent } from './images/images.component';
import { TablesComponent } from './tables/tables.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Reactform1Component } from './reactform1/reactform1.component';
import { Reactform2Component } from './reactform2/reactform2.component';
import { ObservableComponent } from './observable/observable.component';
import { CarComponent } from './car/car.component';
import { GetinfoComponent } from './getinfo/getinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentdetailsComponent,
    StudcountComponent,
    HomeComponent,
    IntroductionComponent,
    EditorsComponent,
    BasicComponent,
    ElementsComponent,
    AttributesComponent,
    HeadingsComponent,
    ParagraphsComponent,
    StylesComponent,
    FormattingComponent,
    QuatationComponent,
    CommentsComponent,
    ColorsComponent,
    CssComponent,
    LinksComponent,
    ImagesComponent,
    TablesComponent,
    TemplateformComponent,
    ReactiveformComponent,
    Reactform1Component,
    Reactform2Component,
    ObservableComponent,
    CarComponent,
    GetinfoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
 providers: [ {provide:LocationStrategy, useClass:PathLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
