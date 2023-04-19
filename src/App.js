import './App.css';
import Header from './components/header';
import Card from './components/card';
import Footer from './components/footer';
import MainPage from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">HOW TO PLAY?</h1>
        <div className="flex justify-center space-x-8">
          <div className="w-80 p-4 flex items-center bg-opacity-75 bg-blue-900">
            <p className="text-white font-bold text-8xl mr-4">1</p>
            <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
          </div>
          <div className="w-80 p-4 flex items-center bg-opacity-75 bg-blue-900">
            <p className="text-white font-bold text-8xl mr-4">2</p>
            <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
          </div>
          <div className="w-80 p-4 flex items-center bg-opacity-75 bg-blue-900">
            <p className="text-white font-bold text-8xl mr-4">3</p>
            <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
