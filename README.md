# 📝 Gerenciador de Tarefas (To-Do List) via Terminal

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 📖 Sobre o Projeto

Este é um projeto de um Gerenciador de Tarefas (To-Do List) completo e interativo que roda inteiramente no terminal. Foi desenvolvido como projeto final para consolidar os fundamentos de Algoritmos e Lógica de Programação utilizando JavaScript e o ambiente Node.js.

O programa simula uma aplicação CRUD (Create, Read, Update, Delete), permitindo ao usuário gerenciar uma lista de tarefas de forma dinâmica.

---

## ✅ Funcionalidades

* **Adicionar Tarefas:** Permite ao usuário inserir novas tarefas na lista.
* **Listar Tarefas:** Exibe todas as tarefas cadastradas com seu status (Pendente ou Concluída) e ID.
* **Marcar como Concluída:** Permite ao usuário alterar o status de uma tarefa pendente para concluída.
* **Remover Tarefa:** Permite ao usuário deletar uma tarefa da lista.
* **Validação Robusta:** O programa valida todas as entradas do usuário para prevenir erros e garantir uma experiência de uso fluida.

---

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi construído do zero e serviu para praticar um vasto conjunto de conceitos fundamentais da programação:

* **JavaScript (ES6+):** A linguagem principal do projeto.
* **Node.js:** O ambiente de execução para o código JavaScript fora do navegador.
* **Lógica de Programação:**
    * **Estruturas de Dados:** Uso intensivo de `Arrays` e `Objetos` para armazenar e estruturar os dados das tarefas.
    * **Funções:** Separação de responsabilidades, com cada funcionalidade encapsulada em sua própria função.
    * **Laços de Repetição:** O `do...while` foi utilizado para criar o loop principal do menu da aplicação.
    * **Estruturas Condicionais:** `switch` para o roteamento do menu e `if/else if/else` para as validações e lógicas internas.
* **Métodos de Array Modernos:**
    * `.forEach()` para listar os itens.
    * `.find()` para encontrar um objeto específico.
    * `.findIndex()` para localizar o índice de um objeto.
    * `.splice()` para remover um item.
* **Validação e Tratamento de Entrada:** Uso de `prompt-sync`, normalização de strings (`trim`, `toLowerCase`) e checagem de tipos (`isNaN`, `isInteger`).

---

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/klebermkardel/to-do-list-prompt]
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd to-do-list-prompt
    ```

3.  **Instale as dependências:**
    (É necessário ter o Node.js e o NPM instalados)
    ```bash
    npm install
    ```

    ```bash
    npm install prompt-sync
    ```

4.  **Execute o programa:**
    ```bash
    node script.js
    ```

---

## 👨‍💻 Autor

* **[Kleber Molina Kardel]**
* **LinkedIn:** [https://www.linkedin.com/in/klebermkardel/]
* **GitHub:** [https://github.com/klebermkardel]

---

## 📄 Licença

Este projeto está sob a licença MIT.