const Button = document.getElementById("btn") as HTMLButtonElement
const Skills = document.getElementById("skills") as HTMLElement

Button.addEventListener('click',()=>{
     if(Skills.style.display === 'none'){
        Skills.style.display = 'block'
     }else{
           Skills.style.display = 'none'
     }
})