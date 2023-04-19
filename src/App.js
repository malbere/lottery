// import './App.css';
import Header from './components/header';
import Card from './components/card';
import Footer from './components/footer';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Card/> */}
      <Mainpage />
      <Footer />
    </div>
  );
}

export default App;
