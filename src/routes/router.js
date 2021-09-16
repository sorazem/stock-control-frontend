import Stock from "@/components/Stock.vue"
import Profit from "@/components/Profit"
import ReceiveProduct from "@/components/ReceiveProduct"
import ExitProduct from "@/components/ExitProduct"

const routes = [
  {
    path: '/',
    name: 'Estoque',
    component: Stock
  },
  {
    path: '/lucro',
    name: 'Lucro',
    component: Profit
  },
  {
    path: '/entrada',
    name: 'Entrada',
    component: ReceiveProduct
  },
  {
    path: '/saida',
    name: 'Saída',
    component: ExitProduct
  }
]

export default routes
