import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//components
import PadraoEntrada from "@/views/ServicosPrestados/PadraoEntrada"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/servicos/padrao-entrada',
      name: 'PadraoEntrada',
      component: PadraoEntrada
    }
  ]
})
