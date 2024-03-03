import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-pagination-count-in-page',
  templateUrl: './pagination-count-in-page.component.html',
  styleUrls: ['./pagination-count-in-page.component.scss']
})
export class PaginationCountInPageComponent {
  @Input() pageNumber: number = 1;
  @Input() countInPage: number = 5;
  @Output() countInPageChange:EventEmitter<any> = new EventEmitter();
}
