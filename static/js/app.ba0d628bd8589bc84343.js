webpackJsonp([1],{"9M+g":function(a,t){},Abkf:function(a,t){},DCcp:function(a,t){},DHqm:function(a,t){},F99n:function(a,t){},NHnr:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("7+uW"),s=e("Tqaz");e("qb6w"),e("9M+g");r.default.use(s.a),r.default.use(s.b);var i={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},i,!1,function(a){e("F99n")},null,null).exports,n={render:function(){var a=this.$createElement,t=this._self._c||a;return t("b-card",{staticClass:"image-card ",staticStyle:{"max-width":"20rem"},attrs:{title:this.title,"img-src":this.image,"img-alt":this.alt,"img-top":"",tag:"article"}},[t("b-card-text",[this._v("\n   "+this._s(this.desc)+"\n  ")])],1)},staticRenderFns:[]},c=e("VU/8")({props:["title","image","alt","card_class","desc"]},n,!1,null,null,null).exports,d={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("b-navbar",{attrs:{type:"dark",variant:"dark",fixed:""}},[e("b-navbar-nav",[e("b-nav-item",{staticClass:"text-center",on:{click:function(t){return a.$router.push("/")}}},[a._v("Home")])],1)],1)],1)},staticRenderFns:[]};var l=e("VU/8")({},d,!1,function(a){e("Abkf")},"data-v-d5cec744",null).exports,m={name:"HelloWorld",data:function(){return{image_card_local:[{src:"https://drive.google.com/uc?export=view&id=1rl3RgWFu_VYUlNlj9Y2XYG3SCz0uDpt-"},{src:"https://drive.google.com/uc?export=view&id=19mSrBevky7pAqtFF2bqCgfNhlQ5j3kHC"},{src:"https://drive.google.com/uc?export=view&id=1H9XSbGNxIUGKlxeAP8wXlRm5r8ttWPwu"},{src:"https://drive.google.com/uc?export=view&id=1tJsJR-PJbp-2-46cnji_0cD7X7in76-f"},{src:"https://drive.google.com/uc?export=view&id=1XBOw1kS7Vy-n4kLclZBhV8B9w3X_sIva"},{src:"https://drive.google.com/uc?export=view&id=1TaVU1CNVAqP8jqN_a_szkd49GaCuAh5Q"},{src:"https://drive.google.com/uc?export=view&id=1wr7Kmkx55bhSQ1aN2oK5OzZ1IHv1lm8q"}]}},components:{Header:l,Cards:c},computed:{},methods:{scrollIntoPage:function(a){a=document.getElementById("paragraph-fadeIn").getBoundingClientRect().y-80,window.scrollTo(0,a)}}},u={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("Header"),a._v(" "),e("div",{staticClass:"desce-jumbo"},[e("b-jumbotron",{attrs:{"text-variant":"dark",header:"Galvão Elétrica",lead:"Eletricista Residencial, Predial e Industrial",id:"banner-fadeIn"}},[e("b-button",{attrs:{variant:"danger",href:"#"},on:{click:a.scrollIntoPage}},[a._v("Mais informações")])],1)],1),a._v(" "),e("div",{staticClass:"container-fluid"},[e("h3",{attrs:{id:"paragraph-fadeIn"}},[a._v("\n      Serviço de qualidade há mais de 25 anos no mercado.\n    ")]),a._v(" "),e("b-icon",{staticClass:"h2",attrs:{icon:"tools"}}),a._v(" "),e("b-icon",{staticClass:"h2",attrs:{icon:"lightning"}}),a._v(" "),e("br"),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"paragraph-fadeIn"}},[a._v("Realizamos serviços em:")]),a._v(" "),e("div",[e("b-card",{staticClass:"cards-container",staticStyle:{"max-width":"20rem"},attrs:{title:"Residências","img-src":a.image_card_local[0].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n          Instalações elétricas de baixa tensão, seguindo a norma NBR 5410 da\n          ABNT, garantindo sua segurança\n        ")])],1),a._v(" "),e("b-card",{staticClass:"cards-container",staticStyle:{"max-width":"20rem"},attrs:{title:"Comércios","img-src":a.image_card_local[1].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n          Serviços feitos prezando a excelência visando melhoria na qualidade\n          e funcionalidade do seu comércio.\n        ")])],1),a._v(" "),e("b-card",{staticClass:"cards-container",staticStyle:{"max-width":"20rem"},attrs:{title:"Prédios","img-src":a.image_card_local[2].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n          Agregando segurança a edifícios e prédios, visando o bem estar das\n          pessoas.\n        ")])],1)],1),a._v(" "),e("br"),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"paragraph-fadeIn"}},[a._v("Também apresentamos soluções em:")]),a._v(" "),e("div",[e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Serviços de automação","img-src":a.image_card_local[3].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n          Reduza custos, garanta a segurança, e traga melhor qualidade na sua\n          produção através da automação\n        ")]),a._v(" "),e("b-button",{attrs:{variant:"warning"},on:{click:function(t){return a.$router.push("/servicos/automacao")}}},[a._v("Saiba mais")])],1),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Execução de projetos elétricos","img-src":a.image_card_local[4].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n          Um projeto elétrico bem articulado influencia positivamente em todas\n          as etapas de uma instalação elétrica\n        ")]),a._v(" "),e("b-button",{attrs:{variant:"warning"},on:{click:function(t){return a.$router.push("/servicos/projetos-eletricos")}}},[a._v("Saiba mais")])],1),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Projetos para padrão de entrada de energia","img-src":a.image_card_local[5].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n          Instalação do padrão de entrada, de acordo com as concessionárias\n          responsáveis pela distribuição de energia elétrica da sua região\n        ")]),a._v(" "),e("b-button",{attrs:{variant:"warning"},on:{click:function(t){return a.$router.push("/servicos/padrao-entrada")}}},[a._v("Saiba mais")])],1)],1),a._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-md-center"},[e("b-card",{staticClass:"card-emergency card-img-emergency",attrs:{title:"Atendimento de energência 24h","img-src":a.image_card_local[6].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n            Atendimento de emergência 24 horas, perzando sua segurança e a\n            qualidade dos nossos serviços\n          ")]),a._v(" "),e("b-button",{attrs:{variant:"warning"},on:{click:function(t){return a.$router.push("/servicos/emergencia")}}},[a._v("Saiba mais")])],1)],1)])],1)],1)},staticRenderFns:[]};var v=e("VU/8")(m,u,!1,function(a){e("uSjZ")},null,null).exports,p=e("mvHQ"),g=e.n(p),_=e("mtWM"),h=e.n(_),b={data:function(){return{selected:null,form:{name:""}}},methods:{sendMail:function(){localStorage.setItem("form",g()(this.form)),h.a.post("../../api/mail.php").then(function(a){console.log(a.data)}).catch(function(a){console.log(a.data)})},hideModal:function(){this.$root.$emit("bv::hide::modal","modal-1","#btnShow")}}},f={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("form",{staticClass:"form-contato",on:{submit:a.sendMail}},[e("span",[a._v("Nome:")]),a._v(" "),e("label",{attrs:{for:""}},[e("b-form-input",{attrs:{type:"text",name:"name"},model:{value:a.form.name,callback:function(t){a.$set(a.form,"name",t)},expression:"form.name"}})],1),a._v(" "),e("b-button",{staticClass:"btn-modal-contato",attrs:{variant:"outline-danger"},on:{click:a.hideModal}},[a._v("Cancelar")]),a._v(" "),e("b-button",{staticClass:"btn-modal-contato",attrs:{variant:"outline-success",type:"submit"}},[a._v("Enviar")])],1)])},staticRenderFns:[]};var C={components:{Contato:e("VU/8")(b,f,!1,function(a){e("Tv2T")},null,null).exports}},x={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",[t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn-contato",attrs:{variant:"warning"}},[this._v("Preencha o formulário, responderemos sua solicitação o mais rápido\n    possíve!")]),this._v(" "),t("b-modal",{staticClass:"text-center",attrs:{id:"modal-1","hide-footer":"",title:"Envie uma mensagem!"}},[t("Contato")],1)],1)},staticRenderFns:[]};var w=e("VU/8")(C,x,!1,function(a){e("DCcp")},"data-v-820043c2",null).exports,j={render:function(){var a=this.$createElement;return(this._self._c||a)("b-jumbotron",{class:this.img_class,attrs:{"text-variant":this.text_variant,header:this.title,lead:this.lead}})},staticRenderFns:[]},S=e("VU/8")({props:["text_variant","title","lead","img_class"]},j,!1,null,null,null).exports,q={components:{JumbotronBanner:S,Header:l,ModalContato:w}},E={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",[t("Header"),this._v(" "),t("div",{staticClass:"desce-jumbo"},[t("JumbotronBanner",{staticClass:"padrao-entrada",attrs:{title:"Projetos para padrão de entrada de energia",lead:"Porque fazer e qual a imprtância?","text-variant":"dark"}})],1),this._v(" "),this._m(0),this._v(" "),t("ModalContato")],1)},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"container"},[t("p",{staticClass:"paragraph"},[this._v("\n      Um projeto de padrão de entrada de energia tem como objetivo a concessão\n      de energia elétrica da concessionária para sua casa, de modo a garantir\n      a segurança e uma boa eficiência energética.\n    ")]),this._v(" "),t("p",{staticClass:"paragraph"},[this._v("\n      As informações técnicas para a montagem e instalação correta do padrão\n      de entrada da residência, serão disponibilizadas pelas concessionárias\n      responsáveis pela distribuição de energia elétrica da sua região, cidade\n      ou estado.\n    ")]),this._v(" "),t("p",{staticClass:"paragraph"},[this._v("\n      Elaboramos projetos e instalação com até 3 medidores de entrada, e\n      também executamos projetos já elaborados com mais de 3 medidores.\n    ")])])}]};var k=e("VU/8")(q,E,!1,function(a){e("rSD8")},null,null).exports,I={components:{JumbotronBanner:S,Header:l,ModalContato:w}},H={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",[t("Header"),this._v(" "),t("div",{staticClass:"desce-jumbo"},[t("JumbotronBanner",{staticClass:"projeto-eletrico",attrs:{title:"Execução de projetos elétricos",lead:"Porque fazer e qual a importância?","text-variant":"dark"}})],1),this._v(" "),this._m(0),this._v(" "),t("ModalContato")],1)},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"container"},[t("p",{staticClass:"paragraph"},[this._v("\n      Um projeto elétrico tem como objetivo viabilizar a segurança da\n      instalação, e oferece melhor eficiência energética. Também evita\n      desperdício de materiais, e transtornos decorrentes de uma execução não\n      adequada ou uma instalação fora das normas.\n    ")]),this._v(" "),t("p",{staticClass:"paragraph"},[this._v("\n      Trabalhamos com execução de projetos elétricos já elaborados, entre em\n      contato para saber mais.\n    ")])])}]};var R=e("VU/8")(I,H,!1,function(a){e("u6wr")},null,null).exports,$={components:{JumbotronBanner:S,Header:l,ModalContato:w}},A={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("Header"),a._v(" "),e("div",{staticClass:"desce-jumbo"},[e("JumbotronBanner",{staticClass:"automacao",attrs:{title:"Serviços de automação",lead:"Porque fazer e onde se aplica?","text-variant":"dark"}})],1),a._v(" "),e("div",{staticClass:"container"},[e("p",{staticClass:"paragraph"},[a._v("\n      A automação, através de meios tecnológicos, dispensa trabalhos braçais,\n      fazendo com que as atividades ganhem mais conforto, agilidade e\n      eficiência.\n    ")]),a._v(" "),e("p",{staticClass:"paragraph"},[a._v("\n      Soluções de automação elétrica podem ser aplicadas na indústria, em\n      casas, comércios, prédios, e até chácaras. Algumas aplicações comuns em\n      que se encaixam sistemas de automação elétrica são:\n    ")]),a._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-md-center"},[e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Bombas de recalque","img-src":"https://drive.google.com/uc?export=view&id=12zfOOqC4mLnPOPm8dFV4Vz5NkkxyN1aR","img-alt":"Image","img-top":"",tag:"article"}}),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Cisternas e poços","img-src":"https://drive.google.com/uc?export=view&id=1RFJt-7GxT6eSEMWbeu3biWe7Zr7D4_Jo","img-alt":"Image","img-top":"",tag:"article"}}),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Alarme de incêndio","img-src":"https://drive.google.com/uc?export=view&id=1rzmzS-8qmKMyO1XNUmHmOJhiE26deX2e","img-alt":"Image","img-top":"",tag:"article"}}),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Partida de motores","img-src":"https://drive.google.com/uc?export=view&id=1ffL-UJHfO-The-HQhs243tsKe_PUFuwB","img-alt":"Image","img-top":"",tag:"article"}})],1)]),a._v(" "),e("p",{staticClass:"paragraph text-center"},[a._v("\n      Trabalhamos com soluções de automação, entre em contato para saber mais.\n    ")])]),a._v(" "),e("ModalContato")],1)},staticRenderFns:[]};var P=e("VU/8")($,A,!1,function(a){e("s5qS")},"data-v-47c1edfd",null).exports,U={components:{JumbotronBanner:S,Header:l,ModalContato:w}},y={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",[t("Header"),this._v(" "),t("div",{staticClass:"desce-jumbo"},[t("JumbotronBanner",{staticClass:"emergencia",attrs:{title:"Atendimento de emergência",lead:"","text-variant":"dark"}})],1),this._v(" "),this._m(0),this._v(" "),t("ModalContato")],1)},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("p",{staticClass:"paragraph"},[a._v("\n      Atendemos emergências em caso de:\n      "),e("ul",[e("li",[a._v("Anomalias da rede elétrica")]),a._v(" "),e("li",[a._v("Queda total ou parcial de energia")]),a._v(" "),e("li",[a._v("Lâmpada piscando")]),a._v(" "),e("li",[a._v("Tomadas apresentando mau funcionamento")])])]),a._v(" "),e("p",{staticClass:"paragraph"},[a._v("\n      Trabalhamos com execução de projetos elétricos já elaborados, entre em\n      contato para saber mais.\n    ")])])}]};var F=e("VU/8")(U,y,!1,function(a){e("DHqm")},"data-v-26c66d36",null).exports,M=e("/ocq");r.default.use(M.a);var z=[{path:"/",name:"HelloWorld",component:v},{path:"/servicos/padrao-entrada",name:"PadraoEntrada",component:k},{path:"/servicos/projetos-eletricos",name:"ProjetosEletricos",component:R},{path:"/servicos/automacao",name:"Automacao",component:P},{path:"/servicos/emergencia",name:"Emergencia",component:F}],B=new M.a({routes:z,mode:"history"}),V=e("NYxO");r.default.use(V.a);var T=new V.a.Store({state:{},getters:{},actions:{},modules:{}});r.default.config.productionTip=!1,new r.default({el:"#app",router:B,store:T,components:{App:o},template:"<App/>"})},Tv2T:function(a,t){},qb6w:function(a,t){},rSD8:function(a,t){},s5qS:function(a,t){},u6wr:function(a,t){},uSjZ:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.ba0d628bd8589bc84343.js.map