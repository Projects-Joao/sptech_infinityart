function ambienteLinha() {

    let idUsuario = sessionStorage.getItem('ID_USUARIO')

    fetch(`/ambientes/listarAmbientes/${idUsuario}`).then(function (resposta) {

        if (resposta.ok) {
            if (resposta.status == 204) {
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
            console.log("Dados recebidos: ", JSON.stringify(resposta));

            const bodyTabela = document.getElementById('tbody_corpo_tabela')

            let ambientePerigo = 0;

                for (let i = 0; i < resposta.length; i++) {
                    
                    let linha = document.createElement('tr');
                    linha.addEventListener('click', function() {
                    window.open('ambiente.html', '_blank'); // Abre o link em uma nova aba
                    });
                    bodyTabela.appendChild(linha)
                        
                    var ambienteAtual = resposta[i];

                    let celId = document.createElement('td');
                    celId.textContent = id + 1
                    linha.appendChild(celId);
            
                    let celAmbientes = document.createElement('td');
                    celAmbientes.textContent = `${ambientes[ambientesVariaveis]}`
                    linha.appendChild(celambientes);

                    let obrasTotal = document.createElement('td');
                    obrasTotal.textContent = `${quantidadeObras}`
                    linha.appendChild(obrasTotal);

                    let obrasPerigo = document.createElement('td');
                    obrasPerigo.textContent = `${quantidadeObrasPerigo}`
                    linha.appendChild(obrasPerigo);

                    let situacaoAtual = enderecoAtual.situacao
                    let situacao = 'Seguro'
                    let situacaoCor = 'seguro'
    
                    if (situacaoAtual == 1) {
                        situacao = 'Perigo'
                        situacaoCor = 'perigo'
                        enderecoPerigo++
                    }
                    
                    let celSituacao = document.createElement('td');
                    celSituacao.textContent = `${situacao}`
                    celSituacao.classList.add(situacaoCor)
                    linha.appendChild(celSituacao);
    
                }

                const qtdAmbientes = resposta.length;

                const porcentagemTotalAmbientePerigo = (ambientePerigo * 100) / qtdAmbientes ;
                const porcentagemTotalAmbientePerigoFormatada = porcentagemTotalAmbientePerigo.toFixed(1);

                const kpis = document.querySelector('.critico');

                    if(ambientePerigo >= 1){
                        kpis.classList.add('alerta') 
                    } else {
                        kpis.classList.remove('alerta')
                    }

                h1_quantidade_endereco.innerHTML = qtdAmbientes;
                h1_endereco_totais_perigo.innerHTML = ambientePerigo;

                div_quantidade_endereco_perigo.innerHTML = `${porcentagemTotalAmbientePerigoFormatada}% do total de endereco`;

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
                });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        // finalizarAguardar();
    });
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}