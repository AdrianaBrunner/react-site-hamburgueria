import "./Menu.css";

export function Menu() {
  return (
    <main>
      <div className="main">
        <h1 id="h1">MENU BURGERS</h1>

        <div body-image1>
          <img src="../../src/images/big-burger.png" alt="" id="burger2" />
        </div>

        <div id="first-main">
          <div id="body1">
            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>SMASH LAMB CHEESE BURGER</b>
                </span>
                <span className="ingredient">
                  Lamb burger (200g), hot sauce, emmental, green lettuce
                </span>
              </div>
              <span className="price">$ 15</span>
            </div>

            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>THE LOUIS FRIED CHICKEN BURGER</b>
                </span>
                <span className="ingredient">
                  Fried chicken (100g), fermented hot sauce, pickled cucumber
                </span>
              </div>
              <span className="price">$ 17</span>
            </div>

            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>CHICKEN BURGER</b>{" "}
                </span>
                <span className="ingredient">
                  Grilled chicken (150g), Truffle mayo, onion rings, english
                  cheddar
                </span>
              </div>
              <span className="price">$ 20</span>
            </div>
          </div>

          <div id="body2">
            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>MONSTER CHEESE BURGER</b>
                </span>
                <span className="ingredient">
                  Double tenderloin (400g), fermented hot sauce, english
                  cheddar, fried egg, bacon
                </span>
              </div>
              <span className="price">$ 23</span>
            </div>

            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>LOUIS GRAND ROYALE BURGER</b>
                </span>
                <span className="ingredient">
                  Lamb burger (200g), hot sauce, emmental, green lettuce
                </span>
              </div>
              <span className="price">$ 27</span>
            </div>

            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>KOREAN CHICKEN BURGER</b>
                </span>
                <span className="ingredient">
                  Gochu janng, hot sauce, emmental
                </span>
              </div>
              <span className="price">$ 30</span>
            </div>
          </div>
        </div>

        <div id="body-image2">
          <img src="../../src/images/burger2.png" alt="" id="burger1" />
        </div>

        <div id="second-main">
          <div id="body3">
            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>CLASSIC CHICKEN BURGER</b>
                </span>
                <span className="ingredient">
                  Fried chicken (150g), cheese, honey mustard
                </span>
              </div>
              <span className="price">$ 30</span>
            </div>

            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>VEGAN BURGER</b>
                </span>
                <span className="ingredient">
                  Beets burger (100g), refried beans, sweet potato, jalapeno,
                  confit tomato, vegan mayo
                </span>
              </div>
              <span className="price">$ 30</span>
            </div>

            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>FARM HOUSE BURGER</b>
                </span>
                <span className="ingredient">
                  Pork burger (200g), hot sauce, mozzarella, pink pickled onion
                </span>
              </div>
              <span className="price">$ 31</span>
            </div>
          </div>

          <div id="body4">
            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>TRUFFLESHROOM BURGER</b>
                </span>
                <span className="ingredient">
                  Shitake burger (150g), truffle mayo, english cheddar, parmesan
                </span>
              </div>
              <span className="price">$ 32</span>
            </div>

            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>TRUFFLEMEJI BURGER</b>
                </span>
                <span className="ingredient">
                  Shimeji burger (150g), truffle mayo, truffle, english cheddar,
                  parmesan, gold warak, truffle oil
                </span>
              </div>
              <span className="price">$ 35</span>
            </div>

            <div className="burger-price">
              <div className="burger">
                <span>
                  <b>HERBIVORES BURGER</b>
                </span>
                <span className="ingredient">
                  Seasonal veggy burger (200g), spicy sauce, vegan cheese
                </span>
              </div>
              <span className="price">$ 35</span>
            </div>
          </div>
        </div>

        <div id="third-main">
          <div className="drinks">
            <h1 id="h1">DRINKS</h1>

            <div className="drink-price">
              <div className="drink">
                <span>
                  <b>SODA</b>
                </span>
                <span className="ingredient">Coke, Sprite, Pepsi (300ml)</span>
              </div>
              <span className="price">$ 5</span>
            </div>

            <div className="drink-price">
              <div className="drink">
                <span>
                  <b>BEERS</b>
                </span>
                <span className="ingredient">
                  Corona, Bud Light, Heineken (600ml)
                </span>
              </div>
              <span className="price">$ 15</span>
            </div>

            <div className="drink-price">
              <div className="drink">
                <span>
                  <b>WINES</b>
                </span>
                <span className="ingredient">Rosé, White, Red (750ml)</span>
              </div>
              <span className="price">$ 25</span>
            </div>
          </div>
          <img src="../../src/images/coke.png" alt="" id="coke" />
        </div>
      </div>
    </main>
  );
}
