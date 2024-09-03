import { RenderItems } from "./renderItem"



function CartItems() {
    
    const cartValue = localStorage.getItem('cartItems')
    let cartItem = JSON.parse(cartValue)

       
    return(
        <div>
            <div className="navbar">
                <div className="h-16 bg-gray-500 flex justify-center items-center">
                    <h1 className="text-3xl font-bold" >Cart Items</h1>
                </div>
            </div>
            <div >     
                {cartItem.length === 0 ? 'No Cart item Are Available' : <RenderItems items={cartItem} />}
            </div> 
        </div>
    )
}
export default  CartItems