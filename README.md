<div align="center">
<a  href='https://kukki.vercel.app'><img src="https://cdn.discordapp.com/attachments/975577499729805343/988085477452173342/Group_12.png?ex=662e5acf&is=661be5cf&hm=e2fca47cbe5276f374bc14cb1ac00272070a58ade72a4bd1dcd378152ef7e251&" align="center" alt="Kukki"  width="300px;"></a> 
</div>
<p align="center">Logins para ter acesso a aplicação:</p>
<p align="center">e-mail: useratendente@mail.com</p>
<p align="center">senha: useratendente</p>
<p align="center">e-mail: usercozinha@mail.com</p>
<p align="center">senha: usercozinha</p>

## Índice

* [1. Prefácio.](#1-prefácio)
* [2. Resumo do projeto.](#2-resumo-do-projeto)
* [3. Considerações gerais.](#3-considerações-gerais)
* [4. Critérios mínimos de aceitação.](#4-critérios-mínimos-de-aceitação-do-projeto)
* [5. Definição do produto e design.](#5-definição-do-produto-e-design)
* [6. Lighthouse.](#6-Lighthouse)
* [7. Desenvolvedoras.](#7-desenvolvedoras)
* [8. Como rodar? &#9881;](#8-como-rodar?-&#9881;)
* [9. Objetivos de aprendizagem](#9-objetivos-de-aprendizagem)

***

## 1. Prefácio
 4° Projeto desenvolvido no bootcamp de front-end da Laboratoria (turma SAP007). O Kukki é um restaurante no qual precisa de um novo sistema de controle para comandas. Criamos um produto no qual visa facilitar o dia a dia dos funcionários neste ambiente.
 
---
## 2. Resumo do projeto

Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma
interface em que se possa realizar pedidos utilizando um _tablet_, e enviá-los
para a cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: interface (cliente) e API (servidor). Nosso
cliente nos pediu para desenvolver uma interface que se integre com a API.

Estas são as informações que temos do cliente:

> Somos **Kukki**, uma 'hamburgueria e café' 24hrs.
>
>A nossa proposta de serviço 24 horas foi muito bem recebida e, para continuar a
>crescer, precisamos de um sistema que nos ajude a receber pedidos de nossos
>clientes.
>
>Nós temos 2 menus. Um muito simples para o café da manhã e outro para o resto do dia.
>
> **Importante:** Os clientes podem escolher entre hambúrgueres de carne bovina,
> frango ou vegetariano. Além disso, por um adicional de R\$ 1,00 , eles podem
> adicionar queijo **ou** ovo.
>
>Nossos clientes são bastante indecisos, por isso é muito comum que eles mudem o
>seu pedido várias vezes antes de finalizar.

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada
um com todos os seus _produtos_. O usuário deve poder escolher que _produtos_
adicionar e a interface deve mostrar o _resumo do pedido_ com o custo total.

---
## 3. Considerações gerais

O Produto foi desenvolvido seguindo a 'requisição de uma cliente'.
Essas são as funcionalidades principais que o produto tem:

- Fazer login com uma conta registrada;
- Fazer o cadastro e escolher seu cargo;
- Deslogar do App Web;
- Entrar na página Home, onde há botões de rotas para as páginas Pedidos, Pedidos Finalizados, Serviços e Cardápio;
- Entrar na página de cardápio, se o usuário for um atendente. Visualizar cardápio e filtrar, adicionar itens ao carrinho, remover itens, aumentar e diminuir quantidade dos itens. E por fim enviar a comanda para a API;
- Receber os pedidos da API na página de pedidos e serviços, dependendo do cargo mudar o estado do pedido;
- Ver comandas finalizadas na página de Pedidos Finalizados.

Além disso o projeto foi criado do zero, desde as instalações e preparação do boilerplate, testes, lógica, design, estilização.

---
## 4. Critérios mínimos de aceitação do projeto 

Todos as histórias de usuárias tem como definição de pronto o acordado abaixo:

- Você deve ter recebido code review de pelo menos uma parceira.
- Fez testes unitários e, além disso, testou seu produto manualmente.
- Você fez testes de usabilidade e incorporou o feedback do usuário.
- Você deu deploy de seu aplicativo e marcou sua versão (tag git).

<div align="center">
  <img src="https://media.discordapp.net/attachments/975577499729805343/1230284417000542250/Group_14.png?ex=6632c2a6&is=66204da6&hm=650e163cb8a3e45344a82cdcfd81aceb93273aa08fefe74a0d4771fd291acbd7&=&format=webp&quality=lossless" align="center" alt="usuario1"  width="500px"> 
</div>
<br>
<div align="center">
  <img src="https://media.discordapp.net/attachments/975577499729805343/1230284417248002119/Group_15.png?ex=6632c2a6&is=66204da6&hm=7aec254c8789d08e49932a7f311c78540954b9b4fbed61ec88a5acf74000ade6&=&format=webp&quality=lossless" align="center" alt="usuario2"  width="500px"> 
</div>
<br>
<div align="center">
  <img src="https://media.discordapp.net/attachments/975577499729805343/1230284416669061121/Group_13.png?ex=6632c2a6&is=66204da6&hm=5f1a4ec3c910c272a7df72285baf4effba328c5fa70aca3cd4ee03f81d42f22b&=&format=webp&quality=lossless" align="center" alt="usuario3"  width="500px"> 
</div>
<br>
<div align="center">
  <img src="https://media.discordapp.net/attachments/975577499729805343/1230284417499533313/Group_16.png?ex=6632c2a6&is=66204da6&hm=7b4065d7985597db42f71d2cd7207f116b32ec84eba02d460d899a78bcc80da9&=&format=webp&quality=lossless" align="center" alt="usuario4"  width="500px"> 
</div>

---
## 5. Definição do produto e design

### Proto Personas

<div align="center">
  <img src="https://media.discordapp.net/attachments/975577499729805343/1230284417780682872/Proto_Persona_1.png?ex=6632c2a6&is=66204da6&hm=5f02e8bb22851a213eea1fdf96bdd33c33d7441c5d5eabd97e9c512036895da9&=&format=webp&quality=lossless" align="center" alt="protopersona1"  width="500px"> 
</div>
<br>
<div align="center">
  <img src="https://media.discordapp.net/attachments/975577499729805343/1230284418044919841/Proto_Persona_2.png?ex=6632c2a6&is=66204da6&hm=0fa61bfbbf80e2c9c76d22eee0ed9e0764ed58fedf1873c41112d081cdf8624e&=&format=webp&quality=lossless" align="center" alt="protopersona2"  width="500px"> 
</div>
<br>
<div align="center">
  <img src="https://media.discordapp.net/attachments/975577499729805343/1230284418296451202/Proto_Persona_3.png?ex=6632c2a6&is=66204da6&hm=33a97c56ab6f787b8aea62d72e587cca86d7dec4fcc8a418882c4ab9ce6d1063&=&format=webp&quality=lossless" align="center" alt="protopersona3"  width="500px"> 
</div>


### Protótipo de Alta fidelidade

O Protótipo foi criado pelo [FIGMA](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4at2Me9ArF59c95ezHIaqH%2FBurguerQueen%3Fnode-id%3D41%253A162)

<div align="center">
  <img src="https://cdn.discordapp.com/attachments/975577499729805343/988171659372556308/Picsart_22-06-19_17-00-38-992.gif?ex=662eab12&is=661c3612&hm=501030eacced92ace1c18d3c30a90934ff8bd9faab6d249839caad2422d1f696&" align="center" alt="prototipos"  width="400px"> 
</div>

### Testes 
Todos os componentes criados possuem testes próprios e também suas respectivas funções. Os testes cobrem a maioria das funcionalidades do projeto:

<div align="center">
  <img src="https://media.discordapp.net/attachments/975577499729805343/988173595060621373/unknown.png?ex=662eace0&is=661c37e0&hm=a9ce3afaa0ee10ab2464ae8fb25b8453fcac278f2b7f89bcdf7543a15ff46b74&=&format=webp&quality=lossless" align="center" alt="prototipos"  width="400px"> 
</div>

### Testes de Usabilidade

Os testes de usabilidade estão disponíveis para leitura, [clicando aqui](https://docs.google.com/document/d/1Vyx8WtS3_RfljnOvgE8bHnBTNSVN1WOOsc2PZZyClIM/edit?usp=sharing).

Após cada teste de usabilidade foram geradas tarefas que se tornarão em futuras issues para o projeto. 

### Fluxograma 
<div align="center">
<img src="https://cdn.discordapp.com/attachments/975577499729805343/1230286122970775674/Fluxo_das_paginas_e_estados_de_pedidos.png?ex=6632c43d&is=66204f3d&hm=ca16014db9d0d9e8fd96b664f040218cc40a8d5af4903f369f04c728ba02b8b6&" align="center" alt="prototipos"  width="400px">
</div>

---
## 6. Lighthouse

Pontuações de Performance, Progressive Web App, Accessibility e Best Practices do [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

<div  align="center" >
<a><img src="https://i.picasion.com/pic92/caa98ef3ac61020432c15b2d46d02891.gif" width="600" height="280" border="0" alt="https://picasion.com/" /></a><br /><a href="https://picasion.com/"></a>
</div>

---
## 7. Desenvolvedoras

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/KarinaMel0">
  <img align="center" alt="Karina"  width="100px;" style="border-radius:50px;" src="https://avatars.githubusercontent.com/u/92555432?v=4.png"> <br>       
  <sub>
          <b>Karina Mel</b>
        </sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/MonicaGuimaraes">
  <img align="center" alt="Monica"  width="100px;" style="border-radius:50px;" src="https://avatars.githubusercontent.com/u/97262052?v=4"> <br>       
  <sub>
          <b>Mônica Guimaraes</b>
        </sub>
      </a>
    </td>
  </tr>
 <tr>

</table>

---
## 8. Como rodar? &#9881;
Você precisará usar o Node.js

Clonar o projeto `$ git clone https://github.com/MonicaGuimaraes/burger-queen-api-client.git`

Instalar as dependências do projeto `$ npm install or yarn`

Iniciar a aplicação `$ npm start or yarn start`

Realizar os testes unitários `$ npm test or yarn test`

---
## 9. Objetivos de aprendizagem
### HTML

- **Uso de HTML semântico**

### CSS

- **Uso de seletores de CSS**

- **Empregar o modelo de caixa (box model): borda, margem, preenchimento**

- **Uso de flexbox en CSS**

- **Uso de CSS Grid Layout**

- **Uso de media queries**

### JavaScript

- **Testes unitários**

- **Testes assíncronos**

- **Mocking**

- **Uso ES modules**

- **Uso de linter (ESLINT)**

- **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Git e GitHub

- **Git: Instalação e configuração**

- **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

- **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- **GitHub: Implantação com GitHub Pages**

- **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

- **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**

### HTTP

- **Solicitações o requisições (request) e respostas (response).**

- **Cabeçalhos (headers)**

- **Corpo (body)**

- **Verbos HTTP**

- **Codigos de status de HTTP**

- **Encodings e JSON**

- **CORS (Cross-Origin Resource Sharing)**
### react

- **jsx**

- **components**

- **events**

- **lists-and-keys**

- **conditional-rendering**

- **lifting-up-state**

- **hooks**

- **css-modules**

- **routing**

### user-centricity

- **Desenhar a aplicação pensando e entendendo a usuária**

### product-design

- **Criar protótipos para obter feedback e iterar**

- **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### research

- **Planejar e executar testes de usabilidade**

