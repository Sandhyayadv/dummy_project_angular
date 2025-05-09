import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCreationComponent } from './quote-creation.component';

describe('QuoteCreationComponent', () => {
  let component: QuoteCreationComponent;
  let fixture: ComponentFixture<QuoteCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
