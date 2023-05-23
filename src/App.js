import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header/Header';
import Home from './Pages/Home/Home/Home';
import LaunchMenu from './Pages/Home/LaunchMenu/LaunchMenu';
import Launch from './Pages/Home/Launch/Launch';
import SecondHeader from './Pages/Home/Shared/SecondHeader/SecondHeader';
import Cart from './Pages/Cart/Cart';
import BreakfastMenu from './Pages/Home/BreakfastMenu/BreakfastMenu';
import Breakfast from './Pages/Home/Breakfast/Breakfast';
import DinnerMenu from './Pages/Home/DinnerMenu/DinnerMenu';
import Dinner from './Pages/Home/Dinner/Dinner';
import Signup from './Pages/Login/Signup/Signup';
import Login from './Pages/Login/Login/Login';
import OrderComplete from './Pages/OrderComplete/OrderComplete';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Shared/NotFound/NotFound';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}>
                    <Route path="/breakfast" element={<BreakfastMenu></BreakfastMenu>}></Route>
                    <Route path="/launch" element={<LaunchMenu></LaunchMenu>}></Route>
                    <Route path="/dinner" element={<DinnerMenu></DinnerMenu>}></Route>
                    {/* <Route path="/dinner" element={<Launch></Launch>}></Route> */}
                </Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route
                    path="/ordercomplete"
                    element={
                        <RequireAuth>
                            <OrderComplete />
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
                <Route path="/launch/:launchId" element={<Launch></Launch>}></Route>
                <Route path="/breakfast/:breakfastId" element={<Breakfast></Breakfast>}></Route>
                <Route path="/dinner/:dinnerId" element={<Dinner></Dinner>}></Route>
            </Routes>
        </div>
    );
}

export default App;
