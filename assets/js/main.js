/* 
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva
BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede


*/

/// membri del team

const team = [      
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

  //stampare su console le informazioni di nome, ruolo e la stringa della foto
  // for in

let workersBoxElement = document.querySelector('.worker_cards');



// ciclo all'interno dell'Array

for (let i = 0; i < team.length; i++) {
    const workerProfile = team[i];
    console.log(`---- worker n°${i + 1} ----`);
    /// creo elemento Dom e aggiungo classe col e appendo a .workers_cards

    let workerElement = document.createElement('div')
    workerElement.classList.add("col")
    workersBoxElement.append(workerElement)




    let workerCardElement = document.createElement('div')
    workerCardElement.classList.add("col", `${i}_worker`, "card")
    workerElement.append(workerCardElement)

    // raggruppo tutto in delle card

    

    // ciclo all'interno dell'oggetto

    for (const key in workerProfile) {
        const workerCaratteristic = workerProfile[key];

        //console.log(workerCardElement);
        console.log(workerCaratteristic);
        //console.log(key);
        // seleziono nodo Dom attraveso classe e aggiungo caratteristiche

        if (key !== "image") {
            workerCardElement.insertAdjacentHTML("beforeend",`<p>${workerCaratteristic}</p>`)
            
        } else {
            workerCardElement.insertAdjacentHTML("afterbegin",`<img src="./assets/img/${workerCaratteristic}" >`)
        }
        
    }
    
}

// stampare le stesse informazioni su DOM sottoforma di stringhe

