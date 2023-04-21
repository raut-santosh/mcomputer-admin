import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcontentComponent } from './webcontent.component';

describe('WebcontentComponent', () => {
  let component: WebcontentComponent;
  let fixture: ComponentFixture<WebcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
