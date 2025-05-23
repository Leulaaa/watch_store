const search = ()  =>{
    const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
    const storeitem = document.getElementById("arrival__grid")
    const arrival = document.querySelectorAll("arrival__card")
    const pname = storeitem.getElementsByTagName("h4")

    for(var i=0; i < pname.length; i++){
        let match = arrival[i].getElementsByTagName("h4")[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox)  > -1){
            arrival[i].style.display = "";
            
           }else{
            arrival[i].style.display = "none";

           }
        }
    }
}



