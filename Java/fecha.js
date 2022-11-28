const apiUrl = "https://worldtimeapi.org/api/ip"

async function obtenerfecha(){
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    let fecha = data.datetime.split('.');
    let apifecha = fecha[0].split('T')
    
    document.getElementById("fecha").innerHTML = apifecha[0]
    // document.getElementById("hora").innerHTML = apifecha[1]
}

obtenerfecha()

