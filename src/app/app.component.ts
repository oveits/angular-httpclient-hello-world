import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title : String = 'Loading title...';
  public content : String = 'Loading content...';

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
     this._http.get('https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts/3078')
                 .subscribe(data => {
                        this.title = data.title;
                        this.content = data.content;
                        console.log(data);
                });
  }
}
