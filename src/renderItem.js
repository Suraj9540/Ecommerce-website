import { BsCurrencyDollar } from "react-icons/bs";
 
 export function RenderItems({items }){
    const value = items.map((item) =>{
     return  <div key={item.id} className='h-80 w-60 shadow-xl opacity-100 bg-white ml-2 mt-4'>
     <div className='text-xl ml-4 mt-2'>{item.label}</div>
    <img className='bg-cover bg-center h-4/6 w-full mt-2' alt='image!' src={item.img}/>
    <div className='flex text-base ml-2 mt-4'>
    <div className='flex items-center'><BsCurrencyDollar/>{item.cost}</div>
    </div>
</div> 
    })

    return (
        <div  className="cartItems items flex justify-evenly flex-wrap">
            {value}
        </div>
    )
}