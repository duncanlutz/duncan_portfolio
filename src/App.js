import logo from './logo.svg';
import Landing from './pages/Landing';
import './css/App.css';

function App() {
  return (
    <div className="app-cont">
      <section className='s1'>
      <header className="App-header">
      </header>
      <h1 className='dl-head'>Duncan Lutz</h1>
      <h5 className='dl-sub'>video editor | animator | web developer</h5>
        <Landing />
        </section>
        <section className='s2'>
          <div></div>
        </section>
    </div>
  );
}

export default App;
