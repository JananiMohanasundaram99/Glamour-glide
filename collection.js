let productcontainer=document.getElementById("products");
let search=document.getElementById("search");
let productlist=productcontainer.querySelectorAll("div");

search.addEventListener("keyup",function(){
    let enteredvalue=event.target.value.toUpperCase()

    for(let i=0;i<productlist.length;i++)
    {
        let productname =productlist[i].querySelector("p").textcontent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist(i).style.display="none"
        }
        else{
            productlist(i).style.display="block"
        }
    }

})
