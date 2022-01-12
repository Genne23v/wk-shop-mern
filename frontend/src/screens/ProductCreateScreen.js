import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { createProduct } from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';

const ProductCreateScreen = ({ history }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);

    const dispatch = useDispatch();

    const productCreate = useSelector((state) => state.productCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
    } = productCreate;

    useEffect(() => {
        if (successCreate) {
            dispatch({ type: PRODUCT_CREATE_RESET });
            history.push('/admin/product-list');
        }
    }, [dispatch, history, successCreate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createProduct({
                name,
                price,
                image,
                brand,
                category,
                countInStock,
                description,
            }),
        );
    };

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            const { data } = await axios.post('/api/upload', formData, config);

            setImage(data);
            setUploading(false);
        } catch (err) {
            console.error(err);
            setUploading(false);
        }
    };

    return (
        <>
            <Link to='/admin/product-list' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Create Product</h1>
                {loadingCreate && <Loader />}
                {errorCreate && (
                    <Message variant='danger'>{errorCreate}</Message>
                )}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name' className='mb-2'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price' className='mb-2'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Enter price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='image' className='mb-2'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter image url'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        ></Form.Control>

                        <Form.File
                            id='image-file'
                            custom
                            onChange={uploadFileHandler}
                            style={{ width: '100%' }}
                        ></Form.File>
                        {uploading && <Loader />}
                    </Form.Group>

                    <Form.Group controlId='brand' className='mb-2'>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter brand'
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='countInStock' className='mb-2'>
                        <Form.Label>Count In Stock</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Enter countInStock'
                            value={countInStock}
                            onChange={(e) => setCountInStock(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='category' className='mb-2'>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='description' className='mb-3'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Create
                    </Button>
                </Form>
            </FormContainer>
        </>
    );
};

export default ProductCreateScreen;
