$(document).ready(function () {

    let task = [
        "Estudar Python", "Lavar o Carro"
    ]

    let tbody = $('tbody')
    let newElement;
    let tdElement;


    for (let i = 0; i < task.length; i++) {
        newElement = $('<tr></tr>')
        newElement.append($(`<td class="mark">${task[i].toUpperCase()}</td>`))
        newElement.append(
            $(`<td id="${i}-${task[i]}"><img data-status="pending" src="./images/expirado.png" alt="Tarefa Pendente" title="Click para alterar o status"/></td>`))
        tbody.append(newElement);
    }


    $('form').on('submit', (e) => {
        e.preventDefault()

        const fieldTask = $('#tarefa').val();
        let novaImagem = $('<img>').attr({
            'data-status': 'pending',
            'src': './images/expirado.png',
            'alt': 'Tarefa Pendente',
            'title': 'Click para alterar o status'
        });

        newElement = $('<tr></tr>')
        tdElement = $('<td class="mark"></td>').text(fieldTask.toUpperCase()).attr({
            'id': `${task.length++}-${fieldTask}`
        })
        newElement.append(tdElement);
        tdElement = $('<td></td>').append(novaImagem);
        newElement.append(tdElement);
        tbody.append(newElement);


        novaImagem.on('click', function () {
            if ($(this).attr("data-status") === "pending") {
                $(this).attr("src", "./images/marca-de-verificacao.png");
                $(this).attr("data-status", "finish");
                $(this).closest('tr').find('td:first').attr("style", "text-decoration: line-through")
            } else {
                $(this).attr("src", "./images/expirado.png");
                $(this).attr("data-status", "pending");
                $(this).closest('tr').find('td:first').removeAttr("style")
            }
        });

    })


    $('tbody tr img').on('click', function () {
        if ($(this).attr('data-status') === "finish") {
            $(this).attr({
                "data-status": "pending",
                "src": "./images/expirado.png"
            });
            $(this).closest('tr').find('td:first').removeAttr("style")
        } else {
            $(this).attr({
                "data-status": "finish",
                "src": "./images/marca-de-verificacao.png"
            });
            $(this).closest('tr').find('td:first').attr("style", "text-decoration: line-through")
        }
    });

})