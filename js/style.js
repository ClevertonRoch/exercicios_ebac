let contact_list = [
    ["Maria", "65984651347"],
    ["João", "65984659999"],
];

document.addEventListener("DOMContentLoaded", () => {
    listLoad()
})



function listLoad(params) {
    let tbody = document.querySelector("#table-list tbody");

    let newElementTr = "";
    for (let index = 0; index < contact_list.length; index++) {
        newElementTr += `<tr>`
        newElementTr += `<td>${contact_list[index][0]}</td>`
        newElementTr += `<td>${contact_list[index][1]}</td>`
        newElementTr += `</tr>`
    }
    tbody.innerHTML = newElementTr;
}


document.getElementById("send-contact").addEventListener("submit", function(event) {
    event.preventDefault();
   
    addContact();

});

function addContact() {
    let inputName = document.getElementById("name").value;
    let inputContact = document.getElementById("contact").value;
    
    let exist = checkDataContact(inputName, inputContact);
    console.log(exist);
    if(!exist){
        contact_list.push([inputName, inputContact])
        listLoad()
    }
    
}

function checkDataContact(name, contact) {

    for (let i = 0; i < contact_list.length; i++) {
        
        if (contact_list[i][0] === name) {
            alert("O nome informado já está registrado!")
            return true;
        }
        if (contact_list[i][1] === contact) {
            alert("O numero informado já está registrado!")
            return true;
        }
    }
    return false;
}







