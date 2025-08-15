import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellePageComponent } from './nouvelle-page.component';

describe('NouvellePageComponent', () => {
  let component: NouvellePageComponent;
  let fixture: ComponentFixture<NouvellePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvellePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvellePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
