import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from '../../../views/Home/Home';
import ErrorPage from '../../../views/ErrorPage/ErrorPage';

<Router>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
</Router>