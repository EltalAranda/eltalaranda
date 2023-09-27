window.onload =() =>  {
    const toggleSwithc = document.getElementById("switch");
    const toggleSwithcText = toggleSwithc.querySelector("p");
    const body = document.body;

    toggleSwithc.onclick = () => {
       if (body.style.backgroundColor "") {
        body.style.backgroundColor = "black"; /* cambia el color del fondo a negro*/
        toggleSwithc.style.backgroundColor = "white" /* cambia el fondo del switch a blanco*/
        toggleSwithcText.innerHTML = "Encender"; /* cambia el texto del switch a encender */
        toggleSwithcText.style.color = "black"; /* cambia el color de la letra a negro */
       } else if (body.style.backgroundColor == "white") {
        (body.style.backgroundColor "") {
            body.style.backgroundColor = "black"; /* cambia el color del fondo a negro*/
            toggleSwithc.style.backgroundColor = "white" /* cambia el fondo del switch a blanco*/
            toggleSwithcText.innerHTML = "Encender"; /* cambia el texto del switch a encender */
            toggleSwithcText.style.color = "black"; /* cambia el color de la letra a negro */
       } else {
        body.style.backgroundColor = "white";
        toggleSwithc.style.backgroundColor = "black";
        toggleSwithcText.innerHTML = "Apagar";
        toggleSwithcText.style.color = "white";
       }
    }
}