import Stock from "@/components/Stock.vue"
import Profit from "@/components/Profit"
import ReceiveProduct from "@/components/ReceiveProduct"
import ExitProduct from "@/components/ExitProduct"
import NewProduct from "@/components/NewProduct"
import EditProduct from "@/components/EditProduct"

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
  },
  {
    path: '/adicionar-produto',
    name: 'ProdutoNovo',
    component: NewProduct
  },
  {
    path: '/editar-produto',
    name: 'EditarProduto',
    component: EditProduct
  }
]

export default routes
