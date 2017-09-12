import React from 'react'
import Form from './Form';
import Home from './Home';
import Footer from './home/Footer';
import Farm from './Farm';
import Almacen from './Almacen';
import Information from './Information';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: Home
    },
    {
        path: '/forms',
        sidebar: () => <div>Form!</div>,
        main: Form
    },
    {
        path: '/one',
        sidebar: () => <div>one!</div>,
        main: () => <h2>One</h2>
    },
    {
        path: '/footer',
        sidebar: () => <div>Footer!</div>,
        main: Footer
    },
    {
        path: '/Farm',
        sidebar: () => <div>Farm!</div>,
        main: Farm
    },
    {
        path: '/Almacen',
        sidebar: () => <div>Almacen!</div>,
        main: Almacen
    },
    {
        path: '/informations',
        sidebar: () => <div>Information!</div>,
        main: Information
    }
    
]

export default routes