
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Buffer } from 'buffer';

window.Buffer = Buffer;

createRoot(document.getElementById("root")).render(<App />);
