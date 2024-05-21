import { digraphsDiacritics } from '@/app/data/placeholder-data';
import KanaGrid from '@/app/ui/syllabary/kana-grid';

export default function Page() {
    return(
        <KanaGrid 
            title='Digraphs with diacritics (yōon with dakuten)' 
            kanaData={digraphsDiacritics}
            columnNb={3}
        />
    ); 
}