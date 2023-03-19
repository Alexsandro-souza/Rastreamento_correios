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
   alterarHtml(data);
   return data;
      
}
//Alterando dados na HTML
 function alterarHtml(data) {
    const dia = data.eventos[0].data;
    const hora = data.eventos[0].hora;
    const local1 = data.eventos[0].local;
    const status = data.eventos[0].status;
    dataEvento.innerText = dia
    horaEvento.innerText = hora
    local.innerText = local1
    eventoMensagem.innerText = status

 };

 //console.log(dia);
     //alert('Cara! Sinto muito o campo protoloco está vazio 😥');

