import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header/Header';
import Home from './Pages/Home/Home/Home';
import LaunchMenu from './Pages/Home/LaunchMenu/LaunchMenu';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/" element={<Home></Home>}>
                    <Route path="breakfast" element={<p>This is breakfast</p>}></Route>
                    <Route path="launch" element={<LaunchMenu></LaunchMenu>}></Route>
                    <Route path="dinner" element={<p>This is dinner</p>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
