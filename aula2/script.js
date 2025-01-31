//adciona uma função na para executar
function adicionarTarefa() {
    //mensagem de sucesso na execução 
    let mensagem = "Tarefa adicionada com sucesso!";
        
        //recebe a tarefa a ser adcionada
        let inputTarefa = document.getElementById("inputTarefa")
        //é o valor da tarefa ou o nome da tarefa que foi adcionada
        let tarefa = inputTarefa.value
        //armazena e imprime a tarefa
        console.log(tarefa)
        //mostra a mensagem de "tarefa adicionada com sucesso"
        document.getElementById("mensagem").textContent = mensagem;

        //cria uma lista a partir da tag ul
        let listaTarefas = document.getElementById("listaTarefas")
        //mostra a lista criada em ul através da tag li
        let novaTarefa = document.createElement("li")
        //acrescenta novas tarefas 
        novaTarefa.textContent = tarefa
        //coloca as novas tarefas dentro da lista de tarefas em ul
        listaTarefas.appendChild(novaTarefa)
        //limpa o campo do input para novos valores serem adicionados
        inputTarefa.value = ""
}