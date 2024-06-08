const qtdEndereco = 3; 
const enderecoPerigo = 2;
const qtdAmbientes = 4;
const qtdObras = 20;

const porcentagemTotalEnderecoPerigo = (enderecoPerigo * 100) / qtdEndereco ;
const porcentagemTotalEnderecoPerigoFormatada = porcentagemTotalEnderecoPerigo.toFixed(1);

const kpis = document.querySelector('.critico');

    if(enderecoPerigo >= 1){
            kpis.classList.add('alerta') 
    } else {
            kpis.classList.remove('alerta')
    }

    let id = 0;
    let quantidadeEndereco = qtdEndereco 
    let quantidadeEnderecoPerigo = enderecoPerigo 
    let endereco = ["Casa" , "Galpão" ,"Galeria"];
    let rua = ['Dubai', 'Mariana', 'Vila Dourada']
    let situacao = ["Seguro", "Perigo"];
    let cep = 'XXXXX-XXX';

    let qtdEnderecoPerigoRestante = enderecoPerigo;

    const bodyTabela = document.getElementById('tbody_corpo_tabela')

    bodyTabela.innerHTML = "";

    for(let enderecoEmLinha = 0; enderecoEmLinha < qtdEndereco; enderecoEmLinha++) {

        let linha = document.createElement('tr');
        linha.addEventListener('click', function() {
                window.open('ambiente.html', '_blank'); // Abre o link em uma nova aba
                });
                bodyTabela.appendChild(linha)
                
                let celId = document.createElement('td');
                celId.textContent = id + 1
                linha.appendChild(celId);
                
                let celEndereco = document.createElement('td');
                celEndereco.textContent = `${endereco[enderecoEmLinha]}`
                linha.appendChild(celEndereco);
                
                let celRua = document.createElement('td');
                celRua.textContent = `${rua[enderecoEmLinha]}`
                linha.appendChild(celRua);
                
                let celCEP = document.createElement('td');
                celCEP.textContent = `${cep}`
                linha.appendChild(celCEP);

                let celQtdAmbientes = document.createElement('td');
                celQtdAmbientes.textContent = `${qtdAmbientes}`
                linha.appendChild(celQtdAmbientes);

                let celQtdObras = document.createElement('td');
                celQtdObras.textContent = `${qtdObras}`
                linha.appendChild(celQtdObras);

                let situacaoAtual = 0
                let situacaoCor = 'seguro'

                if (qtdEnderecoPerigoRestante > 0) {
                    situacaoAtual = 1
                    situacaoCor = 'perigo'
                }
                
                let celSituacao = document.createElement('td');
                celSituacao.textContent = `${situacao[situacaoAtual]}`
                celSituacao.classList.add(situacaoCor)
                linha.appendChild(celSituacao);


        // linha.addEventListener('click', function() {
        //     window.location.href = this.getAttribute('data-href');
        // });

        qtdEnderecoPerigoRestante--
        id++
}

h1_quantidade_endereco.innerHTML = qtdEndereco;
h1_endereco_totais_perigo.innerHTML = enderecoPerigo;

div_quantidade_endereco_perigo.innerHTML = `${porcentagemTotalEnderecoPerigoFormatada}% do total de endereco`;

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}

// script do objeto 
$(document).ready(function () {
    $('#minhaTabela').DataTable({
        dom: '<"custom-header"lf>rt<"custom-footer"ip>',
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50, 100],
        language: {
            info: 'Páginas _PAGE_ de _PAGES_',
            infoEmpty: 'Nenhum registro disponível',
            infoFiltered: '(filtrado de _MAX_ registros totais)',
            lengthMenu: '_MENU_ Registros por páginas',
            zeroRecords: 'Nada encontrado',
            search: "",  // Desativa o label do input de busca
            searchPlaceholder: "Digite para buscar...",  // Placeholder do input de busca
            paginate: {
                previous: "Anterior",
                next: "Próximo"
            }
        },
    });
});