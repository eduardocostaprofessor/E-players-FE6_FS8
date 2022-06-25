// chamada do jQuery ao carregar da página
$( document ).ready(function () {
    
    // aplica uma função no click dos botões comprar
    $('.btn-buy').click(function () {
        alert('Produto Indisponível');
        // produtoIndisponivel();
    })
});



function produtoIndisponivel() {
    alert('Produto Indisponível');
}




function mostraEscondeMenu() {
    let navbar = document.getElementById("menu-principal");
    navbar.classList.toggle("navbarShow");
}