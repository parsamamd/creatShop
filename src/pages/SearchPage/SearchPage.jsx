import React, { useEffect, useState } from 'react';
import './SearchPage.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Pagination from '@mui/material/Pagination';
import CartProduct from '../../componnt/CartProduct/CartProduct';

export default function SearchPage() {
    const [Alldata, setAlldata] = useState([]);
    const [Fillterdata, setFillterdata] = useState([]);
    const [SearchText, setSearchText] = useState('');
    const [page, setPage] = useState(1);
    const [productsPerPage] = useState(10); // تعداد محصولات در هر صفحه

    useEffect(() => {
        fetch('http://localhost:3000/Products')
            .then(res => res.json())
            .then(data => {
                setAlldata(data);
                setFillterdata(data);
            });
    }, []);

    const handleSearch = (event) => {
        const searchText = event.target.value.trim().toLowerCase();
        setSearchText(searchText);

        const filteredData = Alldata.filter(product =>
            product.type.toLowerCase().includes(searchText) ||
            product.typeF.toLowerCase().includes(searchText) ||
            product.name.toLowerCase().includes(searchText)
        );

        setFillterdata(filteredData); // بروزرسانی Fillterdata
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = Fillterdata.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className='SearchPage'>
            <div className='SearchPageTop'>
                <div className='SearchPageTopSearch'>
                    <SearchOutlinedIcon />
                    <input
                        type="text"
                        placeholder='Search and find'
                        value={SearchText}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className='SearchPageBoutten'>
                <div className='SearchPageBoxPro'>
                    {SearchText.length > 0 ? (
                        currentProducts.map((value, index) => (
                            <CartProduct index={index} name={value.name} Src={value.Src} Price={value.Price} star={value.star} />
                        ))
                    ) : (
                        <p>چیزی جستجو نشده است</p>
                    )}
                </div>
            </div>
            {
                SearchText.length > 0 ? (
                    <Pagination
                        count={Math.ceil(Fillterdata.length / productsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                    />
                ) : (
                    <div></div>
                )
            }
        </div>
    );
}
