class HeaderNoLogin extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = '<nav><div class="left-elements"><a href="#">☰ Todas las categorias</a><form action="./" method="get"><div class="searchbar"><input type="text" class="searchbarinput" name="q" placeholder="Search"><button type="submit" class="searchbarbutton"><i class="material-icons">search</i></button></div></form></div><div class="center-element"><h1><a href="#"> GameMall</a></h1></div><div class="right-elements"><a href="#"><span class="material-icons-outlined icon">person</span></a><span id="UserName">UserName</span></div></nav>'
    }
}
class HeaderLogin extends HTMLElement{

}
window.customElements.define('cabecera-nologin', HeaderNoLogin)