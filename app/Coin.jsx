"use client"
import React, { useEffect, useState } from 'react'

const Coin = () => {
    const [value, setValue] = useState(null);


    const handleOnclick = () => {
        setValue(-1)
        const newVal = Math.random();
        const timeOut = newVal <= 0.5 ? 2000 : 2250;
        // const timeOut = newVal <= 0.5 ? 4000 : 4000;
        setTimeout(() => {
            setValue(newVal.toFixed(1));
        }, timeOut)
    }

    return (
        <div className='container'>
            <div onClick={() => handleOnclick()} className={`coin ${value < 0 ? 'toss_coin' : ''}`} >
                <div className={`coin__heads ${value < 0 ? 'animet_1' : value > 0.5 ? 'show' : 'hide'}`}>
                    <span className='items-center justify-center w-full h-full'>H</span>
                    {/* <br />{value} */}
                </div>
                <div className={`coin__tails ${value < 0 ? 'animet_2' : value <= 0.5 ? 'show' : 'hide'}`}>
                    <span>T</span>
                </div>
            </div>
        </div>
    )
}

export default Coin

