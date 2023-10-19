import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
	@Input()
	gameName:string = ""
	@Input()
	gameCover:string = ""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string ="XPTO | PS4"
	@Input()
	gamePrice:string = "R$ 399,90"

  constructor() { }

  ngOnInit(): void {
  }

}