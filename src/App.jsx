
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Rating from './components/Rating'
import Steps from './components/Steps'
import Products from './components/Products'
const dataPromise=fetch('data.json').then(res=>res.json())

function App() {

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
  <input type="radio" name="my_tabs_1" className="tab bg-linear-to-r rounded-4xl text-white font-semibold  from-[#4f39f6] to-[#9514fa]" aria-label="Products" defaultChecked/>
  <input type="radio" name="my_tabs_1" className="tab bg-linear-to-r rounded-4xl text-white font-semibold  from-[#4f39f6] to-[#9514fa]" aria-label="Cart"  />

</div>
</div>
<Suspense fallback={<div className=' flex justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>}>
<Products dataPromise={dataPromise}></Products>
</Suspense>
<Steps></Steps>
<Pricing></Pricing>
<Footer></Footer>
    </>
  )
}

export default App
