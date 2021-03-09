import { Component, OnInit } from '@angular/core';
import { FunkcijeService } from '../funkcije.service';
import { Router } from '@angular/router';
import { Lek } from '../lek';
import { Bolest } from '../bolest';
import { Komentar } from '../komentar';

@Component({
  selector: 'app-bolesti',
  templateUrl: './bolesti.component.html',
  styleUrls: ['./bolesti.component.css']
})
export class BolestiComponent implements OnInit {

  constructor(private service:FunkcijeService, private router:Router) { }

  ngOnInit(): void {
  
    this.service.dohvatiBolesti().subscribe(data=>{this.bolesti=data;});
    
  }
 
  
  lekovi:Lek[]=[];
  bolest:Bolest;
  bolesti:Bolest[]=[];
  navigacija:number=0;

  kom:Komentar;
  koms:Komentar[]=[];


  

  uzmilekove(x:Bolest){
    this.bolest=x;
   
    this.service.dohvatiLekzabolest(x).subscribe(data=>{this.lekovi=data;});
  }


  
  

}
