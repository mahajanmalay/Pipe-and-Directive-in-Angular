import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "marvellous infosystems PUNE";

  public batches={"name":"PPA","duration":"4 Months"};
  
  public today=new Date();

  public no = 1.239;

  public fees = 15000;
}
