
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


// Modais

// Modal Nome
const nomeModal = document.getElementById('nameModal')
function openNameModal()
{
    
    nomeModal.style.display = 'flex'
    
}
function closeNameModal(){
    nomeModal.style.display = 'none'
}

// Modal E-mail
const emailModal = document.getElementById('emailModal')
function OpenEmailModal(){
    emailModal.style.display = 'flex'
}
function CloseEmailModal(){
    emailModal.style.display = 'none'
}

//Modal Senha
const senhaModal = document.getElementById('senhaModal')
function OpenSenhaModal(){
    senhaModal.style.display = 'flex'
}
function CloseSenhaModal(){
    senhaModal.style.display = 'none'
}

//Modal CPF
const cpfModal = document.getElementById('CPFModal')
function OpenCPFModal(){
    cpfModal.style.display = 'flex'
}
function CloseCPFModal(){
    cpfModal.style.display = 'none'
}


