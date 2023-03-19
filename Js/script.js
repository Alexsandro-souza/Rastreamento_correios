/*Links com o HTML*/
const protocolo = document.getElementById('input_protocoll')
const botao = document.getElementById('button_protocoll')

const aer = protocolo.value


const visualizar = () =>{
    default.p
    console.log(aer)
}

const getData = async () => {
    const apiURL = `https://proxyapp.correios.com.br/v1/sro-rastro/${aer}`
    const resposta = await fetch(apiURL);
    const data = await resposta.json();
    return data;
}