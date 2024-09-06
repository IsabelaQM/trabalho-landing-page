import { useState } from 'react'
import './App.css'
import SecaoHeader from './Header/SecaoHeader/SecaoHeader'
import Secao_Produtos from './Produtos/SecaoProdutos'
import Secao_Beneficios from './Beneficios/SecaoBeneficios'
import SecaoSobreNos from './SobreNos/SecaoSobreNos'
import Secao_Localizacao from './Localizacao/SecaoLocalizacao/Secao_Localizacao'
import Secao_FAQ from './FAQ/SecaoFAQ'
import SecaoFormulario from './Formulario/SecaoFormulario/SecaoFormulario'
import SecaoFooter from './Footer/SecaoFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='secaoGeral'>
    <SecaoHeader />
    <Secao_Produtos/>
    <Secao_Beneficios/>
    <SecaoSobreNos/>
    <Secao_Localizacao/>
    <Secao_FAQ/>
    <SecaoFormulario/>
    <SecaoFooter/>
    </section>
  )
}

export default App