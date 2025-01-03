import { Provider } from 'react-redux';
import appstore from './redux/Store';
import Zuzapp from './Zuzapp';
import './css/root.scss';
function App() {
  return (
    <Provider store={appstore}>
      <Zuzapp/>
    </Provider>
  );
}

export default App;
