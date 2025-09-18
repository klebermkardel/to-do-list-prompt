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

// --- Importação de Módulos ---
// Importa e inicializa a biblioteca 'prompt-sync' para permitir a entrada de dados síncrona no terminal.
const prompt = require('prompt-sync')();

// --- "Banco de Dados" (em memória) ---
// O array 'tarefas' armazenará todos os objetos de tarefa. Começa vazio.
let tarefas = [];
// A variável 'proximoId' garante que cada nova tarefa tenha um ID único e sequencial.
let proximoId = 1;

// --- FUNÇÕES DA APLICAÇÃO (CRUD) ---

/**
 * Adiciona uma nova tarefa à lista.
 * Pede uma descrição ao usuário, valida a entrada e cria um novo objeto de tarefa.
 */
function adicionarTarefa() {
    console.log("\n--- Adicionar Nova Tarefa ---");
    const descricaoDigitada = prompt("Digite a descrição da tarefa: ");

    // Validação robusta: checa se a entrada é nula (Ctrl+C) ou vazia/só com espaços.
    if (!descricaoDigitada || !descricaoDigitada.trim()) {
        console.log("\nErro: A descrição não pode ser vazia.");
        return; // Sai da função se a descrição for inválida.
    }

    // Cria o novo objeto de tarefa com a estrutura padrão.
    const novaTarefa = {
        id: proximoId,
        descricao: descricaoDigitada.trim(), // Salva a versão limpa da descrição.
        concluida: false // Novas tarefas sempre começam como não concluídas.
    };

    // Adiciona o novo objeto ao nosso array de tarefas.
    tarefas.push(novaTarefa);
    // Incrementa o ID para a próxima tarefa a ser criada.
    proximoId++;

    console.log(`\n✅ Tarefa "${novaTarefa.descricao}" adicionada com sucesso!`);
}

/**
 * Lista todas as tarefas cadastradas no console.
 */
function listarTarefas() {
    console.log("\n--- LISTA DE TAREFAS ---");

    // Primeiro, verifica se o array está vazio. Se sim, exibe uma mensagem e encerra a função.
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
        return;
    }

    // Se houver tarefas, usa o método .forEach() para iterar sobre cada uma.
    tarefas.forEach((tarefa) => {
        // Usa um operador ternário para determinar o status visual da tarefa.
        const status = tarefa.concluida ? "[X]" : "[ ]";
        // Imprime a tarefa formatada.
        console.log(`${status} [${tarefa.id}] - ${tarefa.descricao}`);
    });
}

/**
 * Marca uma tarefa existente como concluída.
 * Pede ao usuário o ID da tarefa e altera sua propriedade 'concluida' para 'true'.
 */
function marcarComoConcluida() {
    console.log("\n--- Marcar Tarefa como Concluída ---");
    listarTarefas(); // Reutiliza a função de listar para mostrar as opções.

    if (tarefas.length === 0) return; // Sai se não houver tarefas.

    const idDigitado = Number(prompt("Digite o ID da tarefa para marcar como concluída: "));

    // Valida se o ID é um número.
    if (isNaN(idDigitado)) {
        console.log("\nErro: O ID deve ser um número.");
        return;
    }

    // Usa .find() para encontrar o objeto da tarefa correspondente ao ID.
    const tarefaEncontrada = tarefas.find(tarefa => tarefa.id === idDigitado);

    // Se .find() não encontrar nada, ele retorna 'undefined'.
    if (!tarefaEncontrada) {
        console.log("\nErro: Tarefa com o ID informado não foi encontrada.");
    } else {
        // Altera a propriedade 'concluida' do objeto encontrado para 'true'.
        tarefaEncontrada.concluida = true;
        console.log(`\n✅ Tarefa "${tarefaEncontrada.descricao}" marcada como concluída!`);
    }
}

/**
 * Remove uma tarefa da lista.
 * Pede ao usuário o ID da tarefa, encontra seu índice no array e a remove.
 */
function removerTarefa() {
    console.log("\n--- Remover Tarefa ---");
    listarTarefas(); // Mostra as tarefas para o usuário saber qual remover.

    if (tarefas.length === 0) return;

    const idDigitado = Number(prompt("Digite o ID da tarefa que você deseja remover: "));

    // Valida o ID.
    if (isNaN(idDigitado)) {
        console.log("\nErro: O ID deve ser um número.");
        return;
    }

    // Usa .findIndex() para obter a POSIÇÃO (índice) da tarefa no array.
    // Retorna -1 se não encontrar.
    const indiceEncontrado = tarefas.findIndex(tarefa => tarefa.id === idDigitado);

    // Se o índice for -1, a tarefa não existe.
    if (indiceEncontrado === -1) {
        console.log("\nErro: Tarefa com o ID informado não foi encontrada.");
    } else {
        // Usa .splice() para remover 1 item a partir do índice encontrado.
        tarefas.splice(indiceEncontrado, 1);
        console.log("\n❌ Tarefa removida com sucesso!");
    }
}

// --- LÓGICA PRINCIPAL (MENU) ---
/**
 * Função principal que executa o menu e o loop da aplicação.
 */
function menu() {
    let opcao;
    // O laço 'do...while' garante que o menu rode pelo menos uma vez.
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

        // O 'switch' direciona a escolha do usuário para a função correta.
        switch (opcao) {
            case '1': adicionarTarefa(); break;
            case '2': listarTarefas(); break;
            case '3': marcarComoConcluida(); break;
            case '4': removerTarefa(); break;
            case '5': console.log("\nSaindo do programa..."); break;
            default: console.log("\nErro: Opção inválida.");
        }
    } while (opcao !== "5"); // O loop continua enquanto a opção não for '5'.
}

// Inicia a aplicação chamando a função do menu.
menu();