import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Korisnik } from '../korisnik';
import { FunkcijeService } from '../funkcije.service';


@Component({
  selector: 'app-azuriranje',
  templateUrl: './azuriranje.component.html',
  styleUrls: ['./azuriranje.component.css']
})
export class AzuriranjeComponent implements OnInit {

  constructor(private router:Router, private service:FunkcijeService) {}
username:string;
  ngOnInit(): void {
    this.ok=this.service.getAdmin(); 
    this.ok.subscribe(data=>{this.koris=data ;});
    if(this.koris==null){this.koris=[]};
  }
  ok:Observable<Korisnik[]>;
  koris:Korisnik[]=[];
  izabran:string='';
  trenutni:Korisnik;
 
  dohvati(k:Korisnik){
   this.trenutni=k;
   
    
  }
  azuriraj(){
    this.service.azuriraj(this.trenutni);
  }
 
  
}

