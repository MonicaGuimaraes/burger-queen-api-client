<div align="center">
<a  href='https://kukki.vercel.app'><img src='https://cdn.discordapp.com/attachments/948752264212922418/988104089223172106/Group_12.png' align="center" alt="Kukki"  width="300px;"></a> 
</div>

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
  <img src='https://cdn.discordapp.com/attachments/948752264212922418/988104867920875570/Group_14.png' align="center" alt="usuario1"  width="500px"> 
</div>
<br>
<div align="center">
  <img src='https://cdn.discordapp.com/attachments/948752264212922418/988104868147380345/Group_15.png' align="center" alt="usuario2"  width="500px"> 
</div>
<br>
<div align="center">
  <img src='https://cdn.discordapp.com/attachments/948752264212922418/988104867660824677/Group_13.png' align="center" alt="usuario3"  width="500px"> 
</div>
<br>
<div align="center">
  <img src='https://cdn.discordapp.com/attachments/948752264212922418/988104868348702761/Group_16.png' align="center" alt="usuario4"  width="500px"> 
</div>

---
## 5. Definição do produto e design

### Proto Personas

<div align="center">
  <img src='https://cdn.discordapp.com/attachments/948752264212922418/988105335292198912/Proto_Persona_1.png' align="center" alt="protopersona1"  width="500px"> 
</div>
<br>
<div align="center">
  <img src='https://cdn.discordapp.com/attachments/948752264212922418/988105335497715732/Proto_Persona_2.png' align="center" alt="protopersona2"  width="500px"> 
</div>
<br>
<div align="center">
  <img src='https://cdn.discordapp.com/attachments/948752264212922418/988105335724183563/Proto_Persona_3.png' align="center" alt="protopersona3"  width="500px"> 
</div>


### Protótipo de Alta fidelidade

O Protótipo foi criado pelo [FIGMA](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4at2Me9ArF59c95ezHIaqH%2FBurguerQueen%3Fnode-id%3D41%253A162)

<div align="center">
  <img src='https://cdn.discordapp.com/attachments/975577499729805343/988171659372556308/Picsart_22-06-19_17-00-38-992.gif' align="center" alt="prototipos"  width="400px"> 
</div>

### Testes 
Todos os componentes criados possuem testes próprios e também suas respectivas funções. Os testes cobrem a maioria das funcionalidades do projeto:

<div align="center">
  <img src='https://cdn.discordapp.com/attachments/975577499729805343/988173595060621373/unknown.png' align="center" alt="prototipos"  width="400px"> 
</div>

### Testes de Usabilidade

Os testes de usabilidade estão disponíveis para leitura, [clicando aqui](https://docs.google.com/document/d/1Vyx8WtS3_RfljnOvgE8bHnBTNSVN1WOOsc2PZZyClIM/edit?usp=sharing).

Após cada teste de usabilidade foram geradas tarefas que se tornarão em futuras issues para o projeto. 

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

