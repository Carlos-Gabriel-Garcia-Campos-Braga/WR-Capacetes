//Filtro Lateral

const rangeFilter = document.getElementById('rangeFilter');
const maxMin = document.getElementById('min-max');

rangeFilter.addEventListener('input', 
    function()
        {   
            let value = this.value;
            maxMin.textContent = 'R$ 5 - R$ ' + value;
        }      
);

//Menu Hamburger

const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('Nav');
const menu = document.getElementById('Menu')

const loged = document.getElementById('Loged')
const logedMenu = document.getElementById('logedMenu')

// function toggleMenu(event){
//     if(event.type === "touchstart") event.preventDefault();
//     event.stopPropagation();
//     nav.classList.toggle('active');
//     btnMenu.classList.toggle('animation');
    

//     handleClickOutside(menu, () => {
//         nav.classList.remove('active')
//         btnMenu.classList.remove('animation')
        
//     });
// }

// function handleClickOutside(targetElement,callback){
//     const html = document.documentElement;

//     function handleHTMLClick(event){
//         if(!targetElement.contains(event.target))
//             {
//                 targetElement.removeAttribute("data-target");
//                 html.removeEventListener("click", handleHTMLClick);
//                 html.removeEventListener("touchstart", handleHTMLClick);
//                 callback();
//             }
//     }

//     if(!targetElement.hasAttribute("data-target"))
//         {
//             html.addEventListener("click", handleHTMLClick)
//             html.addEventListener("touchstart", handleHTMLClick)
//             targetElement.setAttribute("data-target", "");
//         }
// }

function toggleMenu(event){
    if(event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    loged.classList.toggle('LogedMenu');
    btnMenu.classList.toggle('animation');
    

    handleClickOutside(logedMenu, () => {
        loged.classList.remove('LogedMenu')
        btnMenu.classList.remove('animation')
        
    });
}

function handleClickOutside(targetElement,callback){
    const html = document.documentElement;

    function handleHTMLClick(event){
        if(!targetElement.contains(event.target))
            {
                targetElement.removeAttribute("data-target");
                html.removeEventListener("click", handleHTMLClick);
                html.removeEventListener("touchstart", handleHTMLClick);
                callback();
            }
    }

    if(!targetElement.hasAttribute("data-target"))
        {
            html.addEventListener("click", handleHTMLClick)
            html.addEventListener("touchstart", handleHTMLClick)
            targetElement.setAttribute("data-target", "");
        }
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);



