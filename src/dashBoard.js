 import Clothes from './Images/Clothes.jpeg'
 import Cargo_Pant from './Images/Cargo-Pant.jpeg'
 import Men_Hockey_Sport from './Images/Men_Hockey_Sports.jpeg'
 import Samsung_S23 from './Images/Samsung_S23.jpeg'
 import Stailor_Shirt from './Images/Stailor_Shirt.jpeg'
 import Track_Field_Tshirt from './Images/Track_Field_T-shirt.jpeg'
 import Track_suit from './Images/Track-suit.jpeg'
 import White_Tshirt from './Images/white_Tshirt.jpeg.jpg'
 import { GoPerson , GoSearch, GoLocation} from "react-icons/go";
 import { FaCartShopping } from "react-icons/fa6";
 import { BsCurrencyDollar } from "react-icons/bs";
 import { json, useNavigate } from 'react-router-dom'
 import { useState } from 'react'
 import './Logout.css'
import CartItems from './cartInfo'

  

function DashBoard(){

    const [popUp, setPopUp] = useState(false)
    const navigate = useNavigate()
    const user =  localStorage.getItem('username')
    let userName = JSON.parse(user)
 
    
const items = [
        {label: 'Clothes' , id : 1 , cost: '500' , img: Clothes  },
        {label: 'Cargo_Pant' , id : 2 , cost: '600' , img: Cargo_Pant },
        {label: 'Men_Hockey_Sport' , id : 3 , cost: '1200', img: Men_Hockey_Sport },
        {label: 'Samsung_S23' , id : 4 , cost: '80000' , img: Samsung_S23  },
        {label: 'Stailor_Shirt' , id : 5 , cost: '1000', img: Stailor_Shirt },
        {label: 'Track_Field_Tshirt' , id : 6 , cost: '650', img: Track_Field_Tshirt },
        {label: 'Track_suit' , id : 7 , cost: '950' , img: Track_suit },
        {label: 'White_Tshirt' , id : 8 , cost: '400' , img: White_Tshirt  },
    ]

    const AddToCart = (index) => {
    let res = JSON.parse(localStorage.getItem('cartItems')) || [];
        
    const itemIndex = res.findIndex((ele) => ele.id === items[index].id )
    if(itemIndex > -1 ){
    return
    } else {
    res.push(items[index])
        const jsonString = JSON.stringify(res)
        localStorage.setItem("cartItems", jsonString)
    }
    }

    function handeClick(){
        navigate('/cartitems')
    }

     function handlePopup(){
      setPopUp(true)
     }

  function handleLogOut(choose){
    if(choose === "Yes"){
        navigate('/')
        localStorage.clear()
    }else{
        setPopUp(false)
    }
  }
    
      
    const renderded = items.map((item, index) =>{
        return <div key={item.id} className='h-80 w-60 shadow-xl opacity-100 bg-white ml-2 mt-4'>
                 <div className='text-xl ml-4 mt-2'>{item.label}</div>
                <img className='bg-cover bg-center h-4/6 w-full mt-2' alt='image!' src={item.img}/>
                <div className='flex text-base ml-2 mt-4'>
                <div className='flex items-center'><BsCurrencyDollar/>{item.cost}</div>
                <button className='ml-20' onClick={() => AddToCart(index)}>Add To Cart</button>
                </div>
            </div>

    })


    return (
        <div>
            <div className='navbar bg-gray-600 h-12 flex justify-between items-center text-white'>
                <div className='flex text-lg' >
                     <GoPerson className='ml-2 mt-1.5' /> 
                     <button className=''>{userName}</button>
                 </div>   
                 <div  className='flex'>
                     <input className='h-2/4 w-60 rounded'/>
                     <GoSearch className='h-2/4 mt-1'/> 
                 </div>
                 <div  className='flex'>
                     <p>India</p>
                      <GoLocation/>
                 </div>
                 <div  className='flex mr-3'>
                     <button onClick={handeClick}><p className='text-xl'>Cart</p></button>
                      <FaCartShopping />
                 </div>
                 <div>
                     <button onClick={handlePopup} className='mr-2' >LogOut</button>
                 </div>
            </div>
            {/* renderedItems */}
            <div className="cartItems items flex justify-evenly flex-wrap bg-gray-200 h-screen"  >
                {renderded}
            </div>
            {/* handle Logout */}
           { popUp && ( <div className="modal">
                 <div onClick={handleLogOut} className="overlay"></div>
                      <div className="modal-content">
                      <h2 className='username'>{userName}</h2>
                      <p className='text'>Are You Want to Logout</p>
                  <div>
                      <button className='yes' onClick={() => handleLogOut("Yes")}>Yes</button>
                      <button className='no' onClick={() => handleLogOut("No")}>No</button>
                   </div>
               </div>
             </div>)}

        </div>

          
    )
}

export default DashBoard