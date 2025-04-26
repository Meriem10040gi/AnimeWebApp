import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAnimePageComponent } from './all-anime-page.component';

describe('AllAnimePageComponent', () => {
  let component: AllAnimePageComponent;
  let fixture: ComponentFixture<AllAnimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAnimePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAnimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
