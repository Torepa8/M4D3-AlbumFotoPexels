// Your API key: Ar37PYZFzdg4OYA9ZQZ38uY48itqTuY3NfGpK5lJlGdDsscXngjs9gSL

const api = 'https://api.pexels.com/v1/search?query='
const imgCont=document.getElementById('imgContainer')

function search() {
    const searchUser = document.getElementById('searchField').value
    // alert(searchUser)
    fetch(api + searchUser, {
        headers: {
            Authorization: "Ar37PYZFzdg4OYA9ZQZ38uY48itqTuY3NfGpK5lJlGdDsscXngjs9gSL",
        },
    })
        .then(response => response.json())
        .then(displayUserData)
        .catch(error => {
            console.log(error.message)
            alert('Nessuno dato trovato')
        })
}


function displayUserData(datiImg) {
    // console.log(datiImg)
    datiImg.photos.forEach((img) => {
        let imgN=document.createElement('img') //creo elemento img
        let divCol=document.createElement('div') //creo div colonna
        imgN.classList.add('w-100','object-cover','m-2') 
        divCol.classList.add('d-flex','col-4')
        imgN.src=img.src.medium
        divCol.appendChild(imgN)
        imgCont.appendChild(divCol)
    });  
}