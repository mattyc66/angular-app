import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicTrackerComponent } from './comic-tracker.component';

describe('ComicTrackerComponent', () => {
  let component: ComicTrackerComponent;
  let fixture: ComponentFixture<ComicTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
