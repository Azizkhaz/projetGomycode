import './Home.css'

const Home = () => {
 
    return (
      <>
   {/* Hero Section */}
   <div className="section flex" id="hero-section">
        <div className="text">
          <h1 className="primary">
            It's Not Just Food, <br />
            It's an <span>Experience</span>
          </h1>
          <p className="tertiary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
            provident dolorum. Voluptatum ducimus minima quasi unde, voluptatibus
            soluta eligendi. Enim, architecto autem.
          </p>
          
        </div>
        <div className="visual">
          <img
            src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/home-banner.png"
            alt=""
          />
        </div>
      </div>
      {/* End Hero Section */}
      {/* How It Works */}
      <div className="section" id="how-it-works">
        <h2 className="secondary">How It Works</h2>
        <div className="container flex">
          <div className="box">
            <h3>Easy Order</h3>
            <ion-icon name="timer-outline" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              non?
            </p>
          </div>
          <div className="box active">
            <h3>Best Quality</h3>
            <ion-icon name="trophy-outline" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              non?
            </p>
          </div>
          <div className="box">
            <h3>Fast Delivery</h3>
            <ion-icon name="checkmark-done-circle-outline" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              non?
            </p>
          </div>
        </div>
      </div>
      {/* End How It Works */}
      {/* About */}
      <div className="section" id="about">
        <div className="container flex">
          <div className="visual">
            <img
              src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/about.png"
              alt=""
            />
          </div>
          <div className="text">
            <div className="secondary">About Our Restaurant</div>
            <h2 className="primary">150+</h2>
            <h3 className="tertiary">Our Delicious Food</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia itaque
              saepe id hic rem doloribus quas esse voluptatibus eius sequi, possimus
              maxime dolores tempore facilis fugit porro mollitia, est consequuntur.
            </p>
           
          </div>
        </div>
      </div>
      {/* End About */}
      {/* Restaurant Menu */}
      <div className="section" id="menu">
        <div className="container">
          <ul className="category">
            <li className="active">All</li>
            <li>Biryani</li>
            <li>Chicken</li>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Pasta</li>
          </ul>
          <div className="container">
            <div className="restaurant-menu">
              <div className="menu-item">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-1.jpg"
                  alt=""
                />
                <div className="title">Food Restaurant | Chineese &amp; Thai</div>
                <div className="location">Lahore, Pakistan</div>
                <div className="order flex">
                  
                </div>
              </div>
              <div className="menu-item">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-2.jpg"
                  alt=""
                />
                <div className="title">Food Restaurant | Chineese &amp; Thai</div>
                <div className="location">Lahore, Pakistan</div>
                <div className="order flex">
                  
                </div>
              </div>
              <div className="menu-item">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-3.jpg"
                  alt=""
                />
                <div className="title">Food Restaurant | Chineese &amp; Thai</div>
                <div className="location">Lahore, Pakistan</div>
                <div className="order flex">
                  
                </div>
              </div>
              <div className="menu-item">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-4.jpg"
                  alt=""
                />
                <div className="title">Food Restaurant | Chineese &amp; Thai</div>
                <div className="location">Lahore, Pakistan</div>
                <div className="order flex">
                 
                </div>
              </div>
              <div className="menu-item">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-5.jpg"
                  alt=""
                />
                <div className="title">Food Restaurant | Chineese &amp; Thai</div>
                <div className="location">Lahore, Pakistan</div>
                <div className="order flex">
                  
                </div>
              </div>
              <div className="menu-item">
                <img
                  src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/menu-6.jpg"
                  alt=""
                />
                <div className="title">Food Restaurant | Chineese &amp; Thai</div>
                <div className="location">Lahore, Pakistan</div>
                <div className="order flex">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Restaurant Menu */}
      {/* Testimonial */}
      <div className="section" id="testimonial">
        <div className="container flex">
          <div className="text">
            <h2 className="secondary">What people say about FoodLover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, eos
              voluptatem odio, molestias ullam error dolor rem laboriosam illo quae
              odit aliquam sint a amet, autem natus! Praesentium, ipsam mollitia?
            </p>
            <div className="user flex">
              <img
                src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/client.jpg"
                alt=""
              />
              <div className="name">
                <div className="title">John Smith</div>
                <div className="location">Lahore, Pakistan</div>
              </div>
            </div>
          </div>
          <div className="visual">
            <img
              src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/testimonial.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* End Testimonial */}
      {/* FAQ */}
      <div className="section" id="faq">
        <h2 className="secondary">Frequently Asked Questions</h2>
        <div className="faq">
          <details>
            <summary>I got wrong food what shoud I do?</summary>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                amet sunt at?
              </p>
            </div>
          </details>
          <details>
            <summary>I got wrong food what shoud I do?</summary>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                amet sunt at?
              </p>
            </div>
          </details>
          <details>
            <summary>I got wrong food what shoud I do?</summary>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                amet sunt at?
              </p>
            </div>
          </details>
          <details>
            <summary>I got wrong food what shoud I do?</summary>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                amet sunt at?
              </p>
            </div>
          </details>
        </div>
      </div>
      {/* End FAQ */}
      {/* App */}
      <div className="section" id="app">
        <div className="container flex">
          <div className="visual">
            <img
              src="https://raw.githubusercontent.com/programmercloud/foodlover/main/img/app.png"
              alt=""
            />
          </div>
          <div className="text">
            <h2 className="secondary">Download The FoodLover App</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
              laudantium velit iure illo facilis at delectus sint, doloribus magnam
              officiis rerum nobis, perspiciatis maxime repellat qui consequuntur?
              Aspernatur, architecto voluptatum!
            </p>
            <div className="download flex">
              <div className="app-store">
                <ion-icon name="logo-google-playstore" />
                <p>
                  GET IT ON <br />
                  <span>Google Play</span>
                </p>
              </div>
              <div className="app-store">
                <ion-icon name="logo-apple" />
                <p>
                  Donload on the <br />
                  <span>App Store</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End App */}
      {/* Footer */}
      <div className="footer">
        <div className="container flex">
          <div className="footer-about">
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              aspernatur sit deleniti enim voluptas voluptatum incidunt rerum,
              exercitationem voluptate nemo quo impedit ad perspiciatis tempore
              nulla dolore fugit, fuga eos.
            </p>
          </div>
          <div className="footer-category">
            <h2>Our Menu</h2>
            <ul>
              <li>Biryani</li>
              <li>Chicken</li>
              <li>Pizza</li>
              <li>Burger</li>
              <li>Pasta</li>
            </ul>
          </div>
          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Menu</li>
              <li>Order</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="get-in-touch">
            <h2>Get in touch</h2>
            <ul>
              <li>Account</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Suggession</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2022. All Rights Reserved.</p>
        </div>
      </div>
      {/*   BTN   */}
      <a
        href="https://www.youtube.com/watch?v=G6jkqDqTYo0"
        className="youtube"
        target="__blank"
      >
        <p>Watch Tutorial 🔥</p>
      </a>
      {/* End Footer */}
    </>
    
      
    )
};




export default Home;
