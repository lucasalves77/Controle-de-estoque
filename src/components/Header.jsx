import { Link } from "react-router-dom"; 
import React, {useState } from "react"
import './Header.scss';
import { FaBoxOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";



const Header = () =>{

  const [conteudosVisiveis, setConteudosVisiveis] = useState({
    conteudo1: false, 
    conteudo2: false,
    conteudo3: false,
    conteudo4: false
  });

  const handleBotaoClick = (conteudoId) => {
    setConteudosVisiveis((prevState) => ({
      conteudo1: conteudoId === 'conteudo1' ? !prevState.conteudo1 : false,
      conteudo2: conteudoId === 'conteudo2' ? !prevState.conteudo2 : false,
      conteudo3: conteudoId === 'conteudo3' ? !prevState.conteudo3 : false,
      conteudo4: conteudoId === 'conteudo4' ? !prevState.conteudo4 : false,
    }));
  };

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  return(
    <>  
      <div className="menu">  
        <div>
          <button onClick={logout}>logout</button>
        </div>    
        <div className="botaoMais">
          <FaHouse className="iconsMenu"/>
          <Link className="headerLink" to="/">Pagina inicial</Link>     
        </div>
        <div>
          <div className="botaoMais" onClick={() => handleBotaoClick('conteudo1')} disabled={!conteudosVisiveis['conteudo1']}>
            <FaBoxOpen name="box" style={{fontSize: '20px'}} className="iconsMenu"/>
            <p>Produtos</p>
          </div>
          {conteudosVisiveis['conteudo1'] && (
          <div className="links">
            <Link className="headerLink" to="/ListaDeProdutos">Lista de produtos</Link>
            <Link className="headerLink" to="/Categorias">Categorias</Link>
            <Link className="headerLink" to="/AdicionarNovoProduto">Adicionar novo produto</Link>
            <Link className="headerLink" to="/HistóricoMovimentaçãoEstoque">Lista de produtos</Link>
          </div>
          )}
        </div>
        <div>
          <div className="botaoMais" onClick={() => handleBotaoClick('conteudo2')} disabled={!conteudosVisiveis['conteudo2']}>
            <FaUsers name="users" style={{fontSize: '20px'}} className="iconsMenu"/>
            <p>Fornecedores</p>
          </div>
          {conteudosVisiveis['conteudo2'] && (
          <div className="links">
            <Link className="headerLink" to="/ListaDeFornecedores">Lista de Fornecedores</Link>
            <Link className="headerLink" to="/AdicionarNovoFornecedor">Adicionar Novo Fornecedor</Link>
            <Link className="headerLink" to="/HistóricoDeTransações">Histórico de Transações</Link>
          </div>
          )}
          </div>
        <div>
          <div className="botaoMais" onClick={() => handleBotaoClick('conteudo3')} disabled={!conteudosVisiveis['conteudo3']}>
            <FaClipboard name="clipboard list" style={{fontSize: '20px'}} className="iconsMenu"/>
            <p>Relatorios</p>
          </div>
          {conteudosVisiveis['conteudo3'] && (
          <div className="links">
            <Link className="headerLink" to="/ListaDeProdutos">Lista de produtos</Link>
            <Link className="headerLink" to="/Categorias">Categorias</Link>
            <Link className="headerLink" to="/AdicionarNovoProduto">Adicionar novo produto</Link>
            <Link className="headerLink" to="/HistóricoMovimentaçãoEstoque">Lista de produtos</Link>
          </div>
          )}
        </div>
        <div>
          <div className="botaoMais" onClick={() => handleBotaoClick('conteudo4')} disabled={!conteudosVisiveis['conteudo4']}>
          <IoMdSettings name="setting" style={{fontSize: '20px'}} className="iconsMenu"/>
            <p>Configuracoes</p>
          </div>
          {conteudosVisiveis['conteudo4'] && (
          <div className="links">
            <Link className="headerLink" to="/ListaDeProdutos">Lista de produtos</Link>
            <Link className="headerLink" to="/Categorias">Categorias</Link>
            <Link className="headerLink" to="/AdicionarNovoProduto">Adicionar novo produto</Link>
            <Link className="headerLink" to="/HistóricoMovimentaçãoEstoque">Lista de produtos</Link>
          </div>
          )}
        </div>
      </div> 
    </>
  )
}

export default Header