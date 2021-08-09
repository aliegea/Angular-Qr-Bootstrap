import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrequentesComponent } from './preguntas-frequentes.component';

describe('PreguntasFrequentesComponent', () => {
  let component: PreguntasFrequentesComponent;
  let fixture: ComponentFixture<PreguntasFrequentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasFrequentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasFrequentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
