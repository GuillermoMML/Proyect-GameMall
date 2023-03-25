    const displayTendencias = (string) => {
        // define the URL of the JSON file
        const url = "./data/datos.json";

        // use the fetch API to load the JSON file
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // the JSON data is loaded and available in the "data" variable
                console.log(data.tendencias);
                // loop over the "tendencias" array
                data.tendencias.forEach((tendencia, index) => {
                    // create a div element for the data item
                    const div = document.createElement("div");
                    div.classList.add("column");

                    // create an image element for the data item
                    const img = document.createElement("img");
                    img.src = tendencia.image_url;
                    img.alt = `Tendencia ${index + 1}`;
                    img.classList.add("img-resize"); // add the class to the image element

                    // add the image and paragraph to the div
                    div.appendChild(img);

                    // get the container element for the current row
                    const container = document.querySelectorAll(string)[Math.floor(index / 3)];

                    // add the div to the container
                    container.appendChild(div);
                });
            })
            .catch(error => {
                console.error("Error loading JSON file:", error);
            })
    }; displayTendencias(".tendencias .row")

    const displayTopVentas = (string) => {
        // define the URL of the JSON file
        const url = "./json/datos.json";

        // use the fetch API to load the JSON file
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // the JSON data is loaded and available in the "data" variable
                console.log(data.topventas);
                // loop over the "tendencias" array
                data.topventas.forEach((venta, index) => {
                    // create a div element for the data item
                    const div = document.createElement("div");
                    div.classList.add("column");

                    // create an image element for the data item
                    const img = document.createElement("img");
                    img.src = venta.image_url;
                    img.alt = `Tendencia ${index + 1}`;
                    img.classList.add("img-resize"); // add the class to the image element

                    // add the image and paragraph to the div
                    div.appendChild(img);

                    // get the container element for the current row
                    const container = document.querySelectorAll(string)[Math.floor(index / 3)];

                    // add the div to the container
                    container.appendChild(div);
                });
            })
            .catch(error => {
                console.error("Error loading JSON file:", error);
            })
    }; displayTopVentas(".topsales .row")