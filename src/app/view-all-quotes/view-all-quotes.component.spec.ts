import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllQuotesComponent } from './view-all-quotes.component';

describe('ViewAllQuotesComponent', () => {
  let component: ViewAllQuotesComponent;
  let fixture: ComponentFixture<ViewAllQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllQuotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
