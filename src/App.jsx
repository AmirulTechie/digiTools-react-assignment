import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './Components/1.NavBar/NavBar'
import Banner from './Components/2.Banner/Banner'
import Stats from './Components/3.Stats/Stats'
import ToggleBtn from './Components/4.ToggleSection/Buttons/ToggleBtn'
import Footer from './Components/7.Footer/Footer'
import Cta from './Components/7.Footer/Cta'
const getProductData = async()=>{
  const res = await fetch('/data.json')
  return res.json()
}
const productPromise = getProductData()

function App() {

  return (
    <>
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <ToggleBtn productPromise={productPromise}></ToggleBtn>
      <Cta></Cta>
      <Footer></Footer>
    </>
  )
}

export default App
