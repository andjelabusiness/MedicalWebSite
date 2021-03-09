import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgostComponent } from './bolgost.component';

describe('BolgostComponent', () => {
  let component: BolgostComponent;
  let fixture: ComponentFixture<BolgostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolgostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
