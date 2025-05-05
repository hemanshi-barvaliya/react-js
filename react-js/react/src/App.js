
import './App.css';
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/asset-18.webp';
import logo1 from './images/asset 0.png';
import { Button } from 'bootstrap';
import coffee from './images/asset 1.webp'
import img1 from './images/asset 19.png'
import img2 from './images/asset 3.jpeg'
import img3 from './images/asset 4.jpeg'
import timg1 from './images/asset 2.webp'
import cpimg1 from './images/asset 5.webp'
import cpimg2 from './images/asset 6.webp'
import cpimg3 from './images/asset 7.webp'
import icon1 from './images/asset 32.png'
import icon2 from './images/asset 33.png'
import icon3 from './images/asset 34.png'
import cimg1 from './images/asset 8.webp'
import cimg2 from './images/asset 9.webp'
import cimg3 from './images/asset 10.webp'
import menu from './images/asset 22.jpeg'
import Alert from 'react-bootstrap/Alert';


function App() {
  return (
   <>
  <div class="position-relative">
      <img src={logo} width="100%" height="100%" />
  </div>
  <div class="position-absolute top-0 menu">
    
      <img class="p-2" src={logo1} width="100%" height="100%" />
   
    <div>
        <ul class="menu mpl">
          <div>
            <li class="menu1 mp"> Home
              <ul class="submenu">
                <li class="pt-2 pb-2">Home 1</li>
                <li class="pt-2 pb-2">Home 2</li>
              </ul>
            </li>
          </div>
          <div>
            <li class="mp" >Services</li>
          </div>
          <div>
            <li class="mp" >Page</li>
          </div>
          <div>
          <li class="menu1 mp">About
              <ul class="submenu">
                  <li class="pt-2 pb-2">About As</li>
                  <li class="pt-2 pb-2">Our Services</li>
                  <li class="pt-2 pb-2">Pricing</li>
                  <li class="pt-2 pb-2">shop</li>
              </ul>
            </li>
            </div>
          <div>
            <li class=" mp">Blog </li>
          </div>
          <div><li class="mp">Contect</li></div>
        </ul>
  </div>
  <div class="sbtn">
     <button class="btn1">Sign in</button>
  </div>
  </div>

  <div  className='position-absolute top-0 start-0 w-75 '>
    <h1 className='title_main'>
    Your guide to the world of drinking great coffee.
    </h1>
    <p className='sub_title' variant="Secondary">The suppliers and producers we work with are at the top of their game. 
      It’s our role to carry the magic from their hands to your table.</p>
      <div class=" menu">
        <div>
         <button class="btn1 tbtn ">BOOK A TABLE</button>
        </div>
        <div>
         <button class="btn1 tbtn tbtn1">DISCOVER NOW</button>
        </div>
        <div className='position-absolute top-0 end-0 w-25 imgp'>
        <img src={coffee} width="450px" height="350px" />
        </div>
      </div>
  </div>

  <div className='title pt-4'>
    <p className=' pt-4 ptitle'>
    From floral and bright to bold and smooth coffee flavors
    </p>
    <h1 >Providing unique coffee experiences</h1>
    <img  className=' pt-4' src={timg1} />
  </div>

    
<div className='flex-container'>
    <div class="flex-item-left">
        <div><img className='img1' src={img1}  /></div>
        <div><img className='img2' src={img2}  /></div>
        <div><img className='img3' src={img3}  /></div>
    </div>
    <div class="flex-item-right">
       <div>
          <h3 class="ctitle">We believe this is the best coffee in New York. Try it for yourself</h3>
        </div>
        <div>
              <p class="csubtitle"> Our roasts feature multiple underlying notes. We believe the unexpected can happen when good 
              design and great coffee come together. We also believe there is an outside in all of us to be found.</p>
       </div>
       <div class="cbtn">
         <button class="btn2">VISIT SHOP</button>
        </div>
 
    </div>
    </div>

    <div class="bgimg">
        <div className='title pt-4'>
            <p className=' pt-4 ptitle'>
            Check out our selection of featured coffees and products
            </p>
            <h1  class="h1title">
              Here you can buy our featured products
            </h1>
            <img  className=' pt-4' src={timg1} />
        </div>

        <div class="container text-center">
                <div class="row cpimg">
                  <div class="col ">
                  <div>
                    <img className='cpimg1' src={cpimg1}  width="100%" height="100%" />
                    <div className='cptitle'>
                    <h4>Campfire Blend</h4>
                    <p> <del>$30.00</del> <ins>$19.00</ins></p>
                </div>
                  </div>
                  </div>
                  <div class="col">
                  <div>
                    <img className='cpimg2' src={cpimg2}   width="100%" height="100%"/>
                    <div className='cptitle'>
                    <h4>Campfire Blend</h4>
                    <p>$19.00</p>
                </div>
                  </div>
                  </div>
                  <div class="col">
                  <div>
                    <img className='cpimg3' src={cpimg3}  width="100%" height="100%" />
                    <div className='cptitle'>
                    <h4>Campfire Blend</h4>
                    <p>$19.00</p>
                </div>
              </div>
              </div>
          </div>
      </div>
    </div>
    <div class="bgimg2">
      <div className='title pt-4'>
              
              <h1  class="h1title  padding_top">
              We are committed to the highest </h1>
              <h1  class="h1title ">standards of quality and service    </h1>       
              <p className=' ptitle'>
              Embracing our heritage while innovating to create new experiences to savor

              </p>
              <img  className=' pt-4' src={timg1} />
          </div>
          <div class="container text-center">
                <div class="row cpimg">
                  <div class="col ">
                  <div class="icons">
                    <img src={icon1}  width="50px" height="50px" />
                    <div className='cptitle'>
                    <h4>Barista</h4>
                    <p> Our coffees are carefully selected for quality, flavor, and social impact</p>
                </div>
                  </div>
                  </div>
                  <div class="col">
                  <div class="icons">
                    <img src={icon2}  width="50px" height="50px"/>
                    <div className='cptitle'>
                    <h4>Coffee</h4>
                    <p>Our coffees are carefully selected for quality, flavor, and social impact</p>
                </div>
                  </div>
                  </div>
                  <div class="col">
                  <div class="icons">
                    <img src={icon3}  width="50px" height="50px" />
                    <div className='cptitle'>
                    <h4>Merchandise</h4>
                    <p>Our coffees are carefully selected for quality, flavor, and social impact</p>
                </div>
              </div>
              </div>
          </div>
          
      </div>
        <div class="cbtn cbtn1">
          <button class="btn3">VIEW OUR SERVICES</button>
        </div>
      </div>

    <div>
      sfsdf
    </div>



      <div className='title '>
            <h1  class="h1title">
            We offer a wide selection of blends and beans to fill your cup
            </h1>
            <img  className=' pt-4' src={timg1} />
        </div>

        <div class="container text-center">
                <div class="row cpimg">
                  <div class="col ">
                  <div>
                    <img className='cimg1' src={cimg1}  width="100%" height="100%" />
                    <div className='cptitle'>
                    <h4>Locally Roasted Coffee</h4>
                </div>
                  </div>
                  </div>
                  <div class="col">
                  <div>
                    <img className='cimg2' src={cimg2}   width="100%" height="100%"/>
                    <div className='cptitle'>
                    <h4>Hot Breakfast</h4>
                   
                </div>
                  </div>
                  </div>
                  <div class="col">
                  <div>
                    <img className='cimg3' src={cimg3}  width="100%" height="100%" />
                    <div className='cptitle'>
                    <h4>Find Your Favorite</h4>
                </div>
              </div>
              </div>
          </div>
      </div>


<div className='containerr'>
     <div className="box">
        <img className='menu2' src={menu}  width="100%" height="100%" />
        <div className='menu3'>
          lorem
        </div>
      </div> 
</div>



  

   </>
  );
}

export default App;
