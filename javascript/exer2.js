let idade = 19;

if (idade >= 21) {
  console.log("Pode Dirigir.");
} else {
  console.log("Não Pode Dirigir.");
}


let nota = 8;

if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Aprovado!");
} else if (nota >= 5) {
  console.log("Recuperação!");
} else {
  console.log("Reprovado!");
}


let dia = "Segunda";

switch (dia) {
  case "Domingo":
    console.log("Dia dísponivel no Domingo.");
    break;
  case "Segunda":
    console.log("Dia dísponivel na Segunda-Feira.");
    break;
  case "terça":
    console.log("Dia dísponivel na Terça-Feira.");
    break;
  case "sábado":
    console.log("Dia dísponivel no Sábado.")
  default:
    console.log("Dia não disponível.");
}


let bolsafamilia = 12;

if (bolsafamilia >= 18) {
  console.log("Não pode receber");
} else if (bolsafamilia >= 60) {
  console.log("INSS");
} else if (bolsafamilia >= 12) {
  console.log("Pode receber");
} else {
  console.log("Criança");
}


let idade2 = 29;

if (idade2 <= 12) {
  console.log("Criança");
} else if (idade2 >= 12 && idade2 <18 ) {
  console.log("Adolescente");
} else if (idade2 >= 18 && idade2 <59) {
  console.log("Adulto");
}  else if (idade2 >= 60)
  console.log("Idoso")