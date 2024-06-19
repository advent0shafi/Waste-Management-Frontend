// src/services/categoryService.js
import api from './api';

export const getCategories = async () => {
    const response = await api.get('categories/');
    return response.data;
};

export const createCategory = async (category) => {
    const response = await api.post('categories/', category);
    return response.data;
};

export const deleteCategory = async (id) => {
    const response = await api.delete(`categories/${id}/`);
    return response.data;
};



export const getProducts = async () => {
    const response = await api.get('products/');
    return response.data;
};


export const getColors = async () => {
    const response = await api.get('colors/');
    return response.data;
};

export const getSizes = async () => {
    const response = await api.get('sizes/');
    return response.data;
};

export const createProduct = async (product) => {
    const response = await api.post('products/', product, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const deleteProduct = async (id) => {
    const response = await api.delete(`products/${id}/`);
    return response.data;
};

