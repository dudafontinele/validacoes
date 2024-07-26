// CÓDIGO DE VALIDAÇÃO DE EMAIL

//"function checar" Essa função serve para checar um email
function checarEmail(){
    // "document.forms" entrando no documento e olhando para todos os forms, "[0]" primeiro form "[1]" segundo form e ass por diante, "(=="")" verifica se tem algo no "", "||" segnifica "ou"
    if(document.forms[0].email.value == "" || 
    // "indexOf('')" procura o indice / Se nao digitar algo ou digitar algo que nao seja "@" ou "." o email nao é valido
        document.forms[0].email.value.indexOf('@') == -1 || 
        document.forms[0].email.value.indexOf('.') == -1 ){
            alert("Por favor, informe um email válido");
            return false;
    // se ele verificar e estiver tudo correto o email vai ser informado
        }else{
            alert("Email informado com sucesso");
            document.getElementById('email').innerHTML = document.forms[0].email.value;
        }
}