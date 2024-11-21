// Iniciar o carrossel com um intervalo de 3 segundos
$('.carousel').carousel({
    interval: 3000 // Muda a cada 3 segundos
});

// Função para mostrar detalhes de um pacote
const pacotes = {
    pacote1: {
        nome: "Pacote 1",
        valor: "R$ 100,00",
        descricao: "Pacote de Viagem do Rio de Janeiro.",
        imagem: "imagens/pacote1.jpg"
    },
    pacote2: {
        nome: "Pacote 2",
        valor: "R$ 200,00",
        descricao: "Pacote de Viagem do Deserto do Saara.",
        imagem: "imagens/pacote2.jpg"
    },
    pacote3: {
        nome: "Pacote 3",
        valor: "R$ 300,00",
        descricao: "Pacote de Viagem da Alemanha.",
        imagem: "imagens/pacote3.jpg"
    },
    pacote4: {
        nome: "Pacote 4",
        valor: "R$ 400,00",
        descricao: "Pacote de Viagem do Caribe.",
        imagem: "imagens/pacote4.jpg"
    },
    pacote5: {
        nome: "Pacote 5",
        valor: "R$ 500,00",
        descricao: "Pacote de Viagem de Xique Xique Bahia.",
        imagem: "imagens/pacote5.jpg"
    },
    pacote6: {
        nome: "Pacote 6",
        valor: "R$ 600,00",
        descricao: "Pacote de Viagem de Tokyo.",
        imagem: "imagens/pacote6.jpg"
    },
    pacote7: {
        nome: "Pacote 7",
        valor: "R$ 700,00",
        descricao: "Pacote de Viagem de Buenos Aires.",
        imagem: "imagens/pacote7.jpg"
    },
    pacote8: {
        nome: "Pacote 8",
        valor: "R$ 800,00",
        descricao: "Pacote de Viagem de Lisboa.",
        imagem: "imagens/pacote8.jpg"
    }
};

function mostrarDetalhes(pacote) {
    const detalhes = pacotes[pacote];
    document.getElementById("tituloDetalhes").innerText = detalhes.nome;
    document.getElementById("valorDetalhes").innerText = detalhes.valor;
    document.getElementById("descricaoDetalhes").innerText = detalhes.descricao;
    document.getElementById("imagemDetalhes").src = detalhes.imagem;

    $('#detalhesModal').modal('show'); // Usando Bootstrap para mostrar o modal
}

function comprar() {
    mostrarLogin(); // Abre o modal de login
}

// Função para mostrar o modal de login
function mostrarLogin() {
    $('#loginModal').modal('show');
}

// Função para mostrar o modal de criar conta
document.getElementById("criarConta").onclick = function() {
    $('#loginModal').modal('hide'); // Esconde o modal de login
    $('#criarContaModal').modal('show'); // Mostra o modal de criar conta
}

// Função para simular o login
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert("Login realizado com sucesso!");
    $('#loginModal').modal('hide');
}

// Função para simular a criação de conta
document.getElementById("criarContaForm").onsubmit = function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert("Conta criada com sucesso!");
    $('#criarContaModal').modal('hide');
}

// Ajustar o fluxo de navegação para exibir os modais em sequência

// Mostra o modal de Informações de Pagamento após criar a conta
document.getElementById("criarContaForm").onsubmit = function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert("Conta criada com sucesso!");
    $('#criarContaModal').modal('hide');
    $('#pagamentoModal').modal('show'); // Abre o modal de informações de pagamento
}

// Função para finalizar a compra e mostrar a tela de confirmação
function finalizarCompra() {
    $('#pagamentoModal').modal('hide'); // Fecha o modal de pagamento
    $('#finalizacaoModal').modal('show'); // Mostra o modal de finalização da compra
}
