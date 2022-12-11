import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddDeviceComponent;
  let fixture: ComponentFixture<AddDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
