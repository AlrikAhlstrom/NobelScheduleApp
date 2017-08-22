import { FirebaseService } from './../../services/firebase.service';
import { AuthenticationService } from './../../services/authentication.service';
import { AngularFire } from 'angularfire2';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {NgbModule, NgbCollapse, NgbDropdown} from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin: boolean;
  isGuide: boolean;
  isEmployee: boolean;
  displayName: string;
  initDisplayName: string;

  isCollapsed = true;
  isCollapsed2 = true;
  smallDevice = false;

  constructor(
    public af: AngularFire,
    private firebaseService: FirebaseService,
    private authService: AuthenticationService,
    public flashMessage: FlashMessagesService,
    private router: Router
    
    ) {
 
      this.isAdmin = false;
       
    }

     ngOnInit() {
    if(window.innerWidth < 800 ) {
      this.isCollapsed = false;
      this.smallDevice = true;
    }
    
    
     this.initDisplayName = '';

     this.isAdmin = false;
     this.displayName = '';
     this.initDisplayName = '';
         
  }

  ngDoCheck(){


 let user = this.authService.getUser();
 
    if(user.hasOwnProperty('isAdmin')) {
      user.isAdmin === "true" ? this.isAdmin = true : this.isAdmin = false;
      user.isGuide === "true" ? this.isGuide = true : this.isGuide = false;
      user.isEmployee === "true" ? this.isEmployee = true : this.isEmployee = false;
      this.displayName = user.displayName;

      
    }
    
  }


 

  collapse() {
    if (window.innerWidth > 800) {
      this.isCollapsed = true
    } else {
      this.isCollapsed ? this.isCollapsed = false : this.isCollapsed = true;
    }
  }

  collapse2() {
      this.isCollapsed2 ? this.isCollapsed2 = false : this.isCollapsed2 = true;
  }

  login() {
    this.authService.authUser();
  }

  logout() {
    this.authService.logOut();
  }

}
