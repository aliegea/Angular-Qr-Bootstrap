import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposQrComponent } from './tipos-qr.component';

describe('TiposQrComponent', () => {
  let component: TiposQrComponent;
  let fixture: ComponentFixture<TiposQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
