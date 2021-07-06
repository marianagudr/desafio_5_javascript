class Filamento {
    constructor(nombre, diametro, color, peso, precio){
        this.nombre = nombre;
        this.diametro = diametro;
        this.color = color;
        this.peso = peso;
        this.precio = precio;
    }

    toString(){
        console.log(`Nombre del filamento: ${this.nombre}\nDiámetro (mm): ${this.diametro}\nColor: ${this.color}\nPeso de la Bobina (grs): ${this.peso}\nPrecio: $${this.precio}`);
    }
}

const nombre = prompt("Ingrese el Nombre del Filamento:");
const diametro = Number(prompt("Ingrese el diámetro del Filamento en mm:"));
const color = prompt("Ingrese el color del Filamento:");
const peso = Number(prompt("Ingrese el peso de la bobina de Filamento en grs:"));
const precio = Number(prompt("Ingrese el precio de la bobina de Filamento:"));
const filamento1 = new Filamento(nombre, diametro, color, peso, precio);

filamento1.toString();
