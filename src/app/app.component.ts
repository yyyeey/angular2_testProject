import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
  username = '';
  hideInfo = true;
  clicksArray = [];

  handleClick = function() {
    console.log('Username cleared');
    this.username = '';
  };

  handleHideInfo = function() {
    this.hideInfo = !this.hideInfo;
    this.clicksArray.push(new Date().toLocaleTimeString() + ' Area turned ' + (this.hideInfo ? 'hidden' : 'visible'));
    //console.log(this.clicksArray);
  };

  getTypeOf = function() {
    return typeof this.username;
  };
}
