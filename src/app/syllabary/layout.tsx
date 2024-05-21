import NavBar from '@/app/ui/nav-bar';
import SelectButtons from '../ui/syllabary/select-buttons';
import { KanaSelectProvider } from '../context/kana-select-context';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <div>
          <NavBar />
        </div>
        <div>
          <KanaSelectProvider> 
            <SelectButtons />
            {children}
          </KanaSelectProvider> 
        </div>
    </div>
  );
}