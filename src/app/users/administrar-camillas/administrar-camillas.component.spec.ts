import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCamillasComponent } from './administrar-camillas.component';

describe('AdministrarCamillasComponent', () => {
  let component: AdministrarCamillasComponent;
  let fixture: ComponentFixture<AdministrarCamillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarCamillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCamillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
