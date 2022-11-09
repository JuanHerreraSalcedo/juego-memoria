const DOM = function(){
    // Publica... this.loquesea es accesible desde afuera de la funcion como VARIABLE.loquesea
    this.id = str => document.getElementById( str );
    this.query = selector => document.querySelector( selector);
    this.queryAll = selector => document.querySelectorAll( selector);
    this.create = (tag, attrs = { }) => Object.assign( document.createElement(tag), attrs );
    this.remove = element => {element.remove();}
    this.append = (hijo, padre = document.body)=> {
        (hijo instanceof Array ) ? 
        hijo.map( h => {padre.appendChild(h) } ) : 
        padre.appendChild(hijo);
    }
    // id = function( str ){ return document.getElementById( str );}
    // return 'holis';
    // nombre = function( ) { acciones }
    // function nombre(){ acciones }
}

// const d = new DOM();
// const datos = d.id( 'datos');
// //  console.log(datos);

//  const modal = d.create('div', {id: 'modal'});
//  const input1 = d.create( 'input', {
//     placeholder: 'Placeholder',
//     id: 'input1',
//     name: 'xxx',
//     tabIndex: 10,

//  });

//  const input2 = d.create( 'input', {
//     placeholder: 'Placeholder',
//     id: 'input2',
//     // name: 'xxx',
//     // tabIndex: 10,

//  });

//  const button = d.create('button',{
//     innerHTML: 'Jugar', onclick: fun
//  });
 
// console.log (input1);

//  modal.id = 'modal';
//  d.append([input1, input2, button], modal);
// //  d.append(input2, modal);
// //  d.append(button, modal);
// //  d.append(modal);