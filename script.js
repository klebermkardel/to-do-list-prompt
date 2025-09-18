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
    console.log("\nFunção 'adicionarTarefa' ainda não implementada.");
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