import React, { useEffect, useState } from 'react'
import SimpleSlider from '../../componnt/Slider/Slider'
import Bar from '../../componnt/Bar/Bar'
import Bestseller from '../../componnt/Bestseller/Bestseller'
import Advertising1 from '../../componnt/Advertising1/Advertising1'
import BoxOfproducts from '../../componnt/BoxOfproducts/BoxOfproducts'
import BoxMoreProducts from '../../componnt/BoxMoreProducts/BoxMoreProducts'
import ReminderLogin from '../../componnt/reminderLogin/reminderLogin'

export default function () {
  const [dataMobail, setdataMobail] = useState([])

  const [graphicCard, setgraphicCard] = useState([]);
  const [cases, setcase] = useState([]);
  const [keyboard, setkeyboard] = useState([]);
  const [monitor, setmonitor] = useState([]);

  fetch('http://localhost:3000/Products')
    .then(res => res.json())
    .then(data => setdataMobail(data.slice(0, 7)))



  useEffect(() => {
    // Fetch کردن داده‌ها از فایل JSON کارت گرافیک
    fetch('http://localhost:3000/Products')
      .then(response => response.json())
      .then(data => {
        // فیلتر کردن محصولاتی که نوعشان "Laptop" است
        const filteredLaptops = data.filter(product => product.type === "graphicCard");
        // انتخاب ۴ تای اول از لیست لپتاپ‌ها
        const firstFourLaptops = filteredLaptops.slice(0, 4);
        // ذخیره کردن در state
        setgraphicCard(firstFourLaptops);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Fetch کردن داده‌ها از فایل JSON کیس
    fetch('http://localhost:3000/Products')
      .then(response => response.json())
      .then(data => {
        // فیلتر کردن محصولاتی که نوعشان "Laptop" است
        const filteredLaptops = data.filter(product => product.type === "case");
        // انتخاب ۴ تای اول از لیست لپتاپ‌ها
        const firstFourLaptops = filteredLaptops.slice(0, 4);
        // ذخیره کردن در state
        setcase(firstFourLaptops);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Fetch کردن داده‌ها از فایل JSON کیبورد
    fetch('http://localhost:3000/Products')
      .then(response => response.json())
      .then(data => {
        // فیلتر کردن محصولاتی که نوعشان "Laptop" است
        const filteredLaptops = data.filter(product => product.type === "keyboard");
        // انتخاب ۴ تای اول از لیست لپتاپ‌ها
        const firstFourLaptops = filteredLaptops.slice(0, 4);
        // ذخیره کردن در state
        setkeyboard(firstFourLaptops);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Fetch کردن داده‌ها از فایل JSON مانیتور
    fetch('http://localhost:3000/Products')
      .then(response => response.json())
      .then(data => {
        // فیلتر کردن محصولاتی که نوعشان "Laptop" است
        const filteredLaptops = data.filter(product => product.type === "monitor");
        // انتخاب ۴ تای اول از لیست لپتاپ‌ها
        const firstFourLaptops = filteredLaptops.slice(0, 4);
        // ذخیره کردن در state
        setmonitor(firstFourLaptops);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
      <SimpleSlider />
      <Bar />
      <Bestseller dataMobail={dataMobail} />
      <Advertising1 />
      <BoxOfproducts />
      <BoxMoreProducts data1={graphicCard} data2={cases} data3={keyboard} data4={monitor} />
      <ReminderLogin />
    </div>
  )
}
