let amigos = [];
// foi criado uma variável para adicionar os amigos dentro de um array 


function adicionar(){

    let amigo = document.getElementById('nome-amigo'); 
    if(amigo.value == ''){

        alert('Informe o nome do amigo');
        return;

        //aqui é feita uma validação de caso o numero esteja vazio  ele  me de um alert avisando que nao foi digitado nada 

        //ápos isso colocamos um return para resetar a função e evitar erros de continuidade; 
    }

    if(amigos.includes(amigo.value)){

        alert('Nome já existente'); 
        return; 

        // com esta validação não se pode ter nomes duplicados.



    }


    let lista = document.getElementById('lista-amigos');
    // criando variaveis e buscando  o id que foi inserido no html

    amigos.push(amigo.value);
    //o comando .push serve para adicionar itens no array e no código acima estamos pegando o valor dos amigos digitados  

    if(lista.textContent == ''){
        
        lista.textContent = amigo.value;


    }else{

        lista.textContent = lista.textContent + ', ' + amigo.value;
        // caso possuir um amigo na lista  concatenamos mais um para adiccionar um amigo a lista


    }

    amigo.value = '';

}
function sortear(){

    if(amigos.length < 4){
      
        alert('Adicione pelo menos 4 amigos');
        return;
    
      }

      // o sistema para funcionar precisa ter no minimo 4 amigos
    
      if(amigos.length % 2 !== 0) {
    
        let novoAmigo = prompt("Adicione um novo amigo:");
        amigos.push(novoAmigo);
    
        while(amigos.length % 2 !== 0) {
          novoAmigo = prompt("Número ímpar. Adicione mais um amigo:");
          amigos.push(novoAmigo);
        }
    
      }

      //nesta funçao de sorteio estou evitando numero impares no caso para nehum amigo ficar  sem o outro  assim caso falte coloquei um prompt para  adicionar mais uma pessoa caso  seja  impar 
    
      embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for ( let i = 0; i < amigos.length; i++  ){

        
        if (i == amigos.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
            }
    }
    
    
      

    }




function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){

    amigos = [];

    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML ='';

    //nesta função pegamos todos os itnes dos arrays e  textos colocados e zeramos eles  como usamos texto  foi possivel usar o .innerHTML 


}