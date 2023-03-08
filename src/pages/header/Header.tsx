import { Home } from "../home/Home";
import { Menu } from "../menu/Menu";
import "./Header.css";
import { useState } from "react";

export function Header() {
  const [opcao, setOpcao] = useState(1);

  const chamarMenu = () => {
    setOpcao(2);
  };

  const chamarHome = () => {
    setOpcao(1);
  };
  return (
    <div>
      <header>
        <div className="superiorEsquerda">
          <a onClick={chamarHome}>
            <img className="iconHamb" src="../../src/images/img-logo.webp" />
            <h1>BURGER CHAOS</h1>
          </a>
        </div>

        <div className="meioHeader">
          <a onClick={chamarHome} className="a">
            HOME
          </a>
          <a onClick={chamarMenu} className="a">
            MENU
          </a>
        </div>

        <div className="superiorDireita">
          <p className="telefone">(47) 99999-8888</p>
          <span className="material-symbols-outlined"> shopping_cart </span>
          <span className="material-symbols-outlined"> person </span>
        </div>
      </header>
      <div>{opcao == 2 ? <Menu /> : <Home />}</div>
    </div>
  );
}
