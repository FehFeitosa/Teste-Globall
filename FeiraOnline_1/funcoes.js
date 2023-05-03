//O .value acaba lendo e identificando o que a pessoa escreveu

function validarProduto(idNomeProduto, idValorProduto, idQtidadeProduto){
    let nome = document.getElementById(idNomeProduto).value;
    let valor = document.getElementById(idValorProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;
    
    if (nome == "") {
        alert ('Por favor insira o nome do produto!');
        nome.focus();
    }
    else if (valor == "") {
        alert('Favor insira o valor!');
        valor.focus();
    }
    else cadastrarProduto(nome, parseFloat(valor), parseInt(qtidade))
}

function cadastrarProduto(produto, vlr, qtidade) {
    let novoProduto = {nome:produto, valor: vlr, quantidade: qtidade};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produto = []; //Se nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); //Adiciona um novo Produto
        localStorage.setItem("produtos", JSON.stringify(produtos))
        alert("Foram cadastrados com sucesso "+qtidade+" unidades do produto " + produto+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    }
    else alert("A versão do seu navegador é muito antiga. Por isso não será possível executar essa aplicação")
}

function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque", ++document.getElementById(idCampo).innerHTML)
}

/*function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined"){
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso não será possível executar essa aplicação");
}*/

function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no Estoque</h3>"); 
    }
    else {
        produtos = JSON.parse(produtos);
        produtos.forEach(produto => {
            document.write("<ul>");
            document.write("<li>Nome do Produto: " + produto.nome+"</li>");
            document.write("<li>Valor do Produto: " + produto.vlr+"</li>");
            document.write("<li>Quantidade no estoque: "+ produto.quantidade+"</li>");
            document.write("</ul>");
        });
    }
}