// const nuevoP = document.createElement('p')

// /*
// <div id="modal">
//     <div>
//     <input id="player1" placeholder="nombre del jugador1">
//     <input id="player2" placeholder="nombre del jugador2">

//     <button>Empezar juego</button>
//     </div>
// </div>
// */

// // crear el modal:
// const modal = document.createElement('div');
// modal.id = 'modal';

// // crear el submodal:
// const submodal = document.createElement('div');
// // crear el input1:
// const input1 = document.createElement('input');
// input1.placeholder = "Nombre del jugador 1";
// // crear el input2:
// const input2 = document.createElement('input');
// input2.placeholder = "Nombre del jugador 2"
// // crear el boton:
// const boton = document.createElement('button');
// boton.innerHTML = 'Empezar juego';
// boton.addEventListener('click', e => {
//     modal.remove();
//     document.body.classList.remove('noscroll');
// });




// submodal.appendChild( input1 );
// submodal.appendChild( input2 );
// submodal.appendChild( boton );

// modal.appendChild(submodal);

// document.body.appendChild(modal);
// document.body.classList.add('noscroll');

const d = new DOM();
let active = true;
let flipped = '';
let cantCartas = 6;
let imgs = [];
for(let i =1; i<= cantCartas; i++){
    imgs.push(`img${i}.png`);
    imgs.push(`img${i}.png`);
}

imgs = imgs.sort(function(){
    return Math.random() - 0.5;
})
// console.log(imgs);

const tablero = d.query('main ul');
imgs.forEach( i =>{
    const li = d.create('li', {onclick: () =>{
        if(! active) return;
        if( li.classList.contains('fija')) return;

        active = false;
        li.classList.add('seleccionado');
        if( flipped === ''){
            // Esto significa que le di vuelta a la primera carta
            flipped = i;
            active = true;
        }else{
            //Esto significa que le di vuelta la segunda carta
            const acerto = flipped == i;
            if( acerto ){
                // console.log( 'acertaste' );
                li.classList.replace('seleccionado','fija');
                d.query('.seleccionado').classList.replace('seleccionado','fija');
                active = true;
            }else{
                // console.log( 'no acertaste' );
                setTimeout( function(){
                    li.classList.remove('seleccionado');
                    d.query('.seleccionado').classList.remove('seleccionado');

                    active = true;
                },
                2000
                )
            }

            flipper = '';


            // alert('dos cartas dadas vuelta');
        }
    }});
    const img1 = d.create('img', { src: 'img/ffviir.jpg'});
    const img2 = d.create('img', { src: `img/${i}`});
    d.append([img1, img2], li);
    d.append(li, tablero);
});