import { Form } from "./Form";

export class Rechteck extends Form{

  _breite: number;
  _hohe: number;

  constructor (farbe: String, _breite: number, _hohe: number){
    super(farbe);
    this._breite=_breite;
    this._hohe=_hohe;
  }

  berechneFlaeche(): number{
    return this._breite*this._hohe;
  }

  toString(): string {
    let text: string = '\n\nRECHTECK';
    text += super.toString();
    text += '\n_breite: ' + this._breite;
    text += '\n_hohe: ' + this._hohe;
    return text;
  }
}