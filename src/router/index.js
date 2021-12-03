import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

//components
import PadraoEntrada from "@/views/ServicosPrestados/PadraoEntrada";
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
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router
