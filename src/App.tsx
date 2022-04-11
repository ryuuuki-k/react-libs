import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './App.css';
import Child from './Component/Child';

const queryClient = new QueryClient();

const App = () => {
  const [isOpenChild, setIsChild] = useState(true);

  const Toggle = () => (
    // ボタンを押してコンポーネントがアンマウント後3秒後にキャッシュが消える
    <button onClick={() => setIsChild(!isOpenChild)}>
      {isOpenChild ? 'unmount' : 'mount'}
    </button>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h2>React Query!!</h2>
          <Toggle />
          {isOpenChild ? <Child /> : null}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
