import { Provider, provider } from 'react-redux';
import appstore from './redux/Store';

function App() {
  return (
    <Provider store={appstore}>
      <div>
        <h1>App</h1>
      </div>
    </Provider>
  );
}

export default App;
