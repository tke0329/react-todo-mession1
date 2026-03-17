import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/list" element={<List />}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App;