
let btnBuscar = document.querySelector('.btnBuscar');


ip.addEventListener('keypress', buscarIp)

function buscarIp(){
    teclaEnter = event.keyCode;

    if(teclaEnter == 13){
        let ipValor = document.querySelector('#ip').value
        let api = `https://geo.ipify.org/api/v1?apiKey=at_qp3qhS3ma9WCYqA4Y7teThm5gQW6p&ipAddress=${ipValor}`
        console.log(ipValor)

        fetch(api)
        .then(result => result.json())
        .then(data => {
            let id = document.getElementById('id');
            id.innerHTML = `
                <p>${data.ip}</p>
            `
            let town = document.getElementById('town');
            town.innerHTML = `
                <p>${data.location.city}</p>
            `
            let time = document.getElementById('time');
            time.innerHTML = `
                <p>${data.location.timezone}</p>
            `
            let isp = document.getElementById('isp');
            isp.innerHTML = `
                <p>${data.isp}</p>
            `
             console.log(data)
        })
        .catch(err => console.log(err))
    }
}













