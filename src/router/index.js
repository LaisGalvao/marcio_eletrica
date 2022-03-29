import Vue from "vue";
/* import Router from "vue-router"; */
import HelloWorld from "@/components/HelloWorld";

//components
import PadraoEntrada from "@/views/ServicosPrestados/PadraoEntrada";
import ProjetosEletricos from "@/views/ServicosPrestados/ProjetosEletricos";
import Automacao from "@/views/ServicosPrestados/Automacao";
import Emergencia from "@/views/ServicosPrestados/Emergencia";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  },
  {
    path: "/servicos/padrao-entrada",
    name: "PadraoEntrada",
    component: PadraoEntrada
  },
  {
    path: "/servicos/projetos-eletricos",
    name: "ProjetosEletricos",
    component: ProjetosEletricos
  },
  {
    path: "/servicos/automacao",
    name: "Automacao",
    component: Automacao
  },
  {
    path: "/servicos/emergencia",
    name: "Emergencia",
    component: Emergencia
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router
