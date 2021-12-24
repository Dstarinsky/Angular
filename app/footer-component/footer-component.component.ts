import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {

  constructor() { }
  date:Date= new Date();
  year:number=this.date.getFullYear();


  ngOnInit(): void {
  }

}
