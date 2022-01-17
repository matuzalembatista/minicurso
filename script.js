const botao = document.querySelector('#botao');
const imagem1 = document.querySelector('#foto1');
const nomePersonagem1 = document.querySelector('#nome1');
const especie1 = document.querySelector('#especie1');
const condicao1 = document.querySelector('#status1');
const imagem2 = document.querySelector('#foto2');
const nomePersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');
const imagem3 = document.querySelector('#foto3');
const nomePersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#status3');

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio1 = gerarValorAletorio();
    let numeroAleatorio2 = gerarValorAletorio();
    let numeroAleatorio3 = gerarValorAletorio();
    obterInformacaoPersonagem(numeroAleatorio1, imagem1, nomePersonagem1, especie1, condicao1);
    obterInformacaoPersonagem(numeroAleatorio2, imagem2, nomePersonagem2, especie2, condicao2);
    obterInformacaoPersonagem(numeroAleatorio3, imagem3, nomePersonagem3, especie3, condicao3);
}    

obterInformacaoPersonagem = (numeroAleatorio, imagem, nome, especie, condicao) => {
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nome.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });
    
}

botao.onclick = pegarPersonagem;