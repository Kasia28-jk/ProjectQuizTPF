import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameWindowComponent } from './main-game-window.component';

describe('MainGameWindowComponent', () => {
  let component: MainGameWindowComponent;
  let fixture: ComponentFixture<MainGameWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGameWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGameWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
