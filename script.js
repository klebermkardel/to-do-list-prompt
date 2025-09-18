/*

Gerenciador de Tarefas (To-Do List) Interativo
Descrição: Um programa de terminal onde o usuário pode adicionar, listar, marcar como concluída e remover tarefas.

Estrutura de Dados: Um array de objetos, onde cada objeto é uma tarefa com propriedades como id (um número único), descricao (texto) e concluida (booleano true/false).

Funcionalidades:

Um menu principal dentro de um laço do...while que permite ao usuário escolher uma ação.

Uma função adicionarTarefa().

Uma função listarTarefas() (que deve mostrar o status de cada uma).

Uma função marcarComoConcluida().

Uma função removerTarefa().

*/

const prompt = require('prompt-sync')();

// --- ESTRUTURA DE DADOS ---
// O array que armazenará todas as tarefas e o contador para o próximo ID.
let tarefas = [];
let proximoId = 1;

// --- FUNÇÕES (esqueletos) ---
function adicionarTarefa() {
    // Pede ao usuário a descrição da tarefa.
    const descricaoDigitada = prompt("Digite a descrição da nova tarefa: ");

    // Validação robusta: checa se a entrada é nula (Ctrl+C) ou vazia/só com espaços.
    if (!descricaoDigitada || !descricaoDigitada.trim()) {
        console.log("\nErro: A descrição não pode ser vazia.");
        return; // Sai da função se a descrição for inválida.
    }

    // Cria o novo objeto de tarefa com a estrutura planejada.
    const novaTarefa = {
        id: proximoId,
        descricao: descricaoDigitada.trim(), // Salva a versão limpa
        concluida: false // Novas tarefas sempre começam como não concluídas
    };

    // Adiciona o novo objeto ao nosso "banco de dados".
    tarefas.push(novaTarefa);

    // Incrementa o ID para a próxima tarefa ser única.
    proximoId++;

    // Fornece um feedback de sucesso para o usuário.
    console.log(`\n✅ Tarefa "${novaTarefa.descricao}" adicionada com sucesso!`);
}

function listarTarefas() {
    console.log("\n--- LISTA DE TAREFAS ---");

    // Primeiro, verificamos se o array de tarefas está vazio.
    // Se estiver, exibimos uma mensagem e saímos da função com 'return'.
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    // Se houver tarefas, usamos o método .forEach() para percorrer cada uma.
    tarefas.forEach((tarefa) => {
        // Usamos um operador ternário para definir o status visual da tarefa.
        // Se 'tarefa.concluida' for 'true', status = "[X]". Senão, status = "[ ]".
        const status = tarefa.concluida ? "(Concluída)" : "(Pendente)";
        
        // Imprimimos a tarefa formatada, mostrando o status, o ID e a descrição.
        console.log(`${status} [${tarefa.id}] - ${tarefa.descricao}`);
    });
}

function marcarComoConcluida() {
    console.log("\n--- Marcar Tarefa como Concluída ---");

    // Primeiro, checa se há tarefas para marcar. Se não houver, sai da função.
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada para marcar.");
        return;
    }

    // Reutilizamos a função listarTarefas() para mostrar as opções ao usuário.
    listarTarefas();

    // Pede ao usuário o ID da tarefa e converte para número.
    const idDigitado = Number(prompt("Digite o ID da tarefa que deseja marcar como concluída: "));

    // Valida se o ID digitado é um número válido.
    if (isNaN(idDigitado)) {
        console.log("\nErro: O ID deve ser um número.");
        return;
    }

    // Usa o método .find() para encontrar a tarefa com o ID correspondente.
    const tarefaEncontrada = tarefas.find(tarefa => tarefa.id === idDigitado);

    // Verifica se a tarefa foi encontrada. .find() retorna 'undefined' se não encontrar.
    if (!tarefaEncontrada) {
        console.log("\nErro: Tarefa com o ID informado não foi encontrada.");
    } else {
        // Altera a propriedade 'concluida' do objeto encontrado para 'true'.
        tarefaEncontrada.concluida = true;
        console.log(`\n✅ Tarefa "${tarefaEncontrada.descricao}" marcada como concluída!`);
    }
}

function removerTarefa() {
    console.log("\nFunção 'removerTarefa' ainda não implementada.");
}

// --- LÓGICA PRINCIPAL (MENU) ---
function menu() {
    let opcao;
    do {
        console.log(`
--- GERENCIADOR DE TAREFAS ---
1 - Adicionar Tarefa
2 - Listar Tarefas
3 - Marcar como Concluída
4 - Remover Tarefa
5 - Sair
        `);
        opcao = prompt("O que deseja fazer? ");

        switch (opcao) {
            case '1': adicionarTarefa(); break;
            case '2': listarTarefas(); break;
            case '3': marcarComoConcluida(); break;
            case '4': removerTarefa(); break;
            case '5': console.log("\nSaindo do programa..."); break;
            default: console.log("\nErro: Opção inválida.");
        }
    } while (opcao !== "5");
}

// Inicia o programa.
menu();