// Your API key: Ar37PYZFzdg4OYA9ZQZ38uY48itqTuY3NfGpK5lJlGdDsscXngjs9gSL

const api = 'https://api.pexels.com/v1/search?query='
const imgCont = document.getElementById('imgContainer')

function search() {
    const searchUser = document.getElementById('searchField').value
    // alert(searchUser)
    fetch(api + searchUser, {
        headers: {
            Authorization: "Ar37PYZFzdg4OYA9ZQZ38uY48itqTuY3NfGpK5lJlGdDsscXngjs9gSL",
        },
    })
        .then(response => response.json())
        .then(displayUserDataConBacktick)
        .catch(error => {
            console.log(error.message)
            alert('Nessuno dato trovato')
        })
}


function displayUserData(datiImg) {
    // console.log(datiImg)
    datiImg.photos.forEach((img) => {
        let imgN = document.createElement('img') //creo elemento img
        let divCol = document.createElement('div') //creo div colonna
        imgN.classList.add('w-100', 'h-pred', 'mt-1', 'object-fit-cover')
        divCol.classList.add('d-flex', 'col-4')
        imgN.src = img.src.medium
        divCol.appendChild(imgN)
        imgCont.appendChild(divCol)
    });
}

function displayUserDataConBacktick(resultServer) {
    imgCont.innerHTML = resultServer.photos.map((img_find) => {
        return /*html*/`
                <div class="col-4">
                    <img src="${img_find.src.medium}" class="w-100 h-pred mt-1 object-fit-cover" alt="">
                </div>`
    }).join("")
}