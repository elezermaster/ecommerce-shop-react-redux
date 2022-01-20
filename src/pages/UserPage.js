import React, { useState } from 'react';
import Layout from '../components/Layout';

const UserPage = () => {
    const [isLoading, seIstLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('currentUser'))

    return (
        <Layout isLoading={isLoading}>
        {/* <h1>home page</h1>
        <button onClick={deployProductsData}>deploy data</button>
        <button onClick={handleGetdata}>get data</button> */}
        <div className="container">
            <div className="row">
                    <div>
                        {`hello ${user.email}`}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default UserPage;