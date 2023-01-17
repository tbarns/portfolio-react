import React from 'react'
import iconIMG from '../../assets/icon.ico'
import shoppingCart from '../../assets/shopping cart for art cart.png'
import weatherIcon from '../../assets/weather or not.png'

const Projects = () => {
  return (
    <div>
      <main id="Portfolio">
        <div class="tile is-ancestor is-horizontal p-1 m-1">


          <aside class="tile is-vertical is-parent column " id="card-1">

            <p class="title">The Brewery Locator App</p>
            <p class="subtitle">find and save local brews</p>
            <a href="https://tbarns.github.io/Brewery-Locator/" alt="link to live site for a brewery locator app">
              <figure class="image is-128x128 is-inline-block ">
                <img src={iconIMG} alt="picture of animated beer glass" />
              </figure>
            </a>
            <div class="tile is-child  m-1 column ">
              <p>The Brewery Locator App uses the google maps API in
                conjunction with the open
                brewery DB
                API to enable users to locate breweries all over the world. With a simple search of
                a
                city you
                can get
                location information as well as a deeper dive into what type of brewery each
                location
                is.</p>
              <p id="blue-text"> To view the application click the beer icon above!
              </p>
            </div>
          </aside>


        </div>


        <div class="tile is-ancestor m-3 p-2 ">
          <div class="tile">
            <section class="tile is-parent m-1" id="card-2">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child ">
                    <p class="title">Art (C)art </p>
                    <p class="subtitle">A digital gallery for every artist</p>
                  </article>
                  <div class="tile is-child">
                    <a href="https://art-cart-gui-guys-production.herokuapp.com/"
                      alt="Link to Art (c)art a website that is a digital gallery ">
                      <img class="image is-96x96" src={shoppingCart} alt="image of a shopping cart with a blank canvas inside" />
                    </a>
                    <div class="tile is-child  m-1 column ">
                      <p>Art (C)art is a digital gallery that allows artists both well know and established to present their work at no cost.  This space enables artists to connect with collectors in a way that doesn't add the burden of applying to exhibits or lugging their work to a location, potentially damaging the pieces.</p>
                      <p id="blue-text"> To view the application click the Shopping cart icon above!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="tile">
            <section class="tile is-parent m-1" id="card-3">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child ">
                    <p class="title">Application 3 </p>
                    <p class="subtitle">coming soon</p>
                  </article>
                  <article class="tile is-child">
                    <a href="https://tbarns.github.io/blank-site/"
                      alt="Website displaying block text on green background saying This application does not exist... YET!  Stay tuned!! ">
                      <img src="https://via.placeholder.com/100" alt="placeholder image" />
                    </a>

                  </article>
                </div>
              </div>
            </section>
          </div>
          <div class="tile">
            <section class="tile is-parent m-1" id="card-4">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child ">
                    <p class="title">Application 4 </p>
                    <p class="subtitle">coming soon</p>
                  </article>
                  <article class="tile is-child">
                    <a href="https://tbarns.github.io/blank-site/"
                      alt="Website displaying block text on green background saying This application does not exist... YET!  Stay tuned!! ">
                      <img src="https://via.placeholder.com/100" alt="placeholder image" />
                    </a>

                  </article>
                </div>
              </div>
            </section>
          </div>
          <div class="tile">
            <section class="tile is-parent m-1 " id="card-5">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child ">
                    <p class="title">Weather Or Not</p>
                    <p class="subtitle">A new site that generates 5 day weather forecasts</p>
                  </article>
                  <article class="tile is-child">
                    <a href="https://tbarns.github.io/weather-or-not/"
                      alt="Website that generates 5 day weather reports  ">
                      <img class="image is-96x96" src={weatherIcon} alt="placeholder image" />
                    </a>
                    <div class="tile is-child  m-1 column ">
                      <p>Weather Or Not is a simple and clean user interface that allows for a 5 day weather forecast for any city the user inputs.  Along with a temperature the application provides wind-speed, humidity and an icon the denotes the current or forecasted weather  .</p>
                      <p id="blue-text"> To view the application click the Shopping cart icon above!
                      </p>
                    </div>

                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>


      </main>
    </div>
  )
}

export default Projects