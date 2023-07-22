$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    });

    $('#cpf').mask('000.000.000-00',{
        placeholder:"000.000.000-00"
    });

    $('#cep').mask('00.000-000',{
        placeholder: "00.000-000"
    });

$('form').validate({
        rules:{
            nome:{
                required: true
            },
            telefone:{
                required: true
            },
            email:{
                required: true,
                email : true
            },
            cpf:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages: {
            nome : 'Por favor digite seu nome',
            telefone: 'Por favor digite o número de telefone',
            email:'por favor digite o E-mail ',
            cpf:'Por favor digite o seu CPF',
            cep : 'Por favor digite seu CEP'
        },

        submitHandler: function(form){
            alert('Formulário enviado com sucesso!');

        $('#nome')= '';
        $('#tel')= '';
        $('#email')= '';
        $('#cpf')= '';
        $('#cep')='';

        },
        invalidHandler : function(event,validador){
            let inputError = validador.numberOfInvalids();
            if(inputError){
                alert(`Exitem ${inputError} campos incorretos`)
            }
        }
    });

})