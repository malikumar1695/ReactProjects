import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    onShowSideDrawerClicked = () => {
        this.setState({ showSideDrawer: false });
    }
    onMenuClicked = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar clicked={this.onMenuClicked} />
                <SideDrawer open={this.state.showSideDrawer}
                    closed={this.onShowSideDrawerClicked} />
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}

export default Layout; 