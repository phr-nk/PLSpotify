import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistcompareComponent } from './artistcompare.component';

describe('ArtistcompareComponent', () => {
  let component: ArtistcompareComponent;
  let fixture: ComponentFixture<ArtistcompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistcompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
