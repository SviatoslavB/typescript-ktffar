import { Dreieck } from './Dreieck';
import { Kreis } from './Kreis';
import { Rechteck } from './Rechteck';

let kreis: Kreis;
let rechteck: Rechteck;

export abstract class Form {
  farbe: String;

  constructor(farbe: String) {
    this.farbe = farbe;
  }

  berechneFlaeche(): number {
    return 0;
  }
}
const weissesKreis = new Kreis('weis', 4);
const grünesRechteck = new Rechteck('grün', 6, 8);
const orangesDreieck = new Dreieck('orange', 6, 5);

console.log('Fläche des weißes Kreises', weissesKreis.berechneFlaeche(), weissesKreis.toString());
console.log('Fläche des grünes Rechtecks', grünesRechteck.berechneFlaeche(), grünesRechteck.toString());
console.log('Fläche des oranges Dreieck', orangesDreieck.berechneFlaeche(), orangesDreieck.toString());