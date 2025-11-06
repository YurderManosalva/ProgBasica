/*let age = parseInt(prompt("Ingrese edad"))

//<>

if(age >= 1 && age <= 13){
console.log("Niño")
}else if(age >= 14 && age <= 17){
console.log("adolecente")
}else if(age >= 18 && age <= 38){
console.log("Jovenes")
}else if(age >= 39 && age <= 59){
console.log("Adultos")
}else if(age >= 60){
console.log("Tecera edad")
}else {
console.log("Edad invalida")
}*/

let edad = parseInt(prompt("Ingrese edad"))
let estatura = parseInt(prompt("Ingrese estatura en centimetros"))

if(edad > 14 && estatura >= 100 ){
    Swal.fire({
        title: "Tiene la edad y la estatura",
        text: `Edad: ${edad}, Estatura: ${estatura}`,
        icon: "success"
      });
}else if (edad > 14 || estatura >= 100){
    Swal.fire({
        title: "Tiene la edad o la estatura",
        text: `Edad: ${edad}, Estatura: ${estatura}`,
        icon: "success"
      });
}else {
    Swal.fire({
        title: "No tiene la edad ni la estatura",
        text: `Edad: ${edad}, Estatura: ${estatura}`,
        icon: "error"
      });
}


