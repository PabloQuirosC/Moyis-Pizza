    document.querySelector("#submit").addEventListener("click", e => {
        e.preventDefault();
    
        //AGREGO EL NUMERO DE TELEFONO DE MOYIS::
        let telefono = "50671257101";
    
        let cliente = document.querySelector("#cliente").value;
        let orden = document.querySelector("#orden").value;
        let sabor = document.querySelector("#sabor").value;
        let adicional = document.querySelector("#adicional").value;
        let resp = document.querySelector("#respuesta");
    
        resp.classList.remove("fail");
        resp.classList.remove("send");
    
        let url = `https://api.whatsapp.com/send?phone=*${telefono}&text=
        %0A¡Hola! Quiero hacer un pedido.%0A%0A
        *Mis datos son los siguientes:*%0A
        *¿Cuál es tu nombre?*%0A
        ${cliente}%0A
        *Deseo ordenar:*%0A
        ${orden}%0A
        *El sabor que deseo es:*%0A
        ${sabor}%0A
        *¿Deseo adicionar?*%0A
        ${adicional}%0A`;
    
        if (cliente === "" || orden === "" || sabor === "" || adicional === "") {
        resp.classList.add("fail");
        resp.innerHTML = `Faltan algunos datos, ${cliente}`;
        return false;
        }
        resp.classList.remove("fail");
        resp.classList.add("send");
        resp.innerHTML = `Se ha enviado su pedido, pronto le responderemos, ${cliente}`;
        window.open(url);
    });
    