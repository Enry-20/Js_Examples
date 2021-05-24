function optons(selectobject)
{let numberSelected= 0
for(let i= 0; i<selectobject.options.leght; i++){
    if(selectobject.options[i].Selected){
        numberSelected++
    }
}
return numberSelected;
}

let boton=document.getElementById("btn")
boton.addEventListener ("click", function(){
    alert("number of the music select"+ optons(document.selectForm.musicTypes))
})

// let options= document.querySelectorAll(options)
// let choices= options.value

