import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Cart.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';

export default function Cart() {
    const { name } = useParams();
    const [product, setProduct] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isInCart, setIsInCart] = useState(false);
    const [CloseAndOpen, setCloseAndOpen] = useState(false);
    const [picherdataSh, setPicherdataSh] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/Products')
            .then(response => response.json())
            .then(data => {
                const productData = data.find(item => item.name === name);
                setProduct(productData);
            })
            .catch(error => console.error('Error fetching product data:', error));
    }, [name]);

    useEffect(() => {
        if (product) {
            setPicherdataSh(`/${product.Src}`);
        }
    }, [product]);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const handleCartClick = () => {
        setIsInCart(!isInCart);
    };

    const handChangPicher = (Src) => {
        setPicherdataSh(Src);
    }

    if (!product) {
        return <div style={{ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}><CircularProgress /></div>;
    }
    const handOpenandClose = (FT) => {
        setCloseAndOpen(FT)
    }
    return (
        <div className='Cart'>
            <div className='CartBoxTop'>
                <div className='boxCartBoxTopPrice'>
                    <div className='CartBoxTopPrice'>
                        <span className='CartBoxTopPriceName'>{product.name}</span>
                        <span className='CartBoxTopPricetype'>{product.typeF}</span>
                        <hr />
                        <div className='CartBoxTopPricePrice'>
                            <span>تومان {product.Price}</span>
                        </div>
                        <div className='CartBoxTopPricebutton'>
                            <button
                                className="CartBoxTopPricebuttonHeart"
                                onClick={handleFavoriteClick}
                                style={{ color: isFavorite ? '#d32f2f' : '#fff' }}
                            >
                                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                            </button>
                            <button
                                className="CartBoxTopPricebuttonShop"
                                onClick={handleCartClick}
                                style={{ color: isInCart ? '#EAF6FF' : '#fff' }}
                            >
                                {isInCart ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
                            </button>
                        </div>
                        <hr />
                        <div>
                            <p className='CartBoxTopPriceshield'>{product.Warranty}<VerifiedUserIcon /></p>
                        </div>
                    </div>
                </div>
                <div className='CartBoxTopmten'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className="accordion-summary"
                        >
                            <span className="accordion-summary-text">معرفی</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            {product.datamore}
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='CartBoxTopBoxImg' onClick={() => handOpenandClose(true)}>
                    <div className='CartBoxTopBoxImgFullSize'>
                        <img src={`/${product.Src}`} alt="" className='CartBoxTopBoxImgFullSizeimg' />
                    </div>
                    <div className="CartBoxTopBoxImgSmallSizeS">
                        {
                            product.Srces.map((value, index) => (
                                <div className='CartBoxTopBoxImgSmallSize' key={index}>
                                    <img src={`/${value.Src}`} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {CloseAndOpen &&
                <div className='BoxFixImg'>
                    <div className="BoxFixImgimgBarTop">
                        <img src={picherdataSh} alt="" />
                    </div>
                    <div className="BoxFixImgButten">
                        {
                            product.Srces.map((value, index) => (
                                <div key={index}>
                                    <img src={`/${value.Src}`} alt="" onClick={() => handChangPicher(`/${value.Src}`)} />
                                </div>
                            ))
                        }
                    </div>
                    <span className='opencolseX' onClick={() => handOpenandClose(false)}><CloseIcon /></span>
                </div>
            }
        </div>
    );
}
