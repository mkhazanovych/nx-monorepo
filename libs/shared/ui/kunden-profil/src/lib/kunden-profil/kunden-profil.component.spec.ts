import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenProfilComponent } from './kunden-profil.component';

describe('KundenProfilComponent', () => {
  let component: KundenProfilComponent;
  let fixture: ComponentFixture<KundenProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KundenProfilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KundenProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
