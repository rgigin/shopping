import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedCategoryId: EventEmitter<any> = new EventEmitter<any>();


  
  constructor() { }

  ngOnInit() {
  }

  public selectedCategory(id: any): void {
    this.selectedCategoryId.emit(id);
    console.log(id);
  }

}
