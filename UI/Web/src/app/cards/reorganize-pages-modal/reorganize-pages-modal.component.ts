import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ReaderService} from '../../_services/reader.service';
import {ChapterInfo} from '../../manga-reader/_models/chapter-info';
import {Volume} from '../../_models/volume';
import {Chapter} from '../../_models/chapter';
import {ScrollService} from '../../_services/scroll.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-reorganize-pages-modal',
  templateUrl: './reorganize-pages-modal.component.html',
  styleUrls: ['./reorganize-pages-modal.component.scss']
})
export class ReorganizePagesModalComponent implements OnInit, AfterViewInit, AfterContentChecked {

  @ViewChild('scrollingBlock') scrollingBlock: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('companionBar') companionBar: ElementRef<HTMLDivElement> | undefined;

  @Input() title!: string;

  @ViewChild('title') inputElem!: ElementRef<HTMLInputElement>;

  // public chapterId: number;
  // public chapterInfo: ChapterInfo;
  @Input() data!: Chapter;
  pagesUrl: string[] = [];

  constructor(private modal: NgbActiveModal,
              private readerService: ReaderService,
              private scrollService: ScrollService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    //this.chapterInfo: this.readerService.getChapterInfo(this.chapterId);
    for (let i = 1; i <= this.data.pages; i++) {
      this.pagesUrl.push(this.readerService.getPageUrl(this.data.id, i));
    }
  }

  ngAfterViewInit(): void {
  }

  close(): void {
    this.modal.close();
  }

  get ScrollingBlockHeight() {
    if (this.scrollingBlock === undefined) {
      return 'calc(var(--vh)*100)';
    }
    const navbar = this.document.querySelector('.navbar') as HTMLElement;
    if (navbar === null) {
      return 'calc(var(--vh)*100)';
    }

    const companionHeight = this.companionBar!.nativeElement.offsetHeight;
    const navbarHeight = navbar.offsetHeight;
    const totalHeight = companionHeight + navbarHeight + 21; //21px to account for padding
    return 'calc(var(--vh)*100 - ' + totalHeight + 'px)';
  }

  ngAfterContentChecked(): void {
    this.scrollService.setScrollContainer(this.scrollingBlock);
  }

}
