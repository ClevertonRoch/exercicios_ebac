$('document').ready(function () {

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    $('#tel').mask("(00) 00000-0000")

    $("form").on('submit', function (e) {
        e.preventDefault()
    })

})