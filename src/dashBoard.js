 import Clothes from './Images/Clothes.jpeg'
 import Cargo_Pant from './Images/Cargo-Pant.jpeg'
 import Men_Hockey_Sport from './Images/Men_Hockey_Sports.jpeg'
 import Samsung_S23 from './Images/Samsung_S23.jpeg'
 import Stailor_Shirt from './Images/Stailor_Shirt.jpeg'
 import Track_Field_Tshirt from './Images/Track_Field_T-shirt.jpeg'
 import Track_suit from './Images/Track-suit.jpeg'
 import White_Tshirt from './Images/white_Tshirt.jpeg.jpg'
 import { GoSearch, GoLocation} from "react-icons/go";
 import { FaCartShopping } from "react-icons/fa6";
 import { BsCurrencyDollar } from "react-icons/bs";
 import { useNavigate } from 'react-router-dom'
 import {  useState } from 'react'
 import './Logout.css'

//  handle profile
import { TbCameraPlus } from "react-icons/tb";
import { RiEmotionHappyLine } from "react-icons/ri";
import { GoPerson , GoPersonAdd , GoPeople  } from "react-icons/go";
import { MdPersonSearch } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import './UserProfile.css'


  

function DashBoard(){

    const [popUp, setPopUp] = useState(false)
    const [profile , setProfile] = useState(false)
    const navigate = useNavigate()
    const [addedItem , setAddedItem] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

   
    const user =  localStorage.getItem('userInfo')
    let userDetail = JSON.parse(user)
    let name = userDetail[0].name
    
    const handleUserName = (name) =>{
     if (!name) return ''
     return name.charAt(0).toUpperCase() + name.slice(1)
    }

    



    function getButtonText(product) {
        let text = "Add To Cart";
        
        if (addedItem.length) {
        let findInd = addedItem.findIndex(item => {
            return item.id === product.id
        })
        if (findInd > -1) {
            text = "Remove from Cart"
        }
    }
        return text;
    }
 
    
const items = [
        {label: 'Clothes' , id : 1 , cost: '500' , img: Clothes , count : 1 },
        {label: 'Cargo_Pant' , id : 2 , cost: '600' , img: Cargo_Pant , count : 1 },
        {label: 'Men_Hockey_Sport' , id : 3 , cost: '1200', img: Men_Hockey_Sport , count : 1 },
        {label: 'Samsung_S23' , id : 4 , cost: '80000' , img: Samsung_S23 , count : 1 },
        {label: 'Stailor_Shirt' , id : 5 , cost: '1000', img: Stailor_Shirt , count : 1 },
        {label: 'Track_Field_Tshirt' , id : 6 , cost: '650', img: Track_Field_Tshirt , count : 1 },
        {label: 'Track_suit' , id : 7 , cost: '950' , img: Track_suit , count : 1 },
        {label: 'White_Tshirt' , id : 8 , cost: '400' , img: White_Tshirt , count : 1 },
    ]

    const AddToCart = (index) => {
        
    // let res = JSON.parse(localStorage.getItem('cartItems')) || [];
        const itemIndex = addedItem.findIndex((ele) => ele.id === items[index].id)
        console.log(itemIndex , 'itemIndex')
        if (itemIndex > -1) {
            let arr1 = [...addedItem]
            let updatedCartItems = arr1.filter(item => item.id !== items[index].id)
            setAddedItem(updatedCartItems)
            const updatedValue = JSON.stringify(updatedCartItems)
            localStorage.setItem("cartItems" , updatedValue)
        } else {
            // res.push(items[index])
            // setAddedItem.push(items[index])
            let newI = [...addedItem];
            newI.push(items[index])
            setAddedItem(newI)
            const jsonString = JSON.stringify(newI)
            localStorage.setItem("cartItems", jsonString)
        
    }
    }
     

    function handeCartClick(){
        setProfile(false)
        navigate('/cartitems')
    }

     function handlePopup(){
      setProfile(false)  
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

  function handleProfile(){
    setProfile(true)
 }

 function handleCloseProfile(){
    setProfile(false)
 }
    
      
    const renderded = items.map((item, index) =>{
        return <div key={item.id} className='h-80 w-60 shadow-xl opacity-100 bg-white ml-2 mt-4'>
                 <div className='text-xl ml-4 mt-2'>{item.label}</div>
                <img className='bg-cover bg-center h-4/6 w-full mt-2' alt='image!' src={item.img}/>
                <div className='flex text-base ml-2 mt-4'>
                <div className='flex items-center'><BsCurrencyDollar/>{item.cost}</div>
                <button className='ml-20' onClick={() => AddToCart(index)}>{getButtonText(item)}</button>
                </div>
            </div>

    })


    return (
        <div>
            <div className='navbar bg-gray-600 h-12 flex justify-between items-center text-white'>
                <div className='flex text-lg items-center ml-1.5' >
                     <div className='w-4 h-4 rounded-full bg-gray-600 border-2 flex justify-center items-center'><p className='mb-1'>{name.charAt(0)}</p></div>
                     <button className='user' onClick={handleProfile} >{handleUserName(name)}</button>
                 </div>   
                 <div  className='flex'>
                     <input className='h-2/4 w-60 rounded text-slate-500'/>
                     <GoSearch className='h-2/4 mt-1'/> 
                 </div>
                 <div  className='flex'>
                     <p>India</p>
                      <GoLocation/>
                 </div>
                 <div  className='flex items-center mr-3'>
                     <button onClick={handeCartClick}><p className='text-xl'>Cart</p></button>
                      <FaCartShopping/>
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
                 <div className="overlay"></div>
                      <div className="modal-content">
                      <h2 className='username'>{userDetail[0].name}</h2>
                      <p className='text'>Are You Want to Logout</p>
                  <div>
                      <button className='yes' onClick={() => handleLogOut("Yes")}>Yes</button>
                      <button className='no' onClick={() => handleLogOut("No")}>No</button>
                   </div>
               </div>
             </div>)}

             {/* {handle Profile} */}
             {profile && (<div className="modal-1">
        <div className="overlay-1">
            <div className='content'>
                <div className='top'>
                    <div className='first-half'>
                        <div className='profile-image'><TbCameraPlus /></div>
                        <p className='userName'>{userDetail[0].name.charAt(0).toUpperCase() + userDetail[0].name.slice(1)}</p>
                        <button className='close-button' onClick={handleCloseProfile}>x</button>
                    </div>
                    <div className='second-half'>
                        
                        <button className="emoji"><RiEmotionHappyLine/></button> 
                        <p className="status">Set Status</p>

                    </div>
                </div>
                <div className="middle-content">
                    <div>
                        <p className="mid-emoji"><GoPerson /></p>
                        <p className="status" >Your Profile</p>
                    </div>
                    <div>
                        <p className="mid-emoji"><MdPersonSearch /></p>
                        <p className="status">Your activity</p>
                    </div>
                    <div>
                        <label className=" mid-emoji"><FaCartShopping /></label>
                        <button className="status " onClick={handeCartClick}>Cart Items</button>
                    </div>
                </div>
                <div>
                    <div className="contact">
                        <div>
                            <p className="contact-emoji"><GoPersonAdd /></p>
                            <p className="status">Add account</p>
                        </div>
                        <div>
                            <p className="contact-emoji"><GoPeople /></p>
                            <p className="status">Contact Us</p>
                        </div>
                    </div>
                    <div className="Sign-out">
                        <div>
                           <p className="sign-out-icon"><VscSignOut /></p>
                           <button className="status" onClick={handlePopup}>LogOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)}

        </div>

          
    )
}

export default DashBoard