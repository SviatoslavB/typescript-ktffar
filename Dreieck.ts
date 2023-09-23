import { Form } from "./Form";

export class Dreieck extends Form{

  _laenge: number;
  _hohe: number;

  constructor (farbe: String, _laenge: number, _hohe: number){
    super(farbe);
    this._laenge=_laenge;
    this._hohe=_hohe;
  }

  berechneFlaeche(): number{
    return 0.5*this._laenge*this._hohe;
  }

  toString(): string {
    let text: string = '\n\nDREIECK';
    text += super.toString();
    text += '\n_laenge: ' + this._laenge;
    text += '\n_hohe: ' + this._hohe;
    return text;
  }
}