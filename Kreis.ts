import { Form } from "./Form";

export class Kreis extends Form{

  _radius: number;

  constructor (farbe: String, _radius: number){
    super(farbe);
    this._radius=_radius;
  }

  berechneFlaeche(): number{
    return Math.PI * this._radius**2;
  }

  toString(): string {
    let text: string = '\n\nKREIS';
    text += super.toString();
    text += '\n_radius: ' + this._radius;
    return text;
  }
}