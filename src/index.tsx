import { createRoot } from 'react-dom/client';
import { App } from 'src/app/App';

import 'normalize.css';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
