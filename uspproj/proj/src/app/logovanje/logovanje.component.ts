import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunkcijeService } from '../funkcije.service';
import { Korisnik } from '../korisnik';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {

  constructor(private router:Router, private service:FunkcijeService) { }

  ngOnInit(): void {

    localStorage.clear();
  }

  

  

  koris: Korisnik[];
  username: string;
  sifra: string;
  k:Observable<Korisnik[]>;
  k2:Korisnik[]=[];
  kor1:Korisnik
  

  uloguj(){
    
    
    
    
    this.k=this.service.getKorisnik(this.username, this.sifra); //.subscribe(k=>{this.k2=k;console.log("aa"+JSON.stringify(this.k2[0].username));}); ovo umesto donjeg dela moze
    this.k.subscribe(data=>{this.k2=data ;this.k2.forEach(element => {
      if(element.tip=="admin"){
        this.router.navigate(["/admin"]);
      
      }
      else if(element.tip=="istrazivac"){
        this.router.navigate(["/istrazivac"]);
      
      }
      
      console.log(element.username);
    });});

    
    let kor1={username:this.username, password:this.sifra};
    
      localStorage.setItem("kor", JSON.stringify(kor1));
    
   
    console.log("ulogovao");


    
    
  }

}
