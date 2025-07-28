import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBeComponent } from './how-to-be.component';

describe('HowToBeComponent', () => {
  let component: HowToBeComponent;
  let fixture: ComponentFixture<HowToBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToBeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
