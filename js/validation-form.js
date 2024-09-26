let form = document.getElementById("form-check");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let param1 = parseInt(form.querySelector("input#n1").value ?? '');
    let param2 = parseInt(form.querySelector("input#n2").value ?? '');

    if (!param1) {
        alert("parametro do campo 1 é invalido!")
        return;
    }
    if (!param2) {
        alert("parametro do campo 2 é invalido")
        return;
    }
    
    if (param2 > param1) {
        alert(`Sucesso! o número ${param2} informado no campo ( B ) é maior do que o número ${param1} informado no campo ( A )`);
    }else{
        alert(`Atenção! o número ${param2} inserido no campo ( B ) é menor do que o número ${param1} informado no campo ( A )`);
    }
    return;

   
});
