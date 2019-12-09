import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolutiondetailsPage } from './solutiondetails.page';

describe('SolutiondetailsPage', () => {
  let component: SolutiondetailsPage;
  let fixture: ComponentFixture<SolutiondetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutiondetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolutiondetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
