import { Oferta } from "../models/oferta.model";
export class OfertasService {
  public ofertas: Array<Oferta> = [
    {
      id: 1,
      categoria: "Seleção",
      titulo: "Camisa do Brasil",
      descricao_oferta: "Camisa do Brasil Copa América 2020",
      anunciante: "NOKKAMISAS",
      valor: 100.0,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/1/img1.jpeg" },
        { url: "/assets/ofertas/1/img2.jpeg" },
        { url: "/assets/ofertas/1/img3.jpeg" },
        { url: "/assets/ofertas/1/img4.jpeg" },
      ],
    },
    {
      id: 2,
      categoria: "times",
      titulo: "Camisa PSG 3",
      descricao_oferta: "Camisa psg rainbow.",
      anunciante: "NOKKAMISAS",
      valor: 99.9,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/2/img1.jpeg" },
        // { url: "/assets/ofertas/2/img2.jpg" },
        // { url: "/assets/ofertas/2/img3.jpg" },
        // { url: "/assets/ofertas/2/img4.jpg" },
      ],
    },
    {
      id: 3,
      categoria: "retrô",
      titulo: "Camisa Real Madrid Retrô",
      descricao_oferta: "Camisa Real Madrid Retrô",
      anunciante: "NOKKAMISAS",
      valor: 119.99,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/3/img1.jpeg" },
        // { url: "/assets/ofertas/3/img2.jpg" },
        // { url: "/assets/ofertas/3/img3.jpg" },
        // { url: "/assets/ofertas/3/img4.jpg" },
        // { url: "/assets/ofertas/3/img5.jpg" },
        // { url: "/assets/ofertas/3/img6.jpg" },
      ],
    },
  ];
  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }

  public getOfertas2(): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {
      let sucsess = true;
      if (sucsess) {
        resolve(this.ofertas);
      } else {
        reject({ error: 404, msg: "Servidor Não Encontrado" });
      }
    });
  }
}
