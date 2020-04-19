import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStepperComponent } from './post-stepper.component';

describe('PostStepperComponent', () => {
  let component: PostStepperComponent;
  let fixture: ComponentFixture<PostStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
