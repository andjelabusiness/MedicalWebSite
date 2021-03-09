import { Component, OnInit } from '@angular/core';

import { Korisnik } from '../korisnik';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FunkcijeService } from '../funkcije.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:FunkcijeService,private router:Router) { }

  ngOnInit(): void {
  
   
    this.ok=this.service.getAdmin(); 
    this.ok.subscribe(data=>{this.koris=data ;});
    if(this.koris==null){this.koris=[]};
  }

  koris: Korisnik[];
 
 
  ok:Observable<Korisnik[]>;
  t:string;
  tip: string;

  ime: string = "";
  prezime: string = "";
  username: string = "";
  sifra1: string = "";
  sifra2: string = "";
  mesto: string = "";
  mail: string = "";
  telefon: string = "";
  bolnica: string = "";
  k: Korisnik;


 
 obrisi(kor:Korisnik){
  this.service.obrisiKorisnika(kor);
  this.refresh();
 } 
 registruj() {
  let provera = /.{8,}/;


  if (!provera.test(this.sifra1) || this.sifra1 != this.sifra2) {
    alert("Sifra mora biti duza od 8 karaktera!");


  }

  this.k = { username: this.username, password: this.sifra1, tip: "istrazivac", bolnica:this.bolnica };

  this.service.proveriKorisnika(this.k.username).subscribe(data => {
    if (data.length != 0) { alert("Korisnicko ime ves postoji!"); return; }
    else {
      this.service.ubaciKorisnika(this.username, this.sifra1, this.mesto, this.bolnica).subscribe(data => { alert("Uspesno ste se registrovali!"); this.router.navigate(["/log"]); });
    }
  });


this.refresh();
}
refresh(){
  
  
  this.ok=this.service.getAdmin(); 
  this.ok.subscribe(data=>{this.koris=data ;});
  if(this.koris==null){this.koris=[]};
}
navigacija:number=0;
promenisifru(){
  this.navigacija=1;
}
glavni(){
    this.navigacija=0;
}
starasif:string;
novasif:string;
opetsif:string;
passchange(){
  let provera=/.{8,}/;
 
if(this.starasif==this.novasif){
  alert("Stara i nova sifra ne mogu biti iste!");
  return;
}
 if( !(provera.test(this.novasif))){
    alert("Unesite ponovo sifre!");
   return;
  }
  alert(this.starasif);
  alert(this.novasif);
  
  this.service.getKorisnik("admin",this.starasif).subscribe(data=>{
    if(data.length==0){
      alert("Pogresna sifra!");return;
    }
    else{
      this.service.changePassword(this.novasif,"admin");
      alert("Success");
      this.router.navigate(["/log"]);
    }
  });

}
}
