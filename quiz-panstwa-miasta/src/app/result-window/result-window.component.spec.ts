import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultWindowComponent } from './result-window.component';

describe('ResultWindowComponent', () => {
  let component: ResultWindowComponent;
  let fixture: ComponentFixture<ResultWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
