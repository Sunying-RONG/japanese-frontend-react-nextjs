"use client"
import { monographs, digraphs } from '@/app/lib/placeholder-data';
import SelectButtons from '../ui/select-buttons';
import { KanaSelectContext, KanaSelectContextType } from '../context/kana-select-context';
import { useContext } from 'react';

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
    const { showOrHide } = useContext(KanaSelectContext) as KanaSelectContextType;
    return(
        <div>
            <SelectButtons />
            <h1 className='text-center text-3xl'>Monographs (gojūon)</h1>
            <div className='w-fit grid gap-2 lg:gap-8 grid-cols-5 content-around mx-auto my-10'>
                {monographsWithPlaceholder.map(item => {
                    if (item.pronounce) {
                        return <div
                            key={item.id}
                            className='mx-auto flex flex-col'
                        >
                            <div className='flex flex-row'>
                                <div className={`${showOrHide!.h ? 'block' : 'hidden'} mx-auto bg-rose-200 hover:bg-rose-300 text-base md:text-3xl p-2`}>{item.hiragana}</div>
                                <div className={`${showOrHide!.k ? 'block' : 'hidden'} mx-auto bg-sky-200 hover:bg-sky-300 text-base md:text-3xl p-2`}>{item.katakana}</div>
                            </div>
                            <div className={`${showOrHide!.p ? 'block' : 'hidden'} w-full bg-purple-100 text-sm md:text-xl p-1`}>
                                <p className='text-center'>{item.pronounce}</p>
                            </div>
                        </div>
                    } else {
                        return <div key={item.id}></div>
                    }
                })}
            </div>
            <h1 className='text-center text-3xl'>Digraphs (yōon)</h1>
            <div className='w-fit grid gap-2 lg:gap-8 grid-cols-3 content-around mx-auto my-10'>
                {digraphs.map(item => {
                    return <div
                        key={item.id}
                        className='mx-auto flex flex-col'
                    >
                        <div className='flex flex-row'>
                            <div className={`${showOrHide!.h ? 'block' : 'hidden'} mx-auto bg-rose-200 hover:bg-rose-300 text-base md:text-3xl p-2`}>{item.hiragana}</div>
                            <div className={`${showOrHide!.k ? 'block' : 'hidden'} mx-auto bg-sky-200 hover:bg-sky-300 text-base md:text-3xl p-2`}>{item.katakana}</div>
                        </div>
                        <div className={`${showOrHide!.p ? 'block' : 'hidden'} w-full bg-purple-100 text-sm md:text-xl p-1`}>
                            <p className='text-center'>{item.pronounce}</p>
                        </div>
                    </div>
                })}
            </div>
            <SelectButtons />
        </div>
    ); 
}