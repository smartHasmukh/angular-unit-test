import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from './services/user.service';
import { UserModel } from './user.model';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let userService: UserService;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [HttpClientModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the users', () => {
    component.ngOnInit();
    const userResponse: UserModel = {
      id: 2,
      name: 'Bob',
    };
    let response;
    spyOn(userService, 'getUserApi').and.returnValue(of(userResponse));

    userService.getUserApi().subscribe(res => {
      response = res;
    });
    expect(response).toEqual(userResponse);
  });

  it('button status check', () => {
    component.enableFlag = true;
    // component.flag = false;
    const btn1 = fixture.debugElement.query(By.css('#btn1'));
    const btn2 = fixture.debugElement.query(By.css('#btn1'));
    expect(btn1).toBeFalsy();
    component.clickEventHandler();
    fixture.detectChanges();
    const btn11 = fixture.debugElement.query(By.css('#btn1'));
    expect(btn11).toBeTruthy();
  });
});
