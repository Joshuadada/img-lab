import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressImgComponent } from './compress-img.component';

describe('CompressImgComponent', () => {
  let component: CompressImgComponent;
  let fixture: ComponentFixture<CompressImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompressImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompressImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
