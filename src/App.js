import React from 'react';
import DataPokemon from './composants/DataPokemon';
import Api from './composants/Api';
import Header from './composants/header';
import "./styles/Header.css";

import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
        return ( 
            <div className='application'>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/Home" element={<DataPokemon/>}/>
                    <Route path="/Api" element={<createPokemonObject/>}/>
                    <Route exact path="/" element={<DataPokemon/>}/>
                </Routes>
        </BrowserRouter>
        </div>
        );
    }

export default App;