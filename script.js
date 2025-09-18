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
    console.log("\nFunção 'listarTarefas' ainda não implementada.");
}

function marcarComoConcluida() {
    console.log("\nFunção 'marcarComoConcluida' ainda não implementada.");
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