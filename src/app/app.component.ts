import { Component, OnInit } from '@angular/core';
import { WhoamiServiceService } from './whoami-service.service';
import { timeout }              from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Nerio's page";
  visitors : number =0;
  constructor(private whoamiService : WhoamiServiceService){}
  ngOnInit(): void
  {
    this.whoamiService.getVisitors()
    .pipe(timeout(10000))
    .subscribe(
      (response: any) =>
      {
        if(response.success)
        {
          this.visitors =response.payload['visitors'];
        }
      }
    );
  }
}
