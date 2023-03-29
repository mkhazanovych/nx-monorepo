import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundensucheComponent } from './kundensuche.component';

describe('KundensucheComponent', () => {
  let component: KundensucheComponent;
  let fixture: ComponentFixture<KundensucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KundensucheComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KundensucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
