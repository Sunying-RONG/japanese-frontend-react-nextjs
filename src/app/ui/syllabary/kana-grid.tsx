"use client"
import { KanaSelectContext, KanaSelectContextType } from '../../context/kana-select-context';
import { useContext } from 'react';

export default function KanaGrid(props: { title: string; kanaData: any[]; columnNb: number}) {
    const { showOrHide } = useContext(KanaSelectContext) as KanaSelectContextType;
    return(
        <>
            <h1 className='text-center text-3xl'>{props.title}</h1>
            <div className={`w-fit grid gap-2 lg:gap-8 grid-cols-${props.columnNb} content-around mx-auto my-10`}>
                {props.kanaData.map(item => {
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
        </>
    ); 
}