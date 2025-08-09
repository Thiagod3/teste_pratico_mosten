import { useState } from "react";
import posterPlaceholder from '../assets/posterPlaceholder.png'
import "../styles/modalRegister.css";

export default function ModalRegister({ onClose, onSave }) {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const novoFilme = {
      id: Date.now().toString(),
      Title: titulo,
      Type: tipo,
      Description: descricao,
      Poster: imagem || posterPlaceholder,
      gostei: 0,
      naoGostei: 0,
    };

    onSave(novoFilme);
    onClose();
  }

  return (
    <div className="modal-overlay">
        <div className="modal">
            <h2>Cadastrar Novo Filme/Série</h2>
            <div className="modal-info">
                <p>*</p>
                <h3>Obrigatória</h3>
            </div>
            <form onSubmit={handleSubmit}>                
                <div>
                    <input
                        type="text"
                        placeholder="Título*"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                    <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    required
                    >
                        <option value="">Selecione o tipo*</option>
                        <option value="movie">Filme</option>
                        <option value="series">Série</option>
                    </select>
                    <input
                        type="text"
                        placeholder="URL da imagem*"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    ></textarea>    
                </div>
                <div className="modal-actions">
                    <button type="submit" className="modal-btns">Salvar</button>
                    <button type="button" onClick={onClose} className="modal-btns">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}
