let nameRef=document.querySelector("#movie-name")
let arama=document.querySelector("#tıklama")
let sonuç=document.querySelector("#sonuçlar")


// FETCH KEY AND API
key="57d2c587"


let filmler=()=>{
    let filmadı=nameRef.value
    // let url=`https://www.omdbapi.com/?s=${filmadı}&apikey=${key}`
    let url=`https://www.omdbapi.com/?t=${filmadı}&apikey=${key}`

    if(filmadı.length<=0){
        sonuç.innerHTML=`<h3>Please enter a film or serie name</h3>`
        sonuç.style.textAlign="center"
        sonuç.style.paddingTop="10px"
    }

    else{
        fetch(url).then(response=>response.json()).then(data=>{
            if(data.Response=="True"){
                console.log(data)
                sonuç.innerHTML=`
                <div class="bilgi">
                   <h2>${data.Title}</h2>
                   <div class="önbilgi">
                      <img src=${data.Poster} class="resim">
                      <h4> ${data.Year}
                      <h4>Type : ${data.Genre}</h4>
                      <h4>Rating : ${data.imdbRating}</h4>
                   </div>  
                   <div class="açıklama">
                      <h3>Plot : </h3>
                      <p>${data.Plot}</p><br/>
                      <h3>Cast : </h3>
                      <p>${data.Actors}</p> 
               </div>`  
            }
            else{
                sonuç.innerHTML=`<h3>Your search does not exist</h3>`
                sonuç.style.textAlign="center"
                sonuç.style.paddingTop="10px"
                
            }
        })
        .catch(()=>{
            alert("Error Occured")
        })
    }
}

window.addEventListener("load",filmler)
arama.addEventListener("click",filmler)







