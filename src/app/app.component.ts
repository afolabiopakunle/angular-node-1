import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  newPost = 'Testing';

  enteredValue = '';

  changePost() {
    this.newPost = this.enteredValue;
  }
}
