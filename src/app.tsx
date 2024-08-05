import { Footer } from './footer';
import { NavBar } from './navbar';
import { ProjectCard } from './projectCard';

function App() {
  return (
    <div className="w-full h-full flex-grow flex flex-col bg-gray-100 dark:bg-neutral-900">
      <img src="/bg.jpg" className='absolute w-full h-full overflow-hidden'></img>
      <NavBar />
      <div className="w-full h-full flex flex-col items-center">
        <div className="max-w-2xl h-full flex flex-col w-full m-8 gap-6">
          <ProjectCard
            title="Yeast - Your Easy & Awesome Serialization Toolkit"
            description="Yeast is a Unity Code Utility Package for serializing and deserializing data to different formats such as JSON and XML"
            githubUrl='https://github.com/Christian-Schefe/Yeast'
            image="/yeast.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
