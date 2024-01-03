import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss'

import Header from "./components/Header"
import Home from './pages/Home'
import HistóricoMovimentaçãoEstoque from './pages/Produtos/HistóricoMovimentaçãoEstoque'
import AdicionarNovoProduto from './pages/Produtos/AdicionarNovoProduto'
import Categorias from './pages/Produtos/Categorias'
import ListaDeProdutos from './pages/Produtos/ListaDeProdutos'
import AdicionarNovoFornecedor from './pages/Fornecedores/AdicionarNovoFornecedor'
import HistóricoDeTransações from './pages/Fornecedores/HistóricoDeTransações'
import ListaDeFornecedores from './pages/Fornecedores/ListaDeFornecedores'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='flex'>
      <Header/>  
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/HistóricoMovimentaçãoEstoque" element={<HistóricoMovimentaçãoEstoque/>}/> 
        <Route path="/AdicionarNovoProduto" element={<AdicionarNovoProduto/>}/> 
        <Route path="/Categorias" element={<Categorias/>}/> 
        <Route path="/ListaDeProdutos" element={<ListaDeProdutos/>}/> 
        <Route path="/AdicionarNovoFornecedor" element={<AdicionarNovoFornecedor/>}/>  
        <Route path="/HistóricoDeTransações" element={<HistóricoDeTransações/>}/>  
        <Route path="/ListaDeFornecedores" element={<ListaDeFornecedores/>}/>   
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
)