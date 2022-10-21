document.forms[1].addEventListener("submit", (e) => {
    e.preventDefault();

    $label = document.getElementById("lblTotal");

    cantidad = document.getElementById("cantidad").value;

    cantidad = cantidad > 0 ? cantidad : 1;

    let total = 200 * cantidad;

    let descuento = 0;

    categoria = document.getElementById("categoria").value;

    if (categoria.toLowerCase() == "trainee") {
        descuento = 50;
    } else if (categoria.toLowerCase() == "estudiante") {
        descuento = 80;
    } else if (categoria.toLowerCase() == "junior"){
        descuento = 15;
    }

    total = total - (total * descuento) / 100;

    $label.innerHTML = "Total a pagar: $" + total;
});

