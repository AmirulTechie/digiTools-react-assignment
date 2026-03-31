import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './Components/1.NavBar/NavBar'
import Banner from './Components/2.Banner/Banner'
import Stats from './Components/3.Stats/Stats'
import ToggleBtn from './Components/4.ToggleSection/Buttons/ToggleBtn'
import Footer from './Components/7.Footer/Footer'
import Cta from './Components/7.Footer/Cta'
import { useState } from 'react'

const getProductData = async()=>{
  const res = await fetch('/data.json')
  return res.json()
}
const productPromise = getProductData()

function App() {
  const [carts, setCarts] = useState([])
  return (
    <>
      <ToastContainer></ToastContainer>
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <ToggleBtn productPromise={productPromise} carts={carts} setCarts={setCarts}></ToggleBtn>
      <Cta></Cta>
      <Footer></Footer>
    </>
  )
}

export default App
