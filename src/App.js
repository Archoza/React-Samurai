import './App.css';
import store from "./redux/redux-store";
import {compose} from "redux";
import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {lazyLoading} from "./hoc/lazyLoading";
const DialogsContainer = lazy(() => import ('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import ('./components/Users/UsersContainer'))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/*'} element={<ProfileContainer/>}/>
                        <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                        <Route path={'/dialogs/*'} element={<Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}/>
                        <Route path={'/users'} element={ <Suspense fallback={<Preloader/>}><UsersContainer/></Suspense>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        {/*<Route path={'/dialogs/*'} element={lazyLoading(DialogsContainer)}/>*/} //TODO Need fix bug with HOC, it's not working with HOC lazyLoading
                        {/*<Route path={'/users'} element={lazyLoading(DialogsContainer)}/>*/}
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({initialized: state.app.initialized})

let AppContainer = compose(
    connect(mapStateToProps,{initializeApp}
    )
)(App)


const SamuraiJSApp = () => {
    return (
        <React.StrictMode>
            <Router basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </Router>
        </React.StrictMode>
    )
}

export default SamuraiJSApp