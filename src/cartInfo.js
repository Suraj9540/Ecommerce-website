import { RenderItems } from "./renderItem"


function CartItems(){
   
  
  const cartValue =  localStorage.getItem('cartItems')
    let items = JSON.parse(cartValue)
    console.log( typeof items , items , 'items')
 
 
    return(
        <div>
            <div className="navbar">
                <div className="h-16 bg-gray-500 flex justify-center items-center">
                    <h1 className="text-3xl font-bold" >Cart Items</h1>
                </div>
            </div>
             
            <div >
              <RenderItems items={items}/>
            </div> 
        </div>
    )
}
export default  CartItems