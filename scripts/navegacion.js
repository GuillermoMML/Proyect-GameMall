class HeaderLogin extends HTMLElement{

    connectedCallback() {
        fetch('./cabecera_login.html')
          .then(response => response.text())
          .then(html => {
            this.innerHTML = html;
          })
          .catch(error => {
            console.log('Error al cargar el archivo HTML:', error);
          });
      }
}


class HeaderNoLogin extends HTMLElement{
    connectedCallback() {
        fetch('./cabecera_nologin.html')
          .then(response => response.text())
          .then(html => {
            this.innerHTML = html;
          })
          .catch(error => {
            console.log('Error al cargar el archivo HTML:', error);
          });
      }
}
window.customElements.define('cabecera-nologin', HeaderNoLogin)
window.customElements.define('cabecera-login', HeaderLogin)