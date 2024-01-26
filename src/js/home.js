
let width = window.innerWidth;


const nav = document.querySelector('nav ul');
const button = document.querySelector('.menu-toogle input');

button.addEventListener('click', ()=>{
    nav.classList.toggle('slide') 
})


// menu dropdown

const profile = document.getElementById('dropdown')
const dropdown_content = document.querySelector('.dropdown-content')
const left_icon = document.querySelector('.left-icon')
const right_icon = document.querySelector('.right-icon')
const mobile_dropdown = document.getElementsByClassName('mobile_dropdown')

const mobile_dropdown_content = document.getElementById('dropdown-content');





profile.addEventListener('click', ()=>{
        
    if(width<=896){
        mobile_dropdown_content.classList.toggle('dropdown-content')  
        mobile_dropdown_content.classList.toggle('mobile-dropdown-content')
        profile.classList.toggle('mobile_dropdown')
    }
    else{
        profile.classList.toggle('profile')
        dropdown_content.classList.toggle('profile')
        right_icon.classList.toggle('active')
        left_icon.classList.toggle('active')
    }

})




// const dropdown = document.querySelector('.dropdown');

// dropdown.addEventListener('click', () => {
//     dropdown.classList.toggle('active');
// });