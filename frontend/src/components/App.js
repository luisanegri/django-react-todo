import Dashboard from './todos/Dashboard'; // added

import { Provider } from 'react-redux'; // added
import store from '../store'; // added

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}
