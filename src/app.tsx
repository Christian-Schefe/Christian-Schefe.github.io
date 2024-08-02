import { Footer } from './footer';
import { NavBar } from './navbar';
import { ProjectCard } from './projectCard';

function App() {
  const content = [];
  for (let i = 0; i < 5; i++) {
    content.push(<ProjectCard />);
  }

  return (
    <div className="w-full h-full flex-grow flex flex-col items-center bg-gray-100">
      <NavBar />
      <div className="max-w-2xl h-full flex flex-col w-full m-8 ">
        <h1 className="text-center font-bold text-2xl">Christian Schefe</h1>
        {content}
      </div>
      <Footer />
    </div>
  );
}

export default App;
