import * as myPackage from "./index";

console.log(myPackage.toInt("10"));

console.log(
  myPackage.objectToJson({
    name: "quero virar um json",
    sobrenome: "sou um json",
  })
);

console.log(
  myPackage.objectHaveEmptyValues({
    name: "daniel ",
    sobrenome: "",
  })
);
