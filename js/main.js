const containerDom = document.querySelector('.container');
const bottoneDom = document.querySelector('#bottone');
const mainDom = document.querySelector('#main');
const footerDom = document.querySelector('#footer');


bottoneDom.addEventListener('click', function() {
    const numeroBombe = 16;
    const arrayBombe = [];
    let click = 0;
    let punteggioDom = document.getElementById('punteggio')

   while (arrayBombe.length < numeroBombe){
       let numeroCasuale = (Math.floor(Math.random() * 100 + 1));
       
       if (!arrayBombe.includes(numeroCasuale)){
           arrayBombe.push(numeroCasuale);
       }
   }
   console.log(arrayBombe);

    mainDom.classList.remove('d-none');
    footerDom.classList.remove('d-none');
    containerDom.innerHTML = '';
    punteggioDom.innerHTML = '';
    click='';
    mainDom.classList.remove('pointer');

    for (let i = 1; i <= 100; i++ ) {
        
        const quadratino = creazioneQuadrato(i);
        containerDom.append(quadratino);
        
        quadratino.addEventListener('click', function(event) {
            click++
            
            this.classList.toggle('cliccato');
            quadratino.classList.add('pointer');
            punteggioDom.innerHTML = `Il tuo punteggio è ${click}`;
            if(click == 84){
                punteggioDom.innerHTML = 'HAI VINTOOOO';
                mainDom.classList.add('pointer');
            }
            for (let x = 0; x < arrayBombe.length; x++){
                if (quadratino.textContent == arrayBombe[x]){
                    quadratino.classList.toggle('red');
                    punteggioDom.innerHTML = 'Hai perso';
                    console.log(quadratino.textContent);
                    mainDom.classList.add('pointer');
                    
                }
            }
        }
        );
        
    }
    
}
);

function creazioneQuadrato(numero) {
    const quadratino = document.createElement("div");
    quadratino.classList.add('square');
    quadratino.append(numero);
    return quadratino;
}

