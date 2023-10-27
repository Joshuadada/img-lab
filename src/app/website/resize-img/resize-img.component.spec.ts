import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeImgComponent } from './resize-img.component';

describe('ResizeImgComponent', () => {
  let component: ResizeImgComponent;
  let fixture: ComponentFixture<ResizeImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizeImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
