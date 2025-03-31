export class Empleado {
    _id?: number;
    nombre: string;
    puesto: string;
    fechaIngreso: Date;
    altaTalento: Date;
    aniosCumplidos: number;
    fechaNacimiento: Date;
    curp: string;
    nss: number;
    rfc: string;

    constructor(
        nombre: string,
        puesto: string,
        fechaIngreso: Date,
        altaTalento: Date,
        aniosCumplidos: number,
        fechaNacimiento: Date,
        curp: string,
        nss: number,
        rfc: string
    ) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.fechaIngreso = fechaIngreso;
        this.altaTalento = altaTalento;
        this.aniosCumplidos = aniosCumplidos;
        this.fechaNacimiento = fechaNacimiento;
        this.curp = curp;
        this.nss = nss;
        this.rfc = rfc;
    }
}
