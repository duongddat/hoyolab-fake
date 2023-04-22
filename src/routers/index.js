//Layout
import { HeaderOnly } from '../components/Layout';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import Event from '../pages/Event';
import Article from '../pages/Article';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/profile/:idUser', component: Profile, layout: HeaderOnly},
    { path: '/contact', component: Contact},
    { path: '/event', component: Event, layout: HeaderOnly},
    { path: '/article/:id', component: Article},
]

export {publicRoutes};