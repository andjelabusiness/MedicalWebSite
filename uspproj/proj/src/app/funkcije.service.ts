import { Injectable, SystemJsNgModuleLoaderConfig } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Korisnik } from './korisnik';
import { Lek } from './lek';
import { Bolest } from './bolest';
import { Komentar } from './komentar';

@Injectable({
  providedIn: 'root'
})
export class FunkcijeService {

  constructor(private http: HttpClient) { }


  getKorisnik (u: string, s:string) {
    return this.http.get<Korisnik[]>('http://localhost:3000/get'+"/"+u+"/"+s);
  }

  ubaciKorisnika (u: string, s:string,m:string,b:string) {
    return this.http.get<Korisnik[]>('http://localhost:3000/uk'+"/"+u+"/"+s+"/"+m+"/"+b);
  }


  proveriKorisnika (u: string) {
    return this.http.get<String[]>('http://localhost:3000/proveri'+"/"+u);
  }

  getAdmin () {
    return this.http.get<Korisnik[]>('http://localhost:3000/admin');
  }

  changePassword (s:string, u:string) {
    alert("servis");
    this.http.get('http://localhost:3000/promenisifru'+"/"+u+"/"+s).subscribe();
  }

  obrisiKorisnika(kor: Korisnik) {
    this.http.get('http://localhost:3000/delete' + "/user/" + kor.username).subscribe();
  }

  azuriraj(kor: Korisnik) {
    this.http.get('http://localhost:3000/azuriraj/' + kor.username+"/"+kor.bolnica).subscribe();
  }


  dohvatiLekove() {
    return this.http.get<Lek[]>('http://localhost:3000/lekovi');
  }

  dohvatiBolest(x:Lek) {
    return this.http.get<Bolest[]>('http://localhost:3000/bolesti/'+x.id);
  }

  getKomentari(x:number) {
    return this.http.get<Komentar[]>('http://localhost:3000/komentari/'+x);
  }


  noviKomentar(x:string,lek:number) {
    return this.http.get<Komentar[]>('http://localhost:3000/novikom/'+x+"/"+lek);
  }

  dohvatiBolesti() {
    return this.http.get<Bolest[]>('http://localhost:3000/visebolesti');
  }


  dohvatiLekzabolest(b:Bolest) {
    return this.http.get<Lek[]>('http://localhost:3000/lekzabol/'+b.id);
  }

  
  
 



}
