import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocalComponent } from './socal.component';

describe('SocalComponent', () => {
  let component: SocalComponent;
  let fixture: ComponentFixture<SocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
