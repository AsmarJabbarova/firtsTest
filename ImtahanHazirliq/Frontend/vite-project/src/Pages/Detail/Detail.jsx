import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import "./Detail.scss"

function Detail() {
     const [detail, setDetail] = useState([]);
    let { productId } = useParams();
     const navigate = useNavigate();
        axios
          .get(`http://localhost:3000/products/${productId}`)
          .then((res) => setDetail(res.data));
      
  return (
    <div className='mainDetail'>
<div className="cardd">
    {
        <div className="card" key={productId}>
        <div className="img">
         <img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" alt="" />
        </div>
        <div className="up">
        <div className="cardName">{detail.name}</div>
        <div className="ico">
        <div className="star"></div>
    <div className="heart"></div>
        </div>
        <div className="lore">
          Lorem ipsum dolor sit.
        </div>
        <div className="buttons">
     
          <button>Basket</button>
        </div>
        </div>
       
      </div>
    }
</div>

    </div>
  )
}

export default Detail