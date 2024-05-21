import { monographs } from '@/app/data/placeholder-data';
import KanaGrid from '@/app/ui/syllabary/kana-grid';

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
    return(
        <KanaGrid 
            title='Monographs (gojūon)' 
            kanaData={monographsWithPlaceholder} 
            columnNb={5} 
        />
    ); 
}