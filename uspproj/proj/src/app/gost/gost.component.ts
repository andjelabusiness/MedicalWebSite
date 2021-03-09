import { Component, OnInit } from '@angular/core';
import { FunkcijeService } from '../funkcije.service';
import { Router } from '@angular/router';
import { Lek } from '../lek';
import { Bolest } from '../bolest';

@Component({
  selector: 'app-gost',
  templateUrl: './gost.component.html',
  styleUrls: ['./gost.component.css']
})
export class GostComponent implements OnInit {

  constructor(private service:FunkcijeService, private router:Router) { }

  ngOnInit(): void {
  
    this.service.dohvatiLekove().subscribe(data=>{this.lekovi=data;});
    
  }
 
  
  lekovi:Lek[]=[];
  lek:Lek;
  boles:Bolest[]=[];
  navigacija:number=0;


  gotolink(i:number){
    window.open(this.lekovi[i].link,"_blank");
  }


  bolesti(x:Lek){
    this.lek=x;
    this.service.dohvatiBolest(x).subscribe(data=>{this.boles=data;});
  }


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
        this.service.changePassword(this.novasif,"istrazivac");
        alert("Success");
        this.router.navigate(["/log"]);
      }
    });
  
  }


}
