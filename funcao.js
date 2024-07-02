let lista_consultas = [];
let consulta = {
    nome: "",
    nome_medico: "",
    horario: "",
    data: "",
    id: ""
};

let aux = "";
let saida = 0;
let id_aux = 0;


const prompt = require("prompt-sync")();

const ADD = () => {
    do{
        consulta.nome = prompt("qual seu nome: ");
        consulta.nome_medico = prompt("nome médico: ");
        consulta.horario = prompt("horario: ");
        consulta.horario = Number(consulta.horario);
        consulta.data = prompt("data: ");
        consulta.data = Number(consulta.data);

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

        consulta.id = id_aux;
    

    } while(!consulta)

    return consulta;
}

const SAVE = (data) => {
    lista_consultas.push(data);


    return lista_consultas;
} 

const LIST = (data) => {
    console.log(data);

}

const DELETE = (data) => {
    for(let i = 0; i < lista_consultas.length; i++) {
        if(lista_consultas[i].id == (Number(data))) {
            lista_consultas[i] = " ";
            lista_consultas.splice(i, 1);

            process.stdout.write("\nRemovido da lista. ");

        } else {
            saida = 1;

        }
    }

    if(saida == 1) {
        process.stdout.write("\nNão existe, digite novamente: ");
        saida = 0;

    }
}


do{
    console.log("Digite:\n'add' para adicionar uma nova consulta.\n'rm' para remover uma consulta.\n'update' para atualizar uma consulta.\n'list' para listar.\n'sair' para fechar o programa.\nResposta: ");
    let resposta = prompt();

    if(resposta == "add") {
        ADD()
        SAVE(consulta);

        consulta = {
            nome: "",
            nome_medico: "",
            horario: "",
            data: "",
            id: ""
        };

    } else if(resposta == "rm") {
        let rm = prompt("id rm: ");

        DELETE(rm);

    } else if(resposta == "sair") {
        aux = 1;

    } else if(resposta == "update") {
        let rm = prompt("id up: ");
        
        LIST();
        DELETE(rm);
        ADD();
        SAVE(consulta);

        consulta = {
            nome: "",
            nome_medico: "",
            horario: "",
            data: "",
            id: ""
        };

    } else if(resposta == "list") {
        LIST(lista_consultas);

    }

    saida = 0;
} while(!aux)