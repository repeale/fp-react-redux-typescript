import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => (
    <div>My Minimal React Webpack Babel Setup</div>
)

ReactDOM.render(<App />,document.getElementById('app'))

if (module.hot) {
    module.hot.accept();
}
