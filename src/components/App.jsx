import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';

const createNote = note=>{
    return (
        <Note 
            key={note.key}
            title={note.title}
            content={note.content}
        />
    );
}


const App = ()=> {
    return (<div>
    <Header />
    {notes.map(createNote)}

    <Footer />
    </div>
    );
}


export default App;