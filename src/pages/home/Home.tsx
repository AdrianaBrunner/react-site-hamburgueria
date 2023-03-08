import "./Home.css";

export function Home() {
  return (
    <main>
      <div className="principal">
        <div className="classePrincipal">
          <div className="textoPrincipal">
            <p className="origin">
              <b>THE ORIGINAL BURGUER</b>
            </p>
            <h1 className="savory">SAVORY & DELICIOUS</h1>
            <p className="frase">
              Delicious burguers made from high-quality Australian beef,
              carefully processed to create a juicy and flavorful taste.
            </p>
            <a href="./source/indexMenu.html" className="menuA">
              SEE THE MENU
            </a>
          </div>

          <div className="imagensHamb">
            <img
              className="hambImagem"
              src="../../src/images/hamb.png"
              alt=""
            />
          </div>
        </div>

        <div className="botoes">
          <p className="flames">Flame Grilled Burgues</p>
          <p className="family">Family Bundles</p>
          <p className="more">Chicken And More</p>
        </div>

        <div className="cardapio">
          <div className="cl1">
            <img className="img1" src="../../src/images/hamb1.png" alt="" />

            <div className="paragrafo1">
              <p className="texto1">
                <b>SPICY BEEF BURGUER</b>
              </p>
              <br />
              <p className="texto3">
                Flame-grilled beef patties with juicy, tomatoes, crisp lettuce,
                creamy mayonese.
              </p>
              <div className="estrelinha">
                <span className="price-tag">$29</span>
                <div className="rating">
                  <span className="material-symbols-outlined"> star </span>
                  <span className="material-symbols-outlined"> star </span>
                  <span className="material-symbols-outlined"> star </span>
                  <span className="material-symbols-outlined"> star </span>
                  <span className="material-symbols-outlined"> star </span>
                  <span className="nota">5.5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cl2">
            <img className="img2" src="../../src/images/hamb2.png" alt="" />

            <div className="paragrafo2">
              <p className="texto2">
                <b>DOUBLE BEEF BURGUER</b>
              </p>
              <br />
              <p className="texto4">
                Flame-grilled beef patty topped with juicy tomatoes, crisp
                lettuce, creamy mayonese.
              </p>
              <div className="estrelinha">
                <span className="price-tag">$20</span>
                <div className="rating">
                  <span className="material-symbols-outlined"> star </span>
                  <span className="material-symbols-outlined"> star </span>
                  <span className="material-symbols-outlined"> star </span>
                  <span className="material-symbols-outlined"> star </span>
                  <span className="material-symbols-outlined"> star </span>
                  <span className="nota">5.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
