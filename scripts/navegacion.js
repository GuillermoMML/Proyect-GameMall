class HeaderLogin extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = '<head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Icons+Outlined"/><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></head> <nav><div class="left-elements"><a href="#">☰ Todas las categorias</a><form action="./" method="get"><div class="searchbar"><input type="text" class="searchbarinput" name="q" placeholder="Search"><button type="submit" class="searchbarbutton"><i class="material-icons">search</i></button></div></form></div><div class="center-element"><h1><a href="#"> GameMall</a></h1></div><div class="right-elements"><a href="#"><span class="material-icons-outlined icon">person</span></a><span id="UserName">UserName</span></div></nav>'
    }
}


class HeaderNoLogin extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = '<nav id="cabecera_nologin"><div class="left-elements"><a href="#" id="slidebar" style="font-size: larger;">☰</a><form action="./" method="get"><div class="searchbar"><input type="text" class="searchbarinput" name="q" placeholder="Search"><button type="submit" class="searchbarbutton"><i class="material-icons">search</i></button></div></form></div><div class="center-element"><h1 class="MainNames"><a href="#"> GameMall</a></h1></div><div class="right-elements"><button>Login</button><button>Registrarse</button></div></nav>'
}
}
window.customElements.define('cabecera-nologin', HeaderNoLogin)
window.customElements.define('cabecera-login', HeaderLogin)