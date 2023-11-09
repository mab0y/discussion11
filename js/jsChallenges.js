function challenge1(element){
    if (element.checked===true){
        document.querySelector("#emailDiv").style.display="block";
    }else {
        document.querySelector("#emailDiv").style.display="none";
    }
}

document.querySelector("#sameAddress").addEventListener("click",function(){
    document.querySelector("#home").value=document.querySelector("#bill").value;
})