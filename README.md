<h1>Rastreamento correios</h1>
<h2>Acessando o projeto</h2>
<p>Para acessar o projeto você deve clicar no link <a href="https://rastreamento-correios-ten.vercel.app/">Link para o deploy</a><br/></p>

<p>Para executar a aplicação você deverá ter acesse a um protocolo de rastreamento. Exemplo de um código <strong>TE007302221BR</strong></p>


<h2>Objetivo do projeto</h2>
<p>Esse projeto tem como objetivo otimizar o acompanhamento de Diplomas dos alunos da Faculdade de Ciências Aplicadas e Sociais de Petrolina (Facape) que são enviados aos alunos pelos correios.</p>

<h2>Passo a passo da construção do projeto</h2>
<ol>
    <li>Contruir HTML</li>
    <li>Construir visual</li>
    <li>Estudar API dos correios</li>
    <li>Link com API dos correios</li>
    <li>Definir as funções para requisição de dados</li>
    <li>Fazer deploy do projeto</li>
</ol>

<h2>Descrição do projeto</h2>
<ul>
    <li>O que o aplicativo faz?</li>
    <p>O app rastreia seu produto por meio do código de rastreio. Se seu código for válido o app mostrará na tela o último evento em que houve movimentação do seu produto. Mostrará informações como Data, Hora, Localização, Status</p></br>
    <li>Por que foram utilizadas as tecnologias que estão no projeto?</li>
    <p>Ao pesquisar sobre como faria esse projeto vi que havia várias bibliotecas que faziam todo o trabalho de consulta, mas decidi fazer a consulta da API e tratativa utilizando javascript puro, css e Html.</p></br>
    <li>Quais foram os desafios enfrentados e os recursos que se espera implementar no futuro?</li>
    <p>Tive como desafio o acesso a API o correios, para API rastro é uma api restrita dos correios e para ter acesso é necessário cadastro de pessoa jurídica, por se tratar de um projeto pessoal não tive acessa esse tipo de cadastro, então tive que pesquisar outra forma de consultar essas informações. Encontrei no github uma API que já tinha um token para rastreamento dos correios, então a utilizei nesse projeto, a API é https://linketrack.com</p>
</ul>