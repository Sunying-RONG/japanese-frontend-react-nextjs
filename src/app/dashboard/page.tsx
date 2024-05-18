import { monographs } from '@/app/lib/placeholder-data';

export default function Page() {
    return(
        <div className='grid gap-6 grid-cols-5 content-around mx-60'>
            {monographs.map((item) => (
                <div
                    key={item.pronounce}
                    className='mx-auto flex flex-col border-4 border-purple-100 rounded-md'
                >
                    <div className='flex flex-row'>
                        <div className='mx-auto bg-rose-200 text-3xl p-6'>{item.hiragana}</div>
                        <div className='mx-auto bg-sky-200 text-3xl p-6'>{item.katakana}</div>
                    </div>
                    <div className='w-full bg-purple-100 text-xl p-2'>
                        <p className='text-center'>{item.pronounce}</p>
                    </div>
                </div>
                
            ))}
        </div>
        
    ); 
}