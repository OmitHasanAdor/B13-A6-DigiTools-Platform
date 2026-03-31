
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Rating from './components/Rating'
import Steps from './components/Steps'
import Products from './components/Products'
import Cart from './components/Cart'
import { ToastContainer } from 'react-toastify'
const dataPromise=fetch('data.json').then(res=>res.json())

function App() {
  const [tabSelect,setTabSelect]=useState('product')
  const [cart,setCart]=useState([])

  return (
    <>
<Navbar></Navbar>
<Banner></Banner>
<Rating></Rating>
<div className='mt-10 space-y-5 py-10'>
  <h2 className=' text-4xl text-center font-extrabold'>Premium Digital Tools</h2>
  <p className=' text-center'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
  {/* name of each tab group should be unique */}
<div className="tabs tabs-box bg-transparent justify-center items-center">
  <input onClick={()=>setTabSelect('product')} type="radio" name="my_tabs_1" className={`tab  rounded-4xl  font-semibold ${tabSelect==='product' ? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white' : ' text-black bg-white shadow-md'}`} aria-label="Products" defaultChecked/>
  <input onClick={()=>setTabSelect('cart')} type="radio" name="my_tabs_1" className={`tab rounded-4xl  font-semibold ${tabSelect==='cart'? 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white': ' bg-white text-black shadow-md'}`} aria-label="Cart"  />

</div>
</div>
{tabSelect==='product' ? <Suspense fallback={<div className=' flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>}>
<Products  setCart={setCart} cart={cart} dataPromise={dataPromise}></Products>
</Suspense> : <Cart setCart={setCart} cart={cart}></Cart>}
<Steps></Steps>
<Pricing></Pricing>
<Footer></Footer>
<ToastContainer />
    </>
  )
}

export default App
