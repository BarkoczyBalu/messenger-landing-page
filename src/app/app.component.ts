import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private secretInput: string = '';
  private counter: number = 0;
  private secretPassword: string = 'SecretPass';

  public title: string = 'messenger-landing-page';
  public restartTimer: any;


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.target as HTMLElement).tagName.toLowerCase() !== 'input') {
      this.setTimer(3);
      this.secretInput += event.key;

      if (this.secretInput === this.secretPassword) this.secretFunction();
    } 
  }
  
  private secretFunction(): void {
    alert('You hacked the system!');
  }
  
  public setTimer(seconds: number): void {
    clearInterval(this.restartTimer);
    this.restartTimer = setInterval(() => {
      this.counter++;
      if (this.counter === seconds) {
        this.counter = 0;
        this.secretInput = '';
        clearInterval(this.restartTimer);
        this.restartTimer = null;
        console.log(this.secretInput);
      } 
    }, 1000);
  }

}
