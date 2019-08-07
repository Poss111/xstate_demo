import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quick-input-component',
  templateUrl: './quick-input-component.component.html',
  styleUrls: ['./quick-input-component.component.scss']
})
export class QuickInputComponentComponent implements OnInit {

  @Input()
  inputBoxTitle: string;
  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

}
