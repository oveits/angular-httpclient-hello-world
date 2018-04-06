import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title : SafeHtml|String = 'Loading title...';
  public content : SafeHtml|String = 'Loading content...';

  constructor(private _http: HttpClient, private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
     this._http.get('https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts/3078')
                 .subscribe(data => {
                        this.title = this._sanitizer.bypassSecurityTrustHtml(data.title);
                        this.content = this._sanitizer.bypassSecurityTrustHtml(data.content);
                        console.log(data);
                });
  }
}
