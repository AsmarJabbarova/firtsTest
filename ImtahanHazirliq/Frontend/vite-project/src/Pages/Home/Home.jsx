import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Modell from "./Modell.jpg"
function Home() {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) =>
      setProduct(res.data)
    )
  })
  const handleDetail = (productId) => {
    navigate(`detail/${productId}`)
  }
 const handlePrice =()=>{
  const filter=[...product].sort((a,b)=>b.price-a.price)
  // setProduct(filter)
 }

  return (
    
    <div className="mainHome">
      <div className="section1">
        <div className="sect">
          <div className="shopWithUs">
            <h1 className='h1'>Shop With Us</h1>
          </div>
          <div className="lorem">
           <h4 className='pp'>Lorem, ipsum dolor sit amet consectetur <br />adipisicing elit. Corrupti, ullam.</h4>
          </div>
          <button className='shop'>SHOP NOW</button>
          <button className='club'>CLUB MEMBERSHIP</button>
        </div>

      </div>
      <div className="section2">

        <div className="title2">
          <p>POPULAR PRODUCT</p>
          <h1>Our Products</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis eum officiis doloribus voluptatem? Tempora officiis placeat tempore vitae rerum nostrum voluptatum ex tenetur quis, minus magni veniam voluptates? Atque.</p>
        </div>
        <div className="search">
          <input type="text" placeholder='search' onChange={(e => { setSearch(e.target.value) })} />
          <button onClick={handlePrice()}>Price</button>
        </div>


        <div className="cards">

          {
            product.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((elem, i) => (
              <div className="card" key={i}>
                <div className="img">
                  <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" alt="" />
                </div>
                <div className="up">
                  <div className="cardName">{elem.name}</div>
                  <div className="ico">
                    <div className="star"></div>
                    <div className="heart"></div>
                  </div>
                  <div className="lore">
                    Lorem ipsum dolor sit.
                  </div>
                  <div className="buttons">
                    <button onClick={() => handleDetail(elem.id)}>Detail</button>
                    <button>Basket</button>
                  </div>
                </div>

              </div>
            ))
          }


        </div>

      </div>

    </div>
  )
}

export default Home