import { diacritics } from '@/app/data/placeholder-data';
import KanaGrid from '@/app/ui/syllabary/kana-grid';

export default function Page() {
    return(
        <KanaGrid 
            title='Diacritics (gojūon with dakuten)' 
            kanaData={diacritics} 
            columnNb={5} 
        />
    ); 
}