import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { ContextPro } from './contexts/ContextPro';

ReactDOM.render(<ContextPro>
    <App />
</ContextPro>
    , document.getElementById('root'));