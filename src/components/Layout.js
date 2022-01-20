import React from 'react';
import CustomLoader from './CustomLoader';
import Footer from './Footer';
import Header from './Header';


const Layout = (props) => {
    return (
        <div>
            {props.isLoading && <CustomLoader/>}
            <Header/>
            <div className="content">
                {props.children}
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Layout;