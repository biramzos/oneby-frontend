import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-pagination-page-number',
  templateUrl: './pagination-page-number.component.html',
  styleUrls: ['./pagination-page-number.component.scss']
})
export class PaginationPageNumberComponent{
  @Input() collectionSize: number = 0;
  @Input() pageNumber: number = 1;
  @Input() countInPage: number = 5;
  @Input() maxSize: number = 3;
  @Input() rotate: boolean = false;
  @Input() boundaryLinks: boolean = false;
  @Output() pageChange:EventEmitter<any> = new EventEmitter();
}
