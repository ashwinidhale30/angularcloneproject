import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'student',component:StudentComponent},
  {path:'studentdetails',component:StudentdetailsComponent},
  {path:'studcount/20',component:StudcountComponent},
  {path:'home',component:HomeComponent},
  {path:'introduction',component:IntroductionComponent},
  {path:'editors',component:EditorsComponent},
  {path:'basic',component:BasicComponent},
  {path:'elements',component:ElementsComponent},
  {path:'attributes',component:AttributesComponent},
  {path:'headings',component:HeadingsComponent},
  {path:'paragraphs',component:ParagraphsComponent},
  {path:'styles',component:StylesComponent},
  {path:'formatting',component:FormattingComponent},
  {path:'quatation',component:QuatationComponent},
  {path:'comments',component:CommentsComponent},
  {path:'colors',component:ColorsComponent},
  {path:'css',component:CssComponent},
  {path:'links',component:LinksComponent},
  {path:'images',component:ImagesComponent},
  {path:'tables',component:TablesComponent},
  {path:'templateform',component:TemplateformComponent},
  {path:'reactiveform',component:ReactiveformComponent},
  {path:'reactform1',component:Reactform1Component},
  {path:'reactform2',component:Reactform2Component},
  {path:'observable',component:ObservableComponent},
  {path:'car',component:CarComponent},
  {path:'getinfo',component:GetinfoComponent},
  {path:'form',component:FormComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
