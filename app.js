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

// scanicon hide and hover

let secondnavimg = document.querySelector('.secondnavimg');
let scanicon = document.querySelector('.scanicon')


secondnavimg.addEventListener('mouseover',()=>{
    scanicon.classList.remove('scanNone')
})
secondnavimg.addEventListener('mouseout',()=>{
    scanicon.classList.add('scanNone')

})
//near scanicon mouseover then it show two more icons 
let scanicona = document.querySelector('.imgicon')
let scaniconb = document.querySelector('.doticon')

scanicon.addEventListener('mouseover',()=>{
    scanicona.classList.remove('scanNone')
})
scanicon.addEventListener('mouseout',()=>{
    scanicona.classList.add('scanNone')

})
scanicon.addEventListener('mouseover',()=>{
    scaniconb.classList.remove('scanNone')
})
scanicon.addEventListener('mouseout',()=>{
    scaniconb.classList.add('scanNone')

})

// hyderabad