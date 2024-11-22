import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaqqlyComponent } from './waqqly.component';

describe('WaqqlyComponent', () => {
  let component: WaqqlyComponent;
  let fixture: ComponentFixture<WaqqlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaqqlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaqqlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
