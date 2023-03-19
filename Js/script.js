/*Links com o HTML*/
const protocolo = document.getElementById('input_protocoll');
const botao = document.getElementById('button_protocoll');
const dataEvento = document.getElementById('dataEvento');
const horaEvento = document.getElementById('horaEvento');
const local = document.getElementById('local');
const eventoMensagem = document.getElementById('eventoMensagem');

//Evento de click
const clicando = botao.addEventListener("click", (e) => {
    e.preventDefault(); //  Empede que o evento padrão ocorra, no caso traria todo o form
    getData();
});

//Concatenando protoloca com URL correios
const getData = async () => {
   const valorProtoloco = protocolo.value.toUpperCase(); //O metedo toUpperCase() transforma em mauiscula toda string    
    const apiURL = `https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${valorProtoloco}`;
   
    const resposta = await fetch(apiURL);
    const data = await resposta.json();
    return data;
}



//Alterando dados na HTML

