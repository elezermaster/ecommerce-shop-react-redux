import React, { useState } from 'react';
import Layout from '../components/Layout';

const OrdersPage = () => {
    const [isLoading, seIstLoading] = useState(false)

    return (
        <Layout isLoading={isLoading}>
        {/* <h1>home page</h1>
        <button onClick={deployProductsData}>deploy data</button>
        <button onClick={handleGetdata}>get data</button> */}
        <div className="container">
            <div className="row">
                    <div>
                        Orders Page
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OrdersPage;