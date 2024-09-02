function idenity<T, U, I>(valor: T, valor2:U, valor3: I): [T,U,I] {
    return [valor, valor2, valor3];
}

let monologo = idenity<string, number, string>(
    "Mi nombre es Kira Yoshikage, tengo",
    33,
    "años. Mi casa está en la sección noreste de Morioh, donde están todas villas, y no estoy casado. Trabajo como empleado de los grandes almacenes Kame Yu, y llego a casa todos los días a más tardar 8 p.m.. No fumo, pero ocasionalmente bebo. Estoy en la cama a las 11 de la noche y me aseguro de dormir ocho horas, pase lo que pase. Después de tomar un vaso de leche tibia y hacer unos veinte minutos de estiramientos antes de acostarme, generalmente no tengo problemas para dormir hasta la mañana. Al igual que un bebé, me levanto sin fatiga ni estrés por la mañana. Me dijeron que no había problemas en mi último chequeo. Estoy tratando de explicar que soy una persona que desea vivir una vida muy tranquila. Tengo cuidado de no molestarme con ningún enemigo, como ganar o perder, que me haría perder el sueño por la noche. Así es como trato con la sociedad, y sé que eso es lo que me trae felicidad. Aunque, si tuviera que pelear, no perdería con nadie."
);

console.log(monologo);