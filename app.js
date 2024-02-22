let precise_location_hidebox = document.querySelector('.precise_location_hidebox');
let setup = document.querySelector('.setup');

setup.addEventListener('click',()=>{
    console.log("thoe hideing part");
    
    precise_location_hidebox.classList.remove('none');

})


let search_hide_box = document.querySelector('.search_hide_box');
let search = document.querySelector('.search');
search.addEventListener('click',()=>{
    console.log("this is searchber clickes");
    search_hide_box.classList.remove('searchnone');
})

let arrow_icon = document.querySelector('.arrow_icon');
arrow_icon.addEventListener('click',()=>{
    search_hide_box.classList.add('searchnone');

})

