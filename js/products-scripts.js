const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('Nav');
const menu = document.getElementById('Menu')

const loged = document.getElementById('Loged')
const logedMenu = document.getElementById('logedMenu')

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

// Produtos Zoom

const box = document.getElementById('produtoImg');
const img = document.getElementById('img');

box.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;  //retorna a coordenada horizontal do mouse
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.8)";
});

box.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)"
})

const sizes = document.querySelectorAll('[id^="size"]');
const activeSizeColor = '#077304';
const inactiveSizeColor = '#069a02';

sizes.forEach((size) => {
  size.addEventListener('click', () => {
    sizes.forEach((s) => (s.style.backgroundColor = inactiveSizeColor));
    size.style.backgroundColor = activeSizeColor;
  });
});

// Color

const colors = document.querySelectorAll('[id^="color"]');
const colorChoose = document.getElementById('Choose-color');
const activeColorShadow = '2px 1px 14px 5px #069a02';
const inactiveColorShadow = 'none';

colors.forEach((color) => {
    color.addEventListener('click', () => {
      colors.forEach((c) => (c.style.boxShadow = inactiveColorShadow));
      color.style.boxShadow = activeColorShadow;
      const selectedColor = color.dataset.color; // Leia a propriedade data-color
      colorChoose.innerHTML = `Cor: ${selectedColor}`;
    });
  });


