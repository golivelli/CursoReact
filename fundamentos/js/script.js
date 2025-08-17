function agregarImg() {
  // Obtengo elemento.
  const galeria = document.getElementById("conteiner-photos"); 
  const inputFile = document.getElementById("imgURL"); 

  // Obtengo valor del elemento.
  const url = inputFile.value;
  const leyenda = document.getElementById("leyendaIMG").value;

  // Pregunto si el inputFile posee un valor y si hay leyenda.
  if (inputFile.files.length > 0 && leyenda){ 
    // Creo elementos y aplico estilos
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    div.classList.add("style-div");
    img.classList.add("img");
    p.classList.add("style-p");

    // Asigno el contenido.
    img.src = url; 
    p.textContent = leyenda;

    // Creo una lista para guardar el archivo (url).
    const file = inputFile.files[0]; 

    // Creo un objeto para leer el archivo.
    const reader = new FileReader(); 

    reader.onload = (e) => {
      // Obtengo el resultado del url (string) y lo guardo en el atributo de src que posee el elemento img.
      img.src = e.target.result; 
    };

    // Covierte arcihvo a URL para mostrarlo en pantalla.
    reader.readAsDataURL(file); 

    // Agrego hijos al <div> creado y inserto el <div> creado en la galeria.
    div.appendChild(img); 
    div.appendChild(p);
    galeria.appendChild(div);

    console.log(div); // Muestro <div> por consola.

    // Limpio inputs.
    document.getElementById("imgURL").value=""; 
    document.getElementById("leyendaIMG").value="";
  } else {
    alert("Introduce imagen y leyenda.");
  }
}