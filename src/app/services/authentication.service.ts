import { async } from '@angular/core/testing';
import { EmployeesService } from './employees.service';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import * as Rx from "rxjs/Rx";
import "rxjs/add/operator/take";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/first";

@Injectable()
export class AuthenticationService {

user: {email: string, firstName: string, displayName: string, isAdmin: string, isGuide: string, isEmployee: string, uid: string};

userObject: {
  email: string, 
  firstName: string, 
  displayName: string, 
  isAdmin: boolean, 
  isGuide: boolean, 
  isEmployee: boolean, 
  uid: string};


employees: any[];
testObj: any;

  constructor(
    public af: AngularFire,
    private employeesService: EmployeesService,
    private router: Router,

  ) {
    this.employeesService.getEmployees().subscribe( employees => {
      this.employees = employees;
    }).unsubscribe();

    }

  login(){
    console.log('logging in');
    
    let user = {email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: ''};  
      
    this.af.auth.login().then( auth => {
      this.employees.forEach(emp => {

        
        if(emp.emails.indexOf(auth.auth.email) !== -1) {

          user.displayName = auth.auth.displayName;
            user.email = auth.auth.email;
            user.firstName = emp.firstName;
            user.isAdmin = emp.admin;
            user.isGuide = emp.tourReady;
            user.isEmployee = "true"; 
            user.uid = emp.$key;

            localStorage.setItem('user', JSON.stringify(user));

        }
      });

    });

  }


   login2() {
 /*     this.af.auth.login().then(() => {
       //this.authenticateUser();
        
        console.log('logging in');
        console.log(this.user);
        
        
       this.router.navigate(['/']);
        window.location.reload();
      }); */
      let user = {email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: ''};  
      this.af.auth.login().then( auth => {

        
        
        this.employeesService.getEmployees().subscribe( employees => {
          //this.employees = employees;
            employees.forEach(emp => {
     
            

              if(emp.email === auth.auth.email) {
            
            
            user.displayName = auth.auth.displayName;
            user.email = auth.auth.email;
            user.firstName = emp.firstName;
            user.isAdmin = emp.admin;
            user.isGuide = emp.tourReady;
            user.isEmployee = "true"; 
            user.uid = emp.$key;

            localStorage.setItem('user', JSON.stringify(user));

            }
           return this.user;
            })
            
          })
         /*  this.employees.forEach(emp => {
            console.log('looping emps');
           
            if(emp.email === auth.auth.email) {
              console.log('email found');
            
            user.displayName = auth.auth.displayName;
            user.email = auth.auth.email;
            user.firstName = emp.firstName;
            user.isAdmin = emp.admin;
            user.isGuide = emp.tourReady;
            user.isEmployee = "true"; 
            user.uid = emp.$key;


            localStorage.setItem('user', JSON.stringify(user));
    
              this.router.navigate(['/']);
             window.location.reload(); 

              return user;
            
            }
          }) 
       })*/
      })
// try map

   }
  

   logOut() {

     this.af.auth.logout().then(() => {
       this.clearUser();
        this.router.navigate(['/']);
       window.location.reload();
    });

   }

   clearUser() {
     this.user = {email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: ''};

    localStorage.setItem('user', JSON.stringify(this.user));
   }

   getUser() {
  

    
    
    if(JSON.parse(localStorage.getItem('user')) == null) {

      this.user = {email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: ''};
      localStorage.setItem('user', JSON.stringify(this.user));
      return JSON.parse(localStorage.getItem('user'));
    } else {
      return JSON.parse(localStorage.getItem('user'));
    }

   }

   getUserObject(){
   
     
     this.af.auth.subscribe( auth => {
      
       
       this.employeesService.getEmployees().subscribe( employees => {
         employees.forEach( emp => {
         if (emp.email === auth.google.email) {
           this.userObject = emp;
         }
       })
     })
       })

    
     return this.userObject;
   }

  authUser() {
     let user = {email: '', firstName: '', displayName: '', isAdmin: "false", isGuide: "false", isEmployee: "false", uid: ''};

    this.af.auth.login().then( () => {

    let x = this.employeesService.getEmployees().subscribe( employees => {
      this.employees = employees;
      this.af.auth.subscribe(auth => {
        this.employees.forEach(emp => {
          
          if(emp.emails.indexOf(auth.auth.email) !== -1) {

            user.displayName = auth.google.displayName;
            user.email = auth.google.email;
            user.firstName = emp.firstName;
            user.isAdmin = emp.admin;
            user.isGuide = emp.tourReady;
            user.isEmployee = "true"; 
            user.uid = emp.$key;
          
            localStorage.setItem('user', JSON.stringify(user));
            this.userObject = emp;
          }
        })
      })


    })

    });

    return user;
    
  }

 /*  authenticateUser() {
    this.af.auth.subscribe((auth) => {
      
     const adminList = [
        'laura.aronovici@nobelmuseum.se', 
        'anders.gerhardsson@nobelmuseum.se',
        'alrik.mattias.ahlstrom@gmail.com',
        'anders.e.gerhardsson@gmail.com'
        ];

     const guideList = [
       'jianqiang.wei@nobelmuseum.se',
       'peter.balas@nobelmuseum.se',
       'ann-kristine.werme@nobelmuseum.se',
       'laura.aronovici@nobelmuseum.se',
       'pia.johansson@nobelmuseum.se',
       'felix.rosen@nobelmuseum.se',
       'asa.husberg@nobelmuseum.se',
       'olof.somell@nobelmuseum.se',
       'anders.gerhardsson@nobelmuseum.se',
       'anna.johanna.lindqvist.forsberg@nobelmuseum.se',
       'kajsa.hammarstrom@nobelmuseum.se',
       'filip.carl.johansson@nobelmuseum.se',
       'alrik.mattias.ahlstrom@gmail.com',
       'maria.stuge@nobelmuseum.se',
       'margrit.wettstein@nobelmuseum.se',
       'katarina.birath@nobelmuseum.se',
       'simon.gotling@nobelmuseum.se',
       'claudia.velhas@nobelmuseum.se',
       'milena.davila@nobelmuseum.se',
       'alrik.mattias.ahlstrom@gmail.com',
       'ann-kristine.werme@nobelmuseum.se'
 
     ]
     const employeeList = [
      'ebba.holmberg@nobelmuseum.se',
      'ayumi.vibenius@nobelmuseum.se',
      'pia.johansson@nobelmuseum.se',
      'olof.somell@nobelmuseum.se',
      'kajsa.hammarstrom@nobelmuseum.se',
      'peter.balas@nobelmuseum.se',
      'helena.stappe@nobelmuseum',
      'sabina.schonherr@nobelmuseum.se',
      'yuka.lundstedt@nobelmuseum.se',
      'felix.rosen@nobelmuseum.se',
      'anders.gerhardsson@nobelmuseum.se',
      'laura.aronovici@nobelmuseum.se',
      'anders.e.gerhardsson@gmail.com',
      'maria.stuge@nobelmuseum.se',
      'xiaoxia.wang@nobelmuseum.se',
      'martha.bojassen@nobelmum.se',
      'jianqiang.wei@nobelmuseum.se',
      'juanjo.hervias@nobelmuseum.se',
      'anna.blix@nobelmuseum.se',
      'alrik.mattias.ahlstrom@gmail.com',
      'milena.davila@nobelmuseum',
      'asa.husberg@nobelmuseum.se',
      'claudia.velhas@nobelmuseum.se',
      'andreas.lundin@nobelmuseum.se',
      'simon.gotling@nobelmuseum.se',
      'filip.carl.johansson@nobelmuseum.se',
      'anna.johanna.lindqvist.forsberg@nobelmuseum.se',
      'katarina.birath@nobelmuseum.se',
      'helena.martinsson@nobelmuseum.se',
      'sara.lidbaum@nobelmuseum.se',
      'bokning@nobelmuseum.se'
     ]
     if(auth) {
        adminList.indexOf('auth.google.email') ? this.user.isAdmin = true : this.user.isAdmin = false;
        guideList.indexOf('auth.google.email') ? this.user.isGuide = true : this.user.isGuide = false;
        employeeList.indexOf('auth.google.email') ? this.user.isEmployee = true : this.user.isEmployee = false;
        this.user.email = auth.google.email;
        this.user.displayName = auth.google.displayName;
        this.user.uid = auth.uid;
     };
      localStorage.setItem('user', JSON.stringify(this.user));
    });
    
    
    } */
}
