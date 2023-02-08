import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Films2Component } from './films2.component';

describe('Films2Component', () => {
  let component: Films2Component;
  let fixture: ComponentFixture<Films2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Films2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Films2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
