import './App.css';
import BannerBg from './Pages/Home/BannerBg/BannerBg';

import FirstHeader from './Shared/Header/FirstHeader/FirstHeader';
import SecondHeader from './Shared/Header/SecondHeader/SecondHeader';

function App() {
    return (
        <div>
            <FirstHeader></FirstHeader>
            <BannerBg></BannerBg>
            <SecondHeader></SecondHeader>
        </div>
    );
}

export default App;
