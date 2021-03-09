import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IstrazivacComponent } from './istrazivac.component';

describe('IstrazivacComponent', () => {
  let component: IstrazivacComponent;
  let fixture: ComponentFixture<IstrazivacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstrazivacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstrazivacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
