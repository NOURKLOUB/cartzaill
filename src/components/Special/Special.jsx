import Adeng from './Adeng'
import './Special.css'

export default function Special() {
  return (
     <div className='container'>
     <h1 className='mt-5 mb-5'>Special products</h1>
        <div className=" d-flex align-items-center  justify-content-evenly gap-lg-3">
            <Adeng meges="/public/assets/200010_Almarai_Ice-Cream-Cone_Vanilla-Choco_Label_V5_3D_300px320202443133AM.webp"/>
            <Adeng meges="/public/assets/200040_Almarai_Ice-Cream-Stick_Vanilla-Strawberry_Label_V4_3D-New_300px320202460153AM.webp"/>
            <Adeng meges="/public/assets/200080_Almarai_Ice-Cream_Sandwich_Cookies_Film_V3_3D-New_300px319202413033PM.webp"/>
            <Adeng meges="/public/assets/200110_Almarai_Ice-Cream-Mini-Bites_V6_Pouch_3D_New_300px320202453649AM.webp"/>
        </div>
     </div>
  )
}
