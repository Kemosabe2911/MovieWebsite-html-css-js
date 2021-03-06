const a = document.getElementById("srch");
var home= document.getElementById("home-btn");
var res= document.getElementById("result");
document.getElementById("btn").addEventListener("click",search);
function search(){
    if( a.value === ''){
        a.style.borderColor="red";
        a.style.backgroundColor="#C3CDE6";
        a.style.color="red";
        a.placeholder="Enter Movie name!";
        setTimeout(function(){a.style.backgroundColor="#ffffff";
        a.style.borderColor="#29a329"; 
        a.style.color="#353839";  
        a.placeholder="Search Here";  
        }, 1500);
    }
    else{
        document.body.style.overflow="scroll";
        a.style.marginTop="-35vh";
        b=document.getElementById("btn");
        b.style.marginTop="-35vh";
        res.innerHTML="<h1>Search Results For: "+a.value+"</h1>";
        res.style.marginTop="-85vh";
        home.addEventListener("click",function(){
            a.style.marginTop="0%";
            b.style.marginTop="0%";
            res.innerHTML="";
            res.style.marginTop="45%";
            document.body.style.overflow="hidden";
        })
        fetchAPI();
    }
}
function fetchAPI(){
    fetch('http://www.omdbapi.com/?apikey=558775ad&t='+ a.value)
    /*fetch('http://img.omdbapi.com/?apikey=558775ad&s='+ a.value)*/
    .then((res) => res.json())
    .then((data)=> {
        console.log(data);
        console.log(data.Poster);
        let output=`
        <h1 class="ttle">${data.Title}</h2>,
        <img src=${data.Poster} class="poster">,
        <h3 class="dtls">Year: &nbsp;${data.Year}</h3>
        <h3 class="dtls">Released: &nbsp;${data.Released}</h3>
        <h3 class="dtls">RunTime: &nbsp;${data.Runtime}</h3>
        <h3 class="dtls">Genre: &nbsp;${data.Genre}</h3>
        <h3 class="dtls">Actors: &nbsp;${data.Actors}</h3>
        <h3 class="dtls">Writers: &nbsp;${data.Writer}</h3>
        <p class="plot">Plot: &nbsp;${data.Plot}</p>
        `
        res.innerHTML=output;
    });
}
