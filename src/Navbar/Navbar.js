import './Navbar.css'
import { useContext} from 'react';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import ContextProvider from '../ContextProvider/ContextProvider';

const Navbar = ()=>{
    const {viewNav, setViewNav} = useContext(ContextProvider)
    return(
        <>
            <div className='navcon navmobile'>
                <div className='navmobileview'>
                    <div className='navlogo'>
                        LOGO
                    </div>
                    <div  className='navicon' onClick={()=>{
                        setViewNav(!viewNav)
                    }}>
                        {viewNav ? <RiCloseFill/> : <RiMenu3Fill/>}
                    </div>
                </div>

                <div className={'navcontent navmobile'+ (viewNav ? '':' viewnav')}>
                    <ul className='navbar navmobile'>
                        <li className='navitem' id='home'>HOME</li>
                        <li className='navitem' id='about-us'>ABOUT US</li>
                        <li className='navitem' id='services'>SERVICES</li>
                        <li className='navitem' id='pricing'>PRICING</li>
                        <li className='navitem' id='gallery'>GALLERY</li>
                        <li className='navitem' id='contacts'>CONTACTS</li>
                    </ul>
                    <div className='navbase'>
                        BOOK APPOINTMENT
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar