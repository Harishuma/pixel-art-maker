//document.body.innerHTML = "Hello world!";

const Container= document.createElement('div');
Container.className = 'MainDiv';
document.body.appendChild(Container);
let color='white';

for(let i=0;i<=10000;i++){
    const col=document.createElement('div');
    col.className='column';
    col.addEventListener('click',()=>{
        col.style.backgroundColor=color;
    })
    Container.appendChild(col);
}

const colors = ['red', 'blue', 'green', 'brown', 'pink', 'grey', 'yellow', 'black','ghostwhite'];
for (let col of colors){
    const palette=document.createElement('div');
    palette.className='coloredPalette';
    palette.style.backgroundColor=col;
    palette.addEventListener('click',()=>{
        color=col;
    })
    Container.appendChild(palette);
    }

const curcol=document.createElement('div');
curcol.className='currentColor';
curcol.innerHTML='Current Color';
curcol.style.backgroundColor=color;
document.body.appendChild(curcol);

// const palette=document.createElement('div');
// palette.className='redcolorPalette';
// palette.addEventListener('click', ()=>{
//     color='red';
// })
// Container.appendChild(palette);
//
// const palette2=document.createElement('div');
// palette2.className='bluecolorPalette';
// palette2.addEventListener('click', ()=>{
//     color='blue';
// })
// Container.appendChild(palette2);
//
