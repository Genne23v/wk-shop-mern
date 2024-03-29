import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keyword }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keyword} />
        </Helmet>
    );
};

Meta.defaultProps = {
    title: 'Welcome To WK Shop',
    description: 'We sell the best products for value',
    keyword: 'electronics, buy electronics, value electronics',
};
export default Meta;
