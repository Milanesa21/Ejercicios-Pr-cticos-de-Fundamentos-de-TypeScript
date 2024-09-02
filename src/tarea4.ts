interface Persona {
    FirstName: string;
    LastName?: string;
}

let Persona : Persona = {
    FirstName: 'Diego',
}

console.log(`Mi nombre es ${Persona.FirstName} pero mi apellido es ${Persona.LastName}`)