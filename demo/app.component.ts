import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Angular2-Cookie-Law</h1>
    <span>Demo page</span>

    <div>
      <a class="link"
         href="https://github.com/andreasonny83/angular2-cookie-law">
       Fork me on GitHub
      </a>
    </div>

    <cookie-law position="top">
      Allo! This is my awesome cookie-law message.
      <a href="https://github.com/andreasonny83/angular2-cookie-law">
        Click here for more info
      </a>
    </cookie-law>

    <cookie-law learnMore="/false" target="_blank"></cookie-law>
  `,
  styles: [`
    a.link {
      color: blue;
    }
    a.link:hover {
      color: blue;
    }
  `]
})
export class AppComponent  {
  constructor() { }
}