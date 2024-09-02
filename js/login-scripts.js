const iconLogin = document.getElementById('IconLogin');
const passwordLogin = document.getElementById('passwordLogin');
const passwordLabel = document.getElementById('passwordLabel')

const email = document.getElementById('email')
const emailLabel = document.getElementById('emailLabel')

const UserMenu = document.getElementById('Loged')
const nav = document.getElementById('Nav')
const btnMenu = document.getElementById('btnMenu')

function ShowHideLogin()
{
    if(passwordLogin.type === 'password')
        {
            passwordLogin.setAttribute('type', 'text');
            iconLogin.classList.replace('fa-eye', 'fa-eye-slash');
        }
    else
    {
        passwordLogin.setAttribute('type', 'password');
        iconLogin.classList.replace('fa-eye-slash', 'fa-eye'); 
    }
}




