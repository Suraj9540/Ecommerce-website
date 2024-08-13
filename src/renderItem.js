import { BsCurrencyDollar } from "react-icons/bs";
import { useState } from "react";
 
export function RenderItems({ items }) {

    const [prevItem, setPrevItem] = useState(items)
    console.log('prevItem' , prevItem)

    function incrementCount(cartItem) {
        setPrevItem((prev) => 
            prev.map((item) =>
                item.id === cartItem.id ? { ...item, count: item.count + 1  } : item)
        )
    }

    function derementCount(cartItem) {
        if (cartItem.count === 1) {
            return cartItem.count
        } else {
            setPrevItem((prev) =>
                prev.map((item) =>
                    item.id === cartItem.id ? { ...item, count: item.count - 1 } : item))
        }
       
        
    }

    function totalPrice(item) {
        return item.cost * item.count
    }
      
         

    
    

    const value = prevItem.map((item) =>{
     return  <div key={item.id} className='h-96 w-72 shadow-xl opacity-100 bg-white ml-2 mt-4'>
     <div className='text-xl ml-4 mt-2'>{item.label}</div>
    <img className='bg-cover bg-center h-4/6 w-full mt-2' alt='image!' src={item.img}/>
    <div className='flex text-base ml-2 mt-4'>
    <div className='flex items-center pl-2.5'><BsCurrencyDollar/>{item.cost}</div>
     <div className=" Quantity pl-20 flex " >
            <span>Qty:</span>
            <button onClick={() => incrementCount(item)} className=" w-6 border">+</button> 
                 <p className=" w-9 border  flex justify-center">{item.count}</p>
            <button onClick={() => derementCount(item)} className="w-6 border">-</button>
        </div>
         </div>
         <div className="ml-4 pt-2.5 flex">
             Total Amount : <p className="pl-2.5 flex "><p className="mt-1"><BsCurrencyDollar /></p>{totalPrice(item)}</p>
         </div>
</div> 
    })

    return (
        <div  className="cartItems items flex justify-evenly flex-wrap">
            {value}
        </div>
    )
}