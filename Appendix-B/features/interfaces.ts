interface Reportable {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = ({ name, year, broken }: Reportable): void => {
  console.log(`
        Name: ${name}
        Year: ${year}
        Broken? ${broken}
    `);
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

printVehicle(oldCivic);
