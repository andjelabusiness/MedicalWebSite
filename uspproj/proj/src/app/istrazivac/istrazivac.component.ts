import { Component, OnInit } from '@angular/core';
import { Lek } from '../lek';
import { FunkcijeService } from '../funkcije.service';
import { Bolest } from '../bolest';
import { Router } from '@angular/router';
import { Detalji } from '../detalji';
import { Komentar } from '../komentar';

@Component({
  selector: 'app-istrazivac',
  templateUrl: './istrazivac.component.html',
  styleUrls: ['./istrazivac.component.css']
})
export class IstrazivacComponent implements OnInit {

  constructor(private service:FunkcijeService, private router:Router) { }

  ngOnInit(): void {
  
    this.service.dohvatiLekove().subscribe(data=>{this.lekovi=data;});
    
  }
 
  
  lekovi:Lek[]=[];
  lek:Lek;
  boles:Bolest[]=[];
  navigacija:number=0;

  kom:Komentar;
  koms:Komentar[]=[];


  gotolink(i:number){
    window.open(this.lekovi[i].link,"_blank");
  }


  bolesti(x:Lek){
    this.lek=x;
    this.detalji=false;
    this.bulkom=false;
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
  detalji:boolean=false;
  bulkom:boolean=false;
  tekst:string;

  det:Detalji[];
  detalj:Detalji;
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

  opendet(x:Lek){
     this.lek=x;
     this.detalji=true;
     this.service.getKomentari(x.id).subscribe(data=>{this.koms=data;});

  }

  dodajkom(){
    this.bulkom=true;

  }

  novikom(){
    this.service.noviKomentar(this.tekst,this.lek.id).subscribe(data=>{this.koms=data;});

  }




}
