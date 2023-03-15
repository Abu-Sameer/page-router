import { BrowserRouter } from 'react-router-dom';
import Meetup from './Meetup';
// import Service from './ServicesBody/Service';

function App() {
  return (
    <BrowserRouter>
      <Meetup />
    </BrowserRouter>
    // <div className="App">
    //   <Service />
    // </div>
  );
}

export default App;
