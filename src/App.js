
import Title from './components/Title';
import Bar from './components/Bar';
import Modal from './components/Modal';
import Dog1 from './assets/dog1.jpg';
import Dog2 from './assets/dog2.jpg';
import Cat1 from './assets/cat1.jpg';
import Cat2 from './assets/cat2.jpg';




function App() {
  return (
    <div className='wrapper'>
      <div className='container--flex container__title--large'>
        <Title />
      </div>
      <div className='container--flex container__middle--large'>
        <Bar name={Dog1} />
        <Bar name={Dog2} />
        <Bar name={Cat1} />
        <Bar name={Cat2} />
        
      </div>
    </div>
  );
}

export default App;
