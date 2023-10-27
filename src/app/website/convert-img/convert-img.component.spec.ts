import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertImgComponent } from './convert-img.component';

describe('ConvertImgComponent', () => {
  let component: ConvertImgComponent;
  let fixture: ComponentFixture<ConvertImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
