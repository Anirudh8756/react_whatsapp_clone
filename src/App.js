import { Provider } from 'react-redux';
import appstore from './redux/Store';
import Zuzapp from './Zuzapp';
function App() {
  return (
    <Provider store={appstore}>
      <Zuzapp/>
    </Provider>
  );
}

export default App;
