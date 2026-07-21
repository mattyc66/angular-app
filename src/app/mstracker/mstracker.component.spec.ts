import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MStrackerComponent } from './mstracker.component';

describe('MStrackerComponent', () => {
  let component: MStrackerComponent;
  let fixture: ComponentFixture<MStrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MStrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MStrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
