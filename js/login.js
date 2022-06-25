$(document).ready(function(){
    // mascaras jquery
    $('#cpf').mask('000.000.000-00');
    
    $('#sign-in').click(function () {
        validarLogin();
    });
});

function validarLogin(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(usuario.trim() == '' || senha.trim() == '') {
        alert('Favor preencher todos os campos!')
    } else {
        alert('Você preencheu corretamente');
    }
}