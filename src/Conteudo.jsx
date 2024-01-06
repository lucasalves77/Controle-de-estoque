import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Conteudo.scss';

import PaginaInicial from './pages/PaginaInicial';
import HistóricoMovimentaçãoEstoque from './pages/Produtos/HistóricoMovimentaçãoEstoque';
import AdicionarNovoProduto from './pages/Produtos/AdicionarNovoProduto';
import Categorias from './pages/Produtos/Categorias';
import ListaDeProdutos from './pages/Produtos/ListaDeProdutos';
import AdicionarNovoFornecedor from './pages/Fornecedores/AdicionarNovoFornecedor';
import HistóricoDeTransações from './pages/Fornecedores/HistóricoDeTransações';
import ListaDeFornecedores from './pages/Fornecedores/ListaDeFornecedores';
import HeaderInput from './components/HeaderInput';
import Header from './components/Header';

function Conteudo () {
  return (
    <div>
      <Router>
        <div className='flex'>
          <Header />
          <div className='rotas'>
            <HeaderInput />
            <Routes>
              <Route path="/" element={<PaginaInicial />} />
              <Route path="/HistóricoMovimentaçãoEstoque" element={<HistóricoMovimentaçãoEstoque />} />
              <Route path="/AdicionarNovoProduto" element={<AdicionarNovoProduto />} />
              <Route path="/Categorias" element={<Categorias />} />
              <Route path="/ListaDeProdutos" element={<ListaDeProdutos />} />
              <Route path="/AdicionarNovoFornecedor" element={<AdicionarNovoFornecedor />} />
              <Route path="/HistóricoDeTransações" element={<HistóricoDeTransações />} />
              <Route path="/ListaDeFornecedores" element={<ListaDeFornecedores />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Conteudo;
