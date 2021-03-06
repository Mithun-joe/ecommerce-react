import React from 'react';
import './App.css';
import {setCurrentUser} from './redux/user/user.actions'
import {connect} from 'react-redux';
import Homepage from './pages/homepage/home';
import { Switch, Route , Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop'
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {auth , createUserProfileDocument} from './firebase/firebase.utils'


class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
            const {setCurrentUser} = this.props;
            this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
                if(userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);

                    userRef.onSnapshot(snapShot => {
                            setCurrentUser({
                                id: snapShot.id,...snapShot.data()
                            })
                        }
                        );
                    }
                setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route
                        exact
                        path='/signin'
                        render={
                            () => this.props.currentUser ? (
                            <Redirect to='/'/>
                            ) :
                            (
                                <SignInAndSignUp/>
                            )
                        }/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
