let select= document.querySelector("select");
let answer= document.querySelector("p");

select.addEventListener("change", answers);

function answers(){
    let choice=select.value;
    if(choice==="sunny")
    {answer.textContent="Quedate en casa, cerda";}
    else if(choice==="rainy"){answer.textContent="SAL, ES AGUA ACIDA";}
    else if(choice==="snowing"){answer.textContent="lame un poste";}
    else if(choice==="overcast"){answer.textContent="tirate de un puente";}
    else {answer.textContent="*pensamientos de cabeza autodestructivos*";}
}

