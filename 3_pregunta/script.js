function calcularTem() {
    
    const temperatura = document.getElementById("temp").value;

    const radios = document.getElementsByName("rdnTemp"); 
    const selected = Array.from(radios).find(radio => radio.checked).value;

        

    alert(`La temperatura calculada es ${resultado}`);
}

