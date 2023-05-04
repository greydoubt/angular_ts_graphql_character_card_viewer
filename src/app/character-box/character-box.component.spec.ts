import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBoxComponent } from './character-box.component';

describe('CharacterBoxComponent', () => {
  let component: CharacterBoxComponent;
  let fixture: ComponentFixture<CharacterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
