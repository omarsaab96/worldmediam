import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidphotoComponent } from './vidphoto.component';

describe('VidphotoComponent', () => {
  let component: VidphotoComponent;
  let fixture: ComponentFixture<VidphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidphotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
