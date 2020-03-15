const a = document.getElementById("srch");
var home= document.getElementById("home-btn");
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
        a.style.marginTop="-18%";
        b=document.getElementById("btn");
        b.style.marginTop="-18%";
        var res= document.getElementById("result");
        res.innerHTML="<h1>Search Results For: "+a.value+"</h1>";
        res.style.marginTop="-44%";
        home.addEventListener("click",function(){
            a.style.marginTop="0%";
            b.style.marginTop="0%";
            res.innerHTML="";
            res.style.marginTop="45%";
            document.body.style.overflow="hidden";
        })
    }
}
