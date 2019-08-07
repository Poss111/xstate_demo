import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTableComponent } from './quick-table.component';

describe('QuickTableComponent', () => {
  let component: QuickTableComponent;
  let fixture: ComponentFixture<QuickTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
