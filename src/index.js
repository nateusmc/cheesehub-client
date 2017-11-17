import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';

const cheeses = [
"Bath Blue",
"Barkham Blue",
"Buxton Blue",
"Cheshire Blue",
"Devon Blue",
"Dorset Blue Vinney",
"Dovedale",
"Exmoor Blue",
"Harbourne Blue",
"Lanark Blue",
"Lymeswold",
"Oxford Blue",
"Shropshire Blue",
"Stichelton",
"Stilton",
"Blue Wensleydale",
"Yorkshire Blue"
]

ReactDOM.render(<CheeseList cheeses={cheeses}/>, document.getElementById('root'));
registerServiceWorker();
