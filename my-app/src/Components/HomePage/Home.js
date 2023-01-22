import React from 'react'
import Selections from './Selections';
import Jumbotron from './Jumbotron';
import SecondSelection from './SecondSection'
import PromoProduct from './PromoProduct';
import SeasonalPromoOne from './SeasonalPromoOne';
import SeasonalPromoTwo from './SeasonalPromoTwo';



export default function Home() {
  return (
    <>
  <div className="App">
    <Jumbotron />
    <SecondSelection />
    <PromoProduct />
    <SeasonalPromoOne />
    <SeasonalPromoTwo />
    <Selections />
  </div>
  </>
  )
}
