import { Component } from '@angular/core';
import { practiceComponent } from './practice.component';
export class Hero {
  id:number;
  name:string;
}
@Component({
  
  selector:'app-root',
  template: `<h1>{{title}}</h1>
              <h2>My Heros</h2>
              <ul class="heroes">
                 <li *ngFor = "let hero of heroes" [class.selected] ="hero === selectedHero"  (click) = "onselect(hero)"><span class="badge">{{hero.id}}</span> {{hero.name}}</li>
              </ul>
              <div *ngIf = "selectedHero">
                <h2>{{selectedHero.name}} Details!</h2>
                <div><label>id: </label>{{selectedHero.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="selectedHero.name" placeholder="name"/>
                </div>
              </div>`,
    styles: [`
     .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
              list-style-type:none;
              padding:0;
               margin: 0 0 2em 0;
                width: 15em;
      }
      .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }`]         
})
export class AppComponent {
  
  title = 'Tour Of Heroes';
   heroes:Hero[]=[
    {id:1, name:'Mr.siva'},
    {id:2, name:'Mr.prakash'},
    {id:3, name:'Mr.praba'},
    {id:4, name:'Mr.mani'},
    {id:5, name:'Mr.essaki'},
    {id:6, name:'Mr.sree'},
    {id:7, name:'Mr.manoj'},
    {id:8, name:'Mr.karthi'},
    {id:9, name:'Mr.ila'}
  ]
 selectedHero: Hero;
 onselect(hero:Hero) {
   this.selectedHero = hero;
 }
}
