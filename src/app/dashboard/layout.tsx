 import NavBar from '@/app/ui/nav-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <div>
            <NavBar />
        </div>
        <div>{children}</div>
    </div>
  );
}