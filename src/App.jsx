import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './Components/1.NavBar/NavBar'
import Banner from './Components/2.Banner/Banner'
import Stats from './Components/3.Stats/Stats'
import ToggleBtn from './Components/4.ToggleSection/Buttons/ToggleBtn'
import Footer from './Components/7.Footer/Footer'
import Cta from './Components/7.Footer/Cta'
import { useState } from 'react'
import Steps from './Components/5.Steps/Steps'
import Pricing from './Components/6.Pricing/Pricing'

const getProductData = async()=>{
  const res = await fetch('/data.json')
  return res.json()
}
const productPromise = getProductData()

function App() {
  const [carts, setCarts] = useState([])
  const [activeTab, setActiveTab] = useState("product");
  return (
    <>
      <ToastContainer></ToastContainer>
      <NavBar carts={carts} activeTab={activeTab} setActiveTab={setActiveTab}></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <ToggleBtn productPromise={productPromise} carts={carts} setCarts={setCarts} activeTab={activeTab} setActiveTab={setActiveTab}></ToggleBtn>
      <Steps></Steps>
      <Pricing></Pricing>
      <Cta></Cta>
      <Footer></Footer>
    </>
  )
}

export default App
