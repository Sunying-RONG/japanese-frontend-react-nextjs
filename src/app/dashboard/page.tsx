"use client"
import { createContext, useContext, useState } from 'react';
import { monographs } from '@/app/lib/placeholder-data';

const monographsWithPlaceholder = monographs;
for (let index = 0; index < monographsWithPlaceholder.length; index++) {
    const element = monographsWithPlaceholder[index];
    if (element.pronounce === 'ya' || element.pronounce === 'yu') {
        monographsWithPlaceholder.splice(index+1, 0, {id: monographsWithPlaceholder.length, pronounce: '', hiragana: '', katakana: ''});
    }
    if (element.pronounce === 'wa') {
        monographsWithPlaceholder.splice(index+1, 0, 
        {id: monographsWithPlaceholder.length, pronounce: '', hiragana: '', katakana: ''},
        {id: monographsWithPlaceholder.length+1, pronounce: '', hiragana: '', katakana: ''},
        {id: monographsWithPlaceholder.length+2, pronounce: '', hiragana: '', katakana: ''});
    }
}

export default function Page() {
    const [showOrHide, setShowOrHide] = useState({h:true, k:true, p:true});
    function toggle(event: any) {
        const name: keyof typeof showOrHide = event.target.name;
        setShowOrHide(prev => ({
            ...prev,
            [name]: !prev[name]
        }))
    }

    return(
        <div>
            <div className='flex flex-row justify-center space-x-8 lg:my-10'>
                <button 
                    className={`w-24 h-12 rounded-2xl ${showOrHide.h ? 'bg-rose-400' : 'bg-rose-100'}`}
                    name='h'
                    onClick={toggle}>
                    Hiragana
                </button>
                <button 
                    className={`w-24 h-12 rounded-2xl ${showOrHide.k ? 'bg-sky-400' : 'bg-sky-100'}`}
                    name='k'
                    onClick={toggle}> 
                    Katakana 
                </button>
                <button 
                    className={`w-24 h-12 rounded-2xl ${showOrHide.p ? 'bg-purple-400' : 'bg-purple-100'}`}
                    name='p'
                    onClick={toggle}> 
                    Pronounce 
                </button>
            </div>
            <div className='grid gap-2 lg:gap-8 grid-cols-5 content-around mx-2 my-2 lg:mx-60'>
                {monographsWithPlaceholder.map(item => {
                    if (item.pronounce) {
                        return <div
                            key={item.id}
                            className='mx-auto flex flex-col'
                        >
                            <div className='flex flex-row'>
                                <div className={`${showOrHide.h ? 'block' : 'hidden'} mx-auto bg-rose-200 hover:bg-rose-300 text-base md:text-3xl p-2`}>{item.hiragana}</div>
                                <div className={`${showOrHide.k ? 'block' : 'hidden'} mx-auto bg-sky-200 hover:bg-sky-300 text-base md:text-3xl p-2`}>{item.katakana}</div>
                            </div>
                            <div className={`${showOrHide.p ? 'block' : 'hidden'} w-full bg-purple-100 text-sm md:text-xl p-1`}>
                                <p className='text-center'>{item.pronounce}</p>
                            </div>
                        </div>
                    } else {
                        return <div key={item.id}></div>
                    }
                })}
            </div>
        </div>
    ); 
}