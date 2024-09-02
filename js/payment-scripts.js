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

// Payment Methods

//Cartao de Crédito
// Selecione os elementos do DOM
const card = document.getElementById('cardMethod');
const boleto = document.getElementById('boletoMethod');
const pix = document.getElementById('pixMethod');
const cardReveal = document.getElementById('cardReveal');
const pixCode = document.getElementById('pixCode');
const qrCode = document.getElementById('qrCode');
const timer = document.getElementById('timer');

// Função para gerar o QR Code
function generateQRCode() {
    // Substitua o conteúdo da URL do QR Code pelo URL gerado pelo seu backend ou API
    qrCode.src = 'https://example.com/qr-code.png';
    
    // Exemplo de implementação para o temporizador
    const endTime = new Date().getTime() + 10 * 60 * 1000; // 10 minutos a partir de agora
    
    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;
        
        if (timeLeft <= 0) {
            timer.innerText = 'Expirado';
            qrCode.src = ''; // Limpa o QR Code
            return;
        }

        const minutes = Math.floor(timeLeft / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        timer.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        setTimeout(updateTimer, 1000);
    }
    
    updateTimer();
}

// Função para esconder o QR Code e o temporizador
function hideQRCode() {
    qrCode.src = ''; // Limpa o QR Code para que não fique visível
    pixCode.style.display = 'none'; // Esconde o contêiner do QR Code e do temporizador
}

// Função para mostrar o QR Code e o temporizador
function showQRCode() {
    generateQRCode(); // Gera o QR Code
    pixCode.style.display = 'flex'; // Exibe o contêiner do QR Code e do temporizador
}

// Adicionar evento de clique para o método de pagamento
card.addEventListener('click', function() {
    cardReveal.style.display = 'flex';
    hideQRCode(); // Garante que o QR Code e o temporizador sejam escondidos
});

boleto.addEventListener('click', function() {
    cardReveal.style.display = 'none';
    hideQRCode(); // Garante que o QR Code e o temporizador sejam escondidos
});

pix.addEventListener('click', function() {
    cardReveal.style.display = 'none';
    showQRCode(); // Mostra o QR Code e o temporizador
});
