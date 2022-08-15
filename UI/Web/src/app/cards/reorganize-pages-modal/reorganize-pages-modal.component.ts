import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reorganize-pages-modal',
  templateUrl: './reorganize-pages-modal.component.html',
  styleUrls: ['./reorganize-pages-modal.component.scss']
})
export class ReorganizePagesModalComponent implements OnInit, AfterViewInit {

  @Input() title!: string;

  @ViewChild('title') inputElem!: ElementRef<HTMLInputElement>;

  constructor(private modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  close(): void {
    this.modal.close();
  }

}
