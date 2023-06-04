//Layout
import { HeaderOnly, Basic } from '../components/Layout';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Article from '../pages/Article';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/profile/:idUser', component: Profile, layout: HeaderOnly},
    { path: '/contact', component: Contact, layout: HeaderOnly},
    { path: '/login', component: Login, layout: Basic},
    { path: '/article/:id', component: Article},
]

export {publicRoutes};