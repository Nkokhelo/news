import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { News } from '../inews';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: News[];
  constructor(private data: DataService) { }

  ngOnInit() {
   this.data.getNews().subscribe(d => {
      this.newsList = d.filter(n => n.urlToImage != null || n.description != null);
   });
  }

}
