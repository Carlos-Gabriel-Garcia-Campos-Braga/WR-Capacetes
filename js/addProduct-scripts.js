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

//Aréa de Cadastro

const button = document.getElementById('button');

const marcaLabel = document.getElementById('marcaLabel');
const marca = document.getElementById('marca');
validMarca = false

const modeloLabel = document.getElementById('modeloLabel');
const modelo = document.getElementById('modelo');
validModelo = false

const tamanhoLabel = document.getElementById('tamanhoLabel')
const tamanho = document.getElementById('tamanho')
const none = document.getElementById('none');
validTamanho = false

const corLabel = document.getElementById('corLabel');
const cor = document.getElementById('cor');
validCor = false

const materialLabel = document.getElementById('materialLabel');
const material = document.getElementById('material');
validMaterial = false

const categoria = document.getElementById('categoria')
const categoriaLabel = document.getElementById('categoriaLabel');
validCategoria = false


const pesoLabel = document.getElementById('pesoLabel');
const peso = document.getElementById('peso');
validPeso = false

const certificacaoLabel = document.getElementById('certificacaoLabel');
const certificacao = document.getElementById('certificacao');
validCertificacao = false

marca.addEventListener('keyup', () => {
    if(marca.value.length == null)
    {
        marcaLabel.setAttribute('style', 'color: red');
        validMarca = false;
    }
    else
    {
        marcaLabel.setAttribute('style', 'color: green')
        validMarca = true;
    }
})

modelo.addEventListener('keyup', () => {
    if(modelo.value.length < 2)
    {
       modeloLabel.setAttribute('style', 'color: red');
        validMarca = false;
    }
    else
    {
       modeloLabel.setAttribute('style', 'color: green')
        validMarca = true;
    }
})

cor.addEventListener('keyup', () => {
    if(cor.value.length < 2)
    {
        corLabel.setAttribute('style', 'color: red');
        validMarca = false;
    }
    else
    {
        corLabel.setAttribute('style', 'color: green')
        validMarca = true;
    }
})

material.addEventListener('keyup', () => {
    if(material.value.length < 2)
    {
        materialLabel.setAttribute('style', 'color: red');
        validMarca = false;
    }
    else
    {
        materialLabel.setAttribute('style', 'color: green')
        validMarca = true;
    }
})

peso.addEventListener('keyup', () => {
    if(peso.value.length < 2)
    {
        pesoLabel.setAttribute('style', 'color: red');
        validMarca = false;
    }
    else
    {
        pesoLabel.setAttribute('style', 'color: green')
        validMarca = true;
    }
})

marca.addEventListener('keyup', () => {
    if(marca.value.length < 2)
    {
        marcaLabel.setAttribute('style', 'color: red');
        validMarca = false;
    }
    else
    {
        marcaLabel.setAttribute('style', 'color: green')
        validMarca = true;
    }
})

certificacao.addEventListener('keyup', () => {
    if(certificacao.value.length < 2)
    {
        certificacaoLabel.setAttribute('style', 'color: red');
        validMarca = false;
    }
    else
    {
        certificacaoLabel.setAttribute('style', 'color: green')
        validMarca = true;
    }
})


//Condicionais para que seja possivel cadastrar o produto

const errorModal = document.getElementById('errorModal')
button.addEventListener('click', () => {

    if(tamanho.selectedIndex == "" || marca.value === "" || cor.value === "" || modelo.value === "" || 
        material.value === "" || peso.value === "" || certificacao.value === "" || categoria.selectedIndex == "")
    {
        errorModal.setAttribute('style', 'display: flex');

        setTimeout(() => {
            errorModal.setAttribute('style', 'display: none');
        }, 3000);
        
    }
    else
    {
        alert("Prossiga");
    }
    
})



