function mostrarPersonas() {
    fetch('./data/datos.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('containerbuscado');
            data.buscado.map(data => {
                const div = document.createElement('div');

                const img = document.createElement('img');
                img.className = "buscadoimg;"
                img.src = data.img;
                img.classList.add('buscadoimg')
                div.appendChild(img)

                const title = document.createElement('label')
                title.innerHTML = data.title;
                title.htmlFor = "Title";
                title.className = "title";
                title.classList.add('title')
                div.appendChild(title);

                const price = document.createElement('label');
                price.innerHTML = `${data.price}`;
                price.className = "price";
                price.classList.add('price')
                div.appendChild(price);

                
                container.appendChild(div)
            });
            return container;
        });
}
mostrarPersonas();

/*<div className="col-1">
    <img
        src="img/EGS_HogwartsLegacyDigitalDeluxeEdition_AvalancheSoftware_Editions_S1_2560x1440-65f2cce001ab1893cca57f48aeb25196.jfif"
        className="buscadoimg">
        <label htmlFor="Title" className="title">Title</label>
        <label htmlFor="price" className="price">Price</label>
</div>*/