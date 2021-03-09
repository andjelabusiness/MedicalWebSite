import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunkcijeService } from '../funkcije.service';
import { Korisnik } from '../korisnik';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  constructor(private router: Router, private service: FunkcijeService) { }

  ngOnInit(): void {
  }

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
  t: string;




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






  }

}
