import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReorganizePagesDrawerComponent } from './card-reorganize-pages-drawer.component';

describe('CardReorganizePagesDrawerComponent', () => {
  let component: CardReorganizePagesDrawerComponent;
  let fixture: ComponentFixture<CardReorganizePagesDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReorganizePagesDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReorganizePagesDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
