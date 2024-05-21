import { digraphs } from '@/app/data/placeholder-data';
import KanaGrid from '@/app/ui/syllabary/kana-grid';

export default function Page() {
    return(
        <KanaGrid 
            title='Digraphs (yōon)' 
            kanaData={digraphs}
            columnNb={3}
        />
    ); 
}