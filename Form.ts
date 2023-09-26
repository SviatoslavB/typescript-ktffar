import { Dreieck } from './Dreieck';
import { Kreis } from './Kreis';
import { Rechteck } from './Rechteck';

//let kreis: Kreis;
//let rechteck: Rechteck;

//export dammit es auserhalb verfügbar ist
export  abstract class Form {
  farbe: String;

  constructor(farbe: String) {
    this.farbe = farbe;
  }

  berechneFlaeche(): number {
    return 0;
  }
}
