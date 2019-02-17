import Vue from 'vue';
import VueRouter from 'vue-router';
import CartList from '../components/cart/CartList.vue';
import ProductList from '../components/product/ProductList.vue';
import NotFound from '../components/NotFound.vue';
import ProductItem from '../components/product/ProductItem.vue';
import LoginBox from '../components/login/LoginBox.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/products',
            component: ProductList
        },
        {
            path: '/cart',
            component: CartList
        },
        {
            path: '/',
            component: ProductList
        },
        {
            path: '/products/:id',
            component: ProductItem,
            props: true
        },
        {
            path: '/login',
            component: LoginBox
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});

export default router;