/**
    Crie uma lista de pacientes 

    Cada paciente dentro da lista feve´ra conter

        nome
        idade
        peso
        altura

    Escreva uma lista contendo o nome dos pacientes
 */

const patients = [
    {
        name: 'Luiz',
        age: 20,
        weight: 100,
        height: 190
    },

    {
        name: 'Alexandra',
        age: 27,
        weight: 70,
        height: 170
    },
    
    {
        name: 'Carlos',
        age: 42,
        weight: 90,
        height: 180
    }
]

let patientsInfo = [];


// opção 1
/*for(let i = 0; i < patients.length; i++){
    patientsNames[i] = patients[i].name;
}*/ 

//opção 2
for(let patient of patients){
    patientsInfo.push(patient.name);
    patientsInfo.push(patient.age);
    patientsInfo.push(patient.weight);
    patientsInfo.push(patient.height);

    alert(`O(a) paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e tem ${patient.height}cm de altura`);

}
