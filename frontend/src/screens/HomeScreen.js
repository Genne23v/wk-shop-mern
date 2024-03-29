import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
    const dispatch = useDispatch();
    const keyword = match.params.keyword;

    const pageNum = match.params.pageNum || 1;

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNum));
    }, [dispatch, keyword, pageNum]);

    return (
        <>
            <Meta />
            {!keyword ? (
                <><ProductCarousel /><h1>Latest Products</h1></>
            ) : (
                <><Link to='/' className='btn btn-light'>
                        Go Back
                    </Link><h1>Search result for {keyword}</h1></>
            )}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    <Paginate
                        pages={pages}
                        page={page}
                        keyword={keyword ? keyword : ''}
                    />
                </>
            )}
        </>
    );
};

export default HomeScreen;
