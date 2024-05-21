"use client"
import { useContext } from "react";
import { KanaSelectContext, KanaSelectContextType } from "../../context/kana-select-context";

export default function SelectButtons() {
    const { showOrHide, updateSelect } = useContext(KanaSelectContext) as KanaSelectContextType;

    return (
        <div className='flex flex-row justify-center space-x-8 my-10'>
            <button 
                className={`w-24 h-12 rounded-2xl ${showOrHide!.h ? 'bg-rose-400' : 'bg-rose-100 line-through'}`}
                name='h'
                onClick={updateSelect}>
                Hiragana
            </button>
            <button 
                className={`w-24 h-12 rounded-2xl ${showOrHide!.k ? 'bg-sky-400' : 'bg-sky-100 line-through'}`}
                name='k'
                onClick={updateSelect}> 
                Katakana 
            </button>
            <button 
                className={`w-24 h-12 rounded-2xl ${showOrHide!.p ? 'bg-purple-400' : 'bg-purple-100 line-through'}`}
                name='p'
                onClick={updateSelect}> 
                Pronounce 
            </button>
        </div>
    );
}
