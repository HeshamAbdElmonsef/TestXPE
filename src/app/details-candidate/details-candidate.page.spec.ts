import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsCandidatePage } from './details-candidate.page';

describe('DetailsCandidatePage', () => {
  let component: DetailsCandidatePage;
  let fixture: ComponentFixture<DetailsCandidatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCandidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
