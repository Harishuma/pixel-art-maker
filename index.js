//document.body.innerHTML = "Hello world!";

const Container= document.createElement('div');
Container.className = 'MainDiv';

document.body.appendChild(Container);

for(let i=0;i<=10000;i++){
    const col=document.createElement('div');
    col.className='column';
    col.addEventListener('click',()=>{
        col.style.backgroundColor='red';
    })
    Container.appendChild(col);
}

const palette=document.createElement('div');
palette.className='redcolorPalette';
palette.addEventListener('click', ()=>{
    palette.style.backgroundColor='red';
})
document.body.appendChild(palette);

const palette2=document.createElement('div');
palette2.className='bluecolorPalette';
palette2.addEventListener('click', ()=>{
    palette2.style.backgroundColor='blue';
})
document.body.appendChild(palette2);