import Home from './pages/Home';
import List from './pages/List';
import Active from './pages/Active';
import Completed from './pages/Completed';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


const App = () => {

    return (
        <>
            <BrowserRouter>
        <nav>
            <Link to="/">메인화면</Link>
            <Link to="/list/active">진행중인 목록</Link>
            <Link to="/list/completed">완료된 목록</Link>
        </nav>
                <div className="b2">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/list/active" element={<Active />}></Route>
                <Route path="/list/completed" element={<Completed />}></Route>
            </Routes>
                </div>
        </BrowserRouter>
        </>
    )

}

export default App;
