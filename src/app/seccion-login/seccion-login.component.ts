import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-seccion-login',
  templateUrl: './seccion-login.component.html',
  styleUrls: ['./seccion-login.component.css']
})
export class SeccionLoginComponent implements OnInit {

  isLogged = false;
 

  constructor(private tokenService: TokenService,private router: Router) { 
    
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
   
   // window.location.reload();
   this.router.navigate(['/login']);
    
  }





}
