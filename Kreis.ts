import { Form } from "./Form";

export class Kreis extends Form{

  _radius: number;

  constructor (farbe: String, _radius: number){
    super(farbe);
    this._radius=_radius;
  }

}