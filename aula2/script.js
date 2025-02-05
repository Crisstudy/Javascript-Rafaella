//adciona uma função na para executar
function adicionarTarefa() {
   //armazena e imprime a tarefa
       
        
        //recebe a tarefa a ser adcionada
        const inputTarefa = document.getElementById("inputTarefa")
        //é o valor da tarefa ou o nome da tarefa que foi adcionada
        let tarefa = inputTarefa.value.trim()

        const mensagem = document.getElementById("mensagem")

        // se o valor do input for vazio então mostre uma mensagem de erro para o usuário
            if (tarefa == "") {
                 //mostre uma mensagem de erro
                let mensagemErro = "Digite uma tarefa para adicionar a sua  lista."
                mensagem.textContent = mensagemErro 
                //mudar cor da mensagem para vermelho
                mensagem.style.color = "red" 
            } else {
                //mensagem de sucesso na execução 
                let mensagemSucesso = "Tarefa adicionada com sucesso!"; 
                //mostra a mensagem de "tarefa adicionada com sucesso"
                mensagem.textContent =   mensagemSucesso;  
                //mudar cor da mensagem para verde
                mensagem.style.color = "green" 
                
                //cria um novo item li
                const listaTarefas = document.getElementById("listaTarefas")
                // insere na lista ul
                let novaTarefa = document.createElement("li")
                //acrescenta novas tarefas 
                novaTarefa.textContent = tarefa
                //coloca as novas tarefas dentro da lista de tarefa em ul
                listaTarefas.appendChild(novaTarefa)
            
            }

                //limpa o campo do input para novos valores seremadicionados
                inputTarefa.value = ""
        

}