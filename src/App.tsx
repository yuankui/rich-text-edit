import './App.css';
import React from "react";

function App() {
    return (
        <div className="App">
            <div className='editor'
                 onSelect={event => {
                     console.log('select div');
                 }}
                 contentEditable={true}>

                <h1 contentEditable={true}
                    onSelect={event => {
                    console.log('select h1');
                }}>title</h1>

                Hello world
                find the way of it.
            </div>
        </div>
    );
}

export default App;
