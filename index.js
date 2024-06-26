let lista_consultas = [];
let consulta = {
    nome: "",
    nome_medico: "",
    horario: "",
    data: "",
    id: ""
};
let passo = 0;
let aux = "";
let saida = 0;
let id_aux = 0;

process.stdout.write("\nDigite 'add' para adicionar nova consulta.\n'list' para listar as consultas.\n'update' para atualizar uma coluna.\n'rm' para remover uma consulta.\n'sair' para fechar o programa.\nResposta: ");

process.stdin.on('data', function(data) {
    let resposta = data.toString().trim().toLowerCase();

    switch(passo) {
        case 0:
            if(resposta == "add") {
                process.stdout.write("\nEscreva o nome do paciente: ");
                passo = 1;

            } else if(resposta == "list") {
                if(lista_consultas != "") {
                    process.stdout.write("\nHá as seguintes consultas marcadas: \n");

                    console.log(lista_consultas);

                    process.stdout.write("\nDigite 'add' para adicionar nova consulta.\n'list' para listar as consultas.\n'update' para atualizar uma coluna.\n'rm' para remover uma consulta.\n'sair' para fechar o programa.\nResposta: ");

                } else {
                    process.stdout.write("\nNão há consultas salvas. Digite novamente: ");
                }

            } else if(resposta == "update") {
                process.stdout.write("\nEscolha qual id deseja mudar: \n")
                console.log(lista_consultas);
                passo = 5;

            } else if(resposta == "rm") {
                process.stdout.write("\nEscolha qual id deseja remover: \n")
                console.log(lista_consultas);
                passo = 6;
                
            } else if (resposta == "sair"){
                passo = 8;

            } else {
                process.stdout.write("\nDigite novamente: ");
            }
        break;

        case 1:
            consulta.nome = resposta;

            process.stdout.write("\nQual o nome do médico: ");
            passo = 2;

        break;

        case 2:
            consulta.nome_medico = resposta;

            process.stdout.write("\nQual o horário da consulta em padrão 24 horas: ");
            passo = 3;

        break;

        case 3:
            consulta.horario = Number(resposta);

            process.stdout.write("Qual o dia dessa consulta: ");
            passo = 4;

        break;

        case 4:
            consulta.data = Number(resposta);

            process.stdout.write("Gerando o id dessa consulta: ");
            
            do {
                id_aux = Math.floor((Math.random() * 10000) + 1);
                if(lista_consultas != 0) {
                    for(let i = 0; i < lista_consultas.length; i++) {
                        if(lista_consultas[i].id == id_aux) {
                            saida = 0;
                        } else {
                            saida = 1;
        
                        }
                    }
                } else {
                    saida = 1;
                    
                }
            } while (!saida);

            if(saida) {
                consulta.id = id_aux;
                lista_consultas.push(consulta);
                consulta = {
                    nome: "",
                    nome_medico: "",
                    horario: "",
                    data: ""
                };
    
                process.stdout.write("\nDigite 'add' para adicionar nova consulta.\n'list' para listar as consultas.\n'update' para atualizar uma coluna.\n'rm' para remover uma consulta.\n'sair' para fechar o programa.\nResposta: ");
                saida = 0;
                passo = 0;

            }

        break;

        case 5:
            for(let i = 0; i < lista_consultas.length; i++) {
                if(lista_consultas[i].id == (Number(resposta))) {
                    lista_consultas[i] = " ";
                    lista_consultas.splice(i, 1);
                    process.stdout.write("\nEscreva o novo nome do paciente: ");

                    saida = 0;
                    passo = 1;

                } else {
                    saida = 1;

                }
            }

            if(saida == 1) {
                process.stdout.write("\nNão existe, digite novamente: ");
                saida = 0;

            }


        break;

        case 6:
            for(let i = 0; i < lista_consultas.length; i++) {
                if(lista_consultas[i].id == (Number(resposta))) {
                    lista_consultas[i] = " ";
                    lista_consultas.splice(i, 1);

                    process.stdout.write("\nRemovido da lista. ");
                    process.stdout.write("\nDigite 'add' para adicionar nova consulta.\n'list' para listar as consultas.\n'update' para atualizar uma coluna.\n'rm' para remover uma consulta.\n'sair' para fechar o programa.\nResposta: ");

                    passo = 0;

                } else {
                    saida = 1;

                }
            }

            if(saida == 1) {
                process.stdout.write("\nNão existe, digite novamente: ");
                saida = 0;

            }


        break;
    }
    if(passo == 8) {
        process.exit();

    }
})
