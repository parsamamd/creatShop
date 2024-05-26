import React from 'react'
import './Navbar.css'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className='fullnavbar'>
            <div className='Navbartop'>
                <div className="iconeLeft">
                    <Link to='/MyShop'><div className='IconeBoxNav'><LocalGroceryStoreOutlinedIcon className='icones' style={{ fontSize: '30px' }} /></div></Link>
                    <Link to='/Login'><div className='IconeBoxNav'><AccountCircleOutlinedIcon className='icones' style={{ fontSize: '30px' }} /></div></Link>
                </div>
                <div className="iconeRight">
                    <Link to='/SearchPage'><div className='IconeBoxNav'><SearchOutlinedIcon className='icones' style={{ fontSize: '30px' }} /></div></Link>
                    <Link to='/'><img src="/icone/iconeR.gif" alt="" /></Link>
                </div>
            </div>
            {/* <div className='Navboutten'>
                <ul className="NavbouttenUL">
                    <Link>
                        <li>گوشی</li>
                    </Link>
                    <Link>
                        <li>ساعت هوشمند</li>
                    </Link>
                    <Link>
                        <li>تمام برند ها
                            <ul className='LIULNav'>
                                <li>سامسونگ</li>
                                <li>شیاءمی</li>
                                <li>اپل</li>
                            </ul>
                        </li>
                    </Link>
                    <Link>
                        <li>درباره ما</li>
                    </Link>
                </ul>
            </div> */}
        </div>
    )
}
