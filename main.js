$(document).ready(function () {       

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000.00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf:{
                required: false
            }
        },
       
        submitHandler: function(form){
           // $('#statusForm').text('');
            $('#statusForm').text('Formulário Enviado com Sucesso!');
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                $('#statusForm').text('');
                $('#statusForm').append(`Existe(m) ${camposIncorretos} campo(s) incorreto(s)`)

            }
            
        }
    })

})