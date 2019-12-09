import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MechanicsPage } from './mechanics.page';

describe('MechanicsPage', () => {
  let component: MechanicsPage;
  let fixture: ComponentFixture<MechanicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
