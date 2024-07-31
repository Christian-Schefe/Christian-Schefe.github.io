import { Footer } from './footer';
import { ProjectCard } from './projectCard';
import { ThemeToggle } from './themeToggle';

function App() {
  const content = [];
  for (let i = 0; i < 5; i++) {
    content.push(<ProjectCard />);
  }

  return (
    <>
      <div className="max-w-2xl h-full flex flex-col w-full m-8">
        <ThemeToggle />
        <h1 className="text-center font-bold text-2xl">Christian Schefe</h1>
        {content}
      </div>
      <Footer />
    </>
  );
}

export default App;
