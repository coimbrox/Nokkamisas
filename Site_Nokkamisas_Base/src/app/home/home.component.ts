import { Component, OnInit } from "@angular/core";

import { OfertasService } from "../services/ofertas.services";
import { Oferta } from "../models/oferta.model";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [OfertasService], //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];
  constructor(private ofertasService: OfertasService) {}

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas()
    // console.log(this.ofertas)
    this.ofertasService
      .getOfertas2()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      })
      .catch((param: any) => {
        console.log(param);
      });
  }
}
