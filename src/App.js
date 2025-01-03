import { Provider } from 'react-redux';
import appstore from './redux/Store';
import Zuzapp from './Zuzapp';
import './css/root.scss';
import ReactDOM from 'react-dom'


function App() {
  return (
    <Provider store={appstore}>
      <Zuzapp/>
    </Provider>
  );
}

export default App;
