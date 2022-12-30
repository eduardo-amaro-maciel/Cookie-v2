/**
 * Cookies Consent 
 * 
 * Nome: Eduardo Amaro Maciel
 * Email: eduardo.amaro164@gmail.com
 * Date: 20/12/2022
 * 
 * - Extensão recomendada para uso no VSCode: 'es6-string-html'
 */


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * CONFIGURAÇÕES DE AMBIENTE
 */
const BASE_URL = 'https://stg-backoffice.edna.center';
const TRACK_ID_KEY = '_dna_sessid';
const INLINE_MODE = Boolean(document.querySelector('cookie-tool').getAttribute('inline'));
const TOKEN = document.querySelector('cookie-tool').getAttribute('token');
const latitude = '';
const longitude = '';

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
var cookieTemplate = document.createElement('template');
var cookieStyle = document.createElement('style');
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
function biuldCookieTool({ result }) {

   const {
      empresa,
      resumo_tarja,
      exibir_aba_politica_privacidade,
      exibir_aba_cookies,
      exibir_aba_dados_contato,
      deve_enviar_cookies,
      deve_iniciar_aberta,
      deslocamento_final_pagina,
      deslocamento_lateral_pagina,
      posicao_tarja,
      posicao_ao_minimizar,
      deslocalmento_final_ao_minimizar,
      deslocalmento_lateral_ao_minimizar,
      cor_primaria,
      logo_cliente,
      cookie
   } = result

   cookieStyle.innerHTML += /* css */`

   :host {
      --cor-primaria: ${cor_primaria};
      --cor-branca: #fff;
      --cor-scroll: #C8CCD0;
      --cor-verde: #17bd17;
      --cor-vermelha: #ff3b3b;
      --cor-branco-2: #f0f4f7;
   }

   * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      z-index: 999;
      font-family: Poppins;
   }

   *::selection {
      color: var(--cor-branca);
      background-color: var(--cor-primaria);
   }

   *::-webkit-scrollbar {
      width: 8px;
      height: 12px;
   }

   *::-webkit-scrollbar-track {
      background: var(--cor-branca);
   }
      
   *::-webkit-scrollbar-thumb {
      background-color: var(--cor-scroll);
      border-radius: 10px;
      border: 1px solid var(--cor-scroll);
   }

   .flex {
      display: flex;
   }

   .mini-card-container {
      width: 100%;
      position: absolute;
      bottom: 15px;
      padding: 0 10px;
      align-items: center;
      justify-content: center;
   }

   .mini-card-container .mini-card {
      width: 100%;
      max-width: 820px;
      padding: 20px;
      background: var(--cor-branca);
      box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
      border-radius: 8px;
   }

   .mini-card-container .mini-card .intro {
      justify-content: space-between;
   }

   .mini-card-container .mini-card .intro span {
      font-size: 14px;
      font-weight: bold;
   }

   .mini-card-container .mini-card .intro img {
      width: 45px;
   }

   .mini-card-container .mini-card .description {
      margin-top: 15px;
   }

   .mini-card-container .mini-card .description span {
      font-size: 14px;
   }

   .mini-card-container .mini-card .buttons {
      width: 100%;
      align-items: center;
      margin-top: 20px;
   }

   .mini-card-container .mini-card .buttons .left {
      flex: 1;
      gap: 10px;
   }

   .mini-card-container .mini-card .buttons .right {
      gap: 20px;
   }

   .btn-primary {
      font-weight: 600;
      border: none;
      border-radius: 50px;
      background: var(--cor-primaria);
      color: var(--cor-branca);
      padding: 8px 15px;
      cursor: pointer;
   }

   .btn-secondery {
      cursor: pointer;
      font-weight: 600;
      border: 2px solid var(--cor-primaria);
      border-radius: 50px;
      background: transparent;
      color: var(--cor-primaria);
      padding: 8px 15px;
   }

   .btn-primary:hover  {
      opacity: .9;
      cursor: pointer;
   }

   .btn-default {
      background: transparent;
      border: none;
      color: var(--cor-primaria);
   }

   .btn-default:hover  {
      text-decoration: underline;
      cursor: pointer;
   }

   /* card grande  */
   .section-wrapper {
      max-width: 820px;
   }

   .section-wrapper > .content {
      margin-top: 20px;
      margin-bottom: 40px;
      text-align: center;
   }

   .section-wrapper > .content h2 {
      font-size: 2.5rem;
      margin-bottom: 10px;
   }

   .section-wrapper > .content p {
      font-size: 1.2rem;
   }

   .tab-wrapper {
      border-radius: 8px;
      max-height: 616px;
      overflow: hidden;
      max-width: 820px;
      width: 100%;
      height: 100%;
      flex-direction: column;
   }

   .tab-wrapper .actions {
      width: 100%;
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
      padding: 4px 12px;
      align-items: center;
      gap: 20px;
      backdrop-filter: blur(1px);
   }

   .tab-wrapper .actions .left {
      flex: 1;
      text-align: center;
      margin-left: 55px;
   }

   .tab-wrapper .actions .left span {
      color: var(--cor-branca);
      flex: 1; 
      text-align: center;
      font-size: 12px;
   }

   .tab-wrapper .actions .right {
      gap: 10px;
   }

   .maximize-modal {
      max-height: 100%;
      max-width: 100%;
   }

   .tab-wrapper .actions .right .maximize-button {
      border-radius: 6px;
      background-color: #888888;
      cursor: pointer;
      padding: 1px;
   }

   .tab-wrapper .actions .right .close-button {
      border-radius: 6px;
      background-color: var(--cor-vermelha);
      cursor: pointer;
      padding: 1px;
   }

   .tab-wrapper .tab-btns {
      justify-content: space-between;
      align-items: center;
   }

   .tab-wrapper .tab-btns svg {
      margin-top: 8px;
      position: relative;
      z-index: -1;
   }

   .tab-wrapper .tab-btns .inner-text {
      position: relative;
      z-index: -1;
   }

   .tab-wrapper .tab-btns .btn {
      border: none;
      outline: none;
      background-color: var(--cor-primaria);
      color: var(--cor-branca);
      padding: 12px 12px 2px 12px;
      width: 100%;
      cursor: pointer;
      font-size: 14px;
      transition: 200ms linear;
      font-weight: 500;
      height: 100%;
   }

   .tab-wrapper .tab-btns .tab-btn.active {
      background-color: var(--cor-branca);
      color: var(--cor-primaria);
      font-weight: 600;
   }

   :host(.active) {
      background: var(--cor-branca);
      color: var(--cor-primaria);
   }

   .tab-wrapper .tab-contents {
      padding: 13px 30px 30px 30px;
      height: 100%;
      overflow-y: scroll;
      background-color: #fff;
   }

   .tab-wrapper .tab-contents h4 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 10px;
   }

   .tab-wrapper .tab-contents p {
      font-size: 16px;
      font-weight: 300;
      letter-spacing: 0.15px;
   }

   .tab-contents .content {
      display: none;
      height: 100%;
   }

   .tab-contents .content.active {
      display: block;
      animation-name: fadeIn;
      animation-duration: 400ms;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
   }

   .tab-contents .content .tab-intro {
      margin-bottom: 20px;
   }

   @keyframes fadeIn {
      from {
         opacity: 0;
         transform: translateY(2px);
      }
      to {
         opacity: 1;
         transform: translateY(0);
      }
   }

   .modal {
      position: fixed;
      top: 0;
      display: none;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
      z-index: 9999;
   }

   .show-modal {
      display: flex;
      opacity: 1;
      visibility: visible;
      transform: scale(1.0);
      transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
      backdrop-filter: blur(2px);
      padding: 10px;
   }

   :host(.show-modal) {
      padding: 10px;
      display: flex;
      opacity: 1;
      visibility: visible;
      transform: scale(1.0);
      transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
   }

   .popup-lateral {
      position: absolute;
      bottom: 20px;
      left: 20px;
      height: 50px;
      width: 50px;
      background-color: var(--cor-primaria);
      background-image: url('./img/cookie-logo.svg');
      background-size: 195px;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: block;
      z-index: 9999999;
      cursor: pointer;
   }

   .mini-card-container-show {
      display: none;
   }

   :host(.mini-card-container-show) {
      display: none;
   }

   .inner-tab-content {
      padding-bottom: 25px;
   }

   /* accordion  */

   .accordion-container .accordion {
      width: 100%;
      cursor: pointer;
      padding: 0px 0px 0px 45px;
      text-align: start;
      font-weight: bold;
      color: var(--cor-primaria);
      background-color: transparent;
      transition: 0.5s ease-in-out;
      position: relative;
      margin-top: 15px;
      border-radius: 8px;
      background-image: url('./img/arrow-1.svg');
      background-position: 10px;
      background-repeat: no-repeat;
      align-items: center;
      background-color: var(--cor-branco-2);
      border: 2px solid transparent;
      align-items: center;
      background-color: var(--cor-branco-2);
   }

   .accordion-container .active-accordion {
      background-image: url('./img/arrow-2.svg');
   } 

   .accordion-container .panel {
      overflow: hidden;
      max-height: 0;
      transition: 0.5s ease-in-out;
      background-color: var(--cor-branco-2);
      margin-top: -3px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
   }

   .accordion-container .ac-gap-10 {
      gap: 10px;
   }

   .accordion .ac-left {
      flex: 3;
   }

   .accordion .ac-right {
      min-height: 47px;
      align-items: center;
      justify-content: center;
      flex: 1.4;
   }

   .accordion .ac-right.ac-child .consent .radio-consent {
      display: none;
   }

   .accordion .ac-right.ac-child .consent label {
      width: 92px;
      padding: 7px 9px;
      text-align: center;
      border: 2px solid;
      border-radius: 50px;
      font-size: 14px;
   }

   .accordion .ac-right.ac-child .consent .label-cAccept {
      border-color: var(--cor-verde);
      background-color: var(--cor-branca);
      color: var(--cor-verde);
   }

   .accordion .ac-right.ac-child .consent .label-cReject {
      border-color:  var(--cor-vermelha);
      background-color: var(--cor-branca);
      color: var(--cor-vermelha);
   }

   .accordion .ac-right .radio-consent:checked ~ .label-cAccept {
      color: var(--cor-branca);
      background-color: var(--cor-verde);
   }

   .accordion .ac-right .radio-consent:checked ~ .label-cReject {
      color: var(--cor-branca);
      background-color: var(--cor-vermelha);
   }

   .accordion .ac-right.ac-child .cNecessary {
      font-size: 14px;
      color: var(--cor-verde);
   }

   .accordion-container .ac-content {
      padding: 20px;
   }

   .accordion-container .ac-content .cDescribe p {
      margin-bottom: 20px;
      font-size: 14px;
   }

   .accordion-container .panel .ac-content table {
      border-collapse: collapse;
      width: 100%;
   }

   .accordion-container .panel .ac-content tr th {
      font-size: 16px;
      padding: 12.8px 40px 12.8px 0;
      text-align: left;
   }

   .accordion-container .panel .ac-content tr td {
      font-size: 14px;
      padding: 12.8px 40px 12.8px 0;
      text-align: left;
   }

   .accordion-container .panel .ac-content thead tr:first-child {
      border-bottom: 1px solid #e9edf2;
   }

   .accordion-container .buttons {
      justify-content: space-evenly;
      margin-top: 30px;
   }

   cookie-container {
      position: fixed;
      z-index: 999999999999;
      position: fixed;
      bottom: 1%;
      left: 0;
      right: 0;
   }

   #inner-tab-content-3 .requests {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      background-color: var(--cor-branco);
      border-radius: 8px;
   }

   #inner-tab-content-3 .requests .grid-1 { grid-area: 1 / 1 / 2 / 2; }
   #inner-tab-content-3 .requests .grid-2 { grid-area: 1 / 2 / 2 / 3; }
   #inner-tab-content-3 .requests .grid-3 { grid-area: 2 / 1 / 3 / 2; }
   #inner-tab-content-3 .requests .grid-4 { grid-area: 2 / 2 / 3 / 3; }
   #inner-tab-content-3 .requests .grid-5 { grid-area: 3 / 1 / 4 / 2; }
   #inner-tab-content-3 .requests .grid-6 { grid-area: 3 / 2 / 4 / 3; }
   #inner-tab-content-3 .requests .grid-7 { grid-area: 4 / 1 / 5 / 3; }

   #inner-tab-content-3 .requests .grid-child {
      flex-direction: column;
      gap: 8px;
   }

   #inner-tab-content-3 .requests .grid-child.r-label {

   }
   
   #inner-tab-content-3 .requests .grid-child .r-input {
      padding: 10px;
      border-radius: 8px;
      border: 0;
      outline: 0;
      width: 100%;
      background-color: var(--cor-branco);
      border: 1.6px solid var(--cor-primaria);
   }

   #inner-tab-content-3 .requests .grid-child textarea {
      max-width: 100%;
      min-height: 100px;
   }

   #inner-tab-content-3 .options {
      justify-content: end;
      margin-top: 20px;
   }
   `;

   cookieTemplate.innerHTML +=  /* html */`

      <div class="main-container">

         <!-- mini popup --->
         ${false ?
            /* html */`
               <div>teste</div>
            `
            :
            /* html */`
               <div class="popup-lateral">
                  <!--<img src="./img/cookie-logo.svg">-->
               </div>
            `
         }




         <!-- mini card -->
         <div class="mini-card-container flex">
            <div class="mini-card">
               <div class="intro flex">
                  <span><b>🍪</b> Central de Privacidade e de Cookies ${empresa}</span>
                  <a href="https://edna.center/?src=tarja-${TOKEN}"><img src="${logo_cliente}"/></a>
               </div>
               <div class="description">
                  <span>${resumo_tarja}</span>
               </div>
               <div class="buttons flex">
                  <div class="left flex">
                     <button class="btn-primary">Entendi, continuar</button>
                     <button class="btn-secondery trigger" data-to="tab-content-1">Escolher detalhadamente</button>
                  </div>
                  <div class="right flex">
                     <button class="btn-default trigger" data-to="tab-content-2">Política de Privacidade</button>
                     <button class="btn-default trigger" data-to="tab-content-4">Contato com o DPO</button>
                  </div>
               </div>
            </div>
         </div>




         <!-- box card -->
         <div class="modal">
            <div class="tab-wrapper flex">
               <div class="actions flex">
                  <div class="left">
                     <span>Central de Privacidade e de Cookies - ${empresa}</span>
                  </div>
                  <div class="right flex">
                     <img class="maximize-button" src="./img/maximize.svg" />
                     <img class="close-button" src="./img/x.svg" />
                  </div>
               </div>
               <div class="tab-btns flex">
                  <button class="btn tab-btn active" data-target="tab-content-1">
                     <span class="inner-text">Política <br> de Cookies <br></span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                  </button>
                  <button class="btn tab-btn" data-target="tab-content-2">
                     <span class="inner-text">Política de <br> Privacidade <br></span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </button>
                  <button class="btn tab-btn" data-target="tab-content-3">
                     <span class="inner-text">Solicitações dos <br> Titulares de Dados <br></span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </button>
                  <button class="btn tab-btn" data-target="tab-content-4">
                     <span class="inner-text">Contato <br> com o DPO <br></span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
               </div>
               <div class="tab-contents">
                  <div class="content active" id="tab-content-1">
                  
                  </div>
                  <div class="content" id="tab-content-2">
                  
                  </div>
                  <div class="content" id="tab-content-3">
                  
                  </div>
                  <div class="content" id="tab-content-4">
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   `;
/**
* 
* 
* 
* 
* 
* 
* 
*/
   class CookieTool extends HTMLElement {

      constructor() {
         super();
         const shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(cookieStyle);
         shadow.appendChild(cookieTemplate.content.cloneNode(true));
      }

      connectedCallback() {

         this.appendFont();
         this.setPopup();
         this.setTabsNavigate();
         this.setModal();
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      setActiveTtab() {
         
         let tabIDActive = document.querySelector('cookie-tool').shadowRoot.querySelector('.tab-btns button.active').dataset.target;

         if (tabIDActive == 'tab-content-1') {
            this.tab_1();
         }

         if (tabIDActive == 'tab-content-2') {
            this.tab_2();
         }

         if (tabIDActive == 'tab-content-3') {
            this.tab_3();
         }

         if (tabIDActive == 'tab-content-4') {
            this.tab_4();
         }
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      tab_1() {

         function render(data, that) {

            const { result } = data

            let tabContent = document.querySelector('cookie-tool').shadowRoot.querySelector(`.tab-contents #tab-content-1`);

            tabContent.innerHTML = ''
            tabContent.innerHTML += /* html */`
               <div class="tab-intro">
                  <h4>Política de Cookies</h4>
                  <p>Esses são os Cookies que usamos em nosso site</p>
               </div>
   
               <div class="accordion-container inner-tab-content"></div>
            `
   
            let containerAccordion = document.querySelector('cookie-tool').shadowRoot.querySelector(`#tab-content-1 .accordion-container`);
            result.categorias.map((element, index) => {
               containerAccordion.innerHTML += /* html */`
   
                  ${element.always_active ?
                     /* html */`
                     <button type="button" class="accordion flex ac-gap-10">
                        <div class="ac-left ac-child">
                           <h3 class="accordion-title">${element.name}</h3>
                        </div>
                        <div class="ac-right ac-child flex ac-gap-10">
                           <span class="cNecessary">Sempre ativos</span>
                        </div>
                     </button>
   
                     <div class="panel">
                        <div class="ac-content">
                           <div class="cDescribe">
                              <p>${element.description}</p>
                           </div>
                           <table>
                              <thead>
                                    <tr>
                                       <th scope="col">Nome</th>
                                       <th scope="col">Dominio</th>
                                       <th scope="col">Descrição</th>
                                       <th scope="col">Retenção</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    ${element.cookies.map((cookie, index) => {
                                       return (
                                          /* html */`
                                          <tr data-tr-category-id="${element.id}">
                                             <td>${cookie.cookie_name}</td>
                                             <td>*</td>
                                             <td>${cookie.cookie_description}</td>
                                             <td>*</td>
                                          </tr>
                                          `
                                       )
                                    }).join("")}
                              </tbody>
                           </table>
                        </div>
                     </div>  
                     `
                     :
                     /* html */`
                     <button type="button" class="accordion flex ac-gap-10">
                        <div class="ac-left ac-child">
                           <h3 class="accordion-title">${element.name}</h3>
                        </div>
                        <form class="ac-right ac-child flex ac-gap-10">
                           <div class="consent flex">
                              <input 
                                 type="radio" 
                                 name="id-01" 
                                 value="Aceito" 
                                 id="id-sim-01" 
                                 class="radio-consent input-cAccept"
                              />
                              <label for="id-sim-01" class="label-cAccept">Aceitar ✔</label>
                           </div>
                           <div class="consent flex"> 
                              <input 
                                 type="radio" 
                                 name="id-01" 
                                 value="Negado" 
                                 id="id-nao-01" 
                                 class="radio-consent input-cReject"
                              />
                              <label for="id-nao-01" class="label-cReject">Rejeitar ✖</label>
                           </div>
                        </form>
                     </button>
   
                     <div class="panel">
                        <div class="ac-content">
                           <div class="cDescribe">
                              <p>${element.description}</p>
                           </div>
                           <table>
                              <thead>
                                    <tr>
                                       <th scope="col">Nome</th>
                                       <th scope="col">Dominio</th>
                                       <th scope="col">Descrição</th>
                                       <th scope="col">Retenção</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    ${element.cookies.map((cookie, index) => {
                                       return (
                                          /* html */`
                                          <tr data-tr-category-id="${element.id}">
                                             <td>${cookie.cookie_name}</td>
                                             <td>*</td>
                                             <td>${cookie.cookie_description}</td>
                                             <td>*</td>
                                          </tr>
                                          `
                                       )
                                    }).join("")}
                              </tbody>
                           </table>
                        </div>
                     </div>                    
                     `
                  }
               `
            });
   
            containerAccordion.innerHTML += /* html */`
               <div class="buttons flex">
                  <button class="btn-default">Rejeitar todos</button>
                  <button class="btn-default">Aceitar apenas necessários</button>
                  <button class="btn-secondery">Salvar minhas preferências</button>
                  <button class="btn-primary">Aceitar todos</button>
               </div>
            `;

            that.setAccordion()
         }

         let that = this

         fetch('./json/api-get_user_cookie_policy_content.json')
            .then(response => response.json())
            .then(response => render(response, that))
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      tab_2() {

         function render({ result }) {

            let tabContent = document.querySelector('cookie-tool').shadowRoot.querySelector(`.tab-contents #tab-content-2`);

            tabContent.innerHTML = /* html */`
               <div class="tab-intro">
                  <h4>Política de Privacidade</h4>
               </div>

               <div class="inner-tab-content">
                  ${result}
               </div>
            `;
         }

         fetch('./json/api-get_privacy_policy_content.json')
            .then(response => response.json())
            .then(response => render(response))
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      tab_3() {

         let tabContent = document.querySelector('cookie-tool').shadowRoot.querySelector(`.tab-contents #tab-content-3`);

         tabContent.innerHTML = /* html */`

            <div class="tab-intro">
               <h4>Solicitações dos Titulares de dados</h4>
               <p>Você tem alguma solicitação referente a seus dados pessoais?</p>
            </div>

            <div class="inner-tab-content" id="inner-tab-content-3">
               <div class="requests">
                  <div class="grid-1 grid-child flex">
                     <label class="r-label">Tipo de requisição</label>
                     <select class="r-input">
                        <option>Acesso aos dados</option>
                        <option>Remoção, anonimação ou bloqueio de dados</option>
                        <option>Confirmação de tratamento de dados</option>
                        <option>Correção de daods</option>
                        <option>Portabilidade de dados</option>
                        <option>Informação sobre compartilhamento de dados</option>
                        <option>Revogação de consentimento</option>
                        <option>Outro</option>
                     </select>
                  </div>

                  <div class="grid-2 grid-child flex">
                     <label class="r-label">Quem é voce?</label>
                     <select class="r-input">
                        <option>Cliente</option>
                        <option>Funcionario</option>
                        <option>Fornecedor/Parceiro</option>
                     </select>
                  </div>

                  <div class="grid-3 grid-child flex">
                     <label class="r-label">Nome completo</label>
                     <input placeholder="Insira seu nome completo" type="text" class="r-input">
                  </div>
                  
                  <div class="grid-4 grid-child flex">
                     <label class="r-label">CPF</label>
                     <input placeholder="Insira seu CPF" type="text" class="r-input">
                  </div>

                  <div class="grid-5 grid-child flex">
                     <label class="r-label">Telefone</label>
                     <input placeholder="Insira seu telefone" type="text" class="r-input">
                  </div>

                  <div class="grid-6 grid-child flex">
                     <label>E-mail</label>
                     <input placeholder="Insira seu e-mail" type="text" class="r-input">
                  </div>

                  <div class="grid-7 grid-child flex">
                     <label class="r-label">Informações sobre a requisição</label>
                     <textarea placeholder="Insira a informações sobre sua solicitação" name="" rows="4" cols="50" class="r-input"></textarea>
                  </div>
               </div>
               <div class="options flex">
                  <button class="btn-primary">Enviar Solicitação</button>
               </div>
            </div>
         `;
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      tab_4() {

         function render({ result }) {

            let tabContent = document.querySelector('cookie-tool').shadowRoot.querySelector(`.tab-contents #tab-content-4`);

            tabContent.innerHTML = /* html */`
               <div class="tab-intro">
                  <h4>Contato com o DPO</h4>
               </div>

               <div class="inner-tab-content">
                  ${result}
               </div>
            `;
         }

         fetch('./json/api-get_contact_info.json')
            .then(response => response.json())
            .then(response => render(response))
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      setAccordion() {

         const accordion = document.querySelector('cookie-tool').shadowRoot.querySelectorAll(".accordion");

         accordion.forEach((element) => {
            element.addEventListener("click", function(event) {
               element.classList.toggle("active-accordion");
               let panel = element.nextElementSibling;
               if (panel.style.maxHeight) {
                  panel.style.maxHeight = null;
               } else {
                  panel.style.maxHeight = panel.scrollHeight + "px";
               }
            });
         });
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      setModal() {

         let modal = document.querySelector('cookie-tool').shadowRoot.querySelector(".modal");
         let triggers = document.querySelector('cookie-tool').shadowRoot.querySelectorAll(".trigger");
         let closeButton = document.querySelector('cookie-tool').shadowRoot.querySelector(".close-button");
         let maximizeButton = document.querySelector('cookie-tool').shadowRoot.querySelector(".maximize-button");
         let tabWrapper = document.querySelector('cookie-tool').shadowRoot.querySelector(".tab-wrapper");

         function toggleModal(event) {
            modal.classList.toggle("show-modal");
         }

         function windowOnClick(event) {
            if (event.path[0] === modal) {
               toggleModal();
            }
         }

         function toggleMaximize(event) {
            tabWrapper.classList.toggle('maximize-modal')
         }

         for (let i = 0, len = triggers.length; i < len; i++) {
            triggers[i].addEventListener("click", toggleModal);
         }

         closeButton.addEventListener("click", toggleModal);
         maximizeButton.addEventListener("click", toggleMaximize)
         window.addEventListener("click", windowOnClick);
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      setPopup() {

         function toggleMiniCard() {

            let miniCard = document.querySelector('cookie-tool').shadowRoot.querySelector(".mini-card-container");
            miniCard.classList.toggle("mini-card-container-show");
         }

         let popup = document.querySelector('cookie-tool').shadowRoot.querySelector(".popup-lateral");
         popup.addEventListener('click', toggleMiniCard)
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      appendFont() {

         const font = document.createElement("link");
         font.href = "https://fonts.googleapis.com/css?family=Poppins";
         font.rel = "stylesheet";
         document.head.appendChild(font);
      }
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
      setTabsNavigate() {

         const tabWrapper = document.querySelector('cookie-tool').shadowRoot.querySelector(".tab-wrapper");
         const tabBtns = document.querySelector('cookie-tool').shadowRoot.querySelectorAll(".tab-btn");
         const tabContents = document.querySelector('cookie-tool').shadowRoot.querySelectorAll(".tab-contents .content");
         this.setActiveTtab()
         tabWrapper.addEventListener("click", (event) => {

            const id = event.target.dataset.target;

            if (id) {
               tabBtns.forEach((btn) => {
                  btn.classList.remove("active");
                  event.target.classList.add("active");
               });
               tabContents.forEach((content) => {
                  content.classList.remove("active");
               });
               const currentContent = document.querySelector('cookie-tool').shadowRoot.getElementById(id);
               currentContent.classList.add("active");

               this.setActiveTtab()
            }
         });
      }
   }

   window.customElements.define('cookie-tool', CookieTool);
}

fetch('./json/api-get_footer_privacy_term.json')
   .then(response => response.json())
   .then(response => biuldCookieTool(response))
   .catch(error => console.log(error))