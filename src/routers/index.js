//Layout
import { HeaderOnly } from '../components/Layout';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/profile', component: Profile, layout: HeaderOnly},
    { path: '/contact', component: Contact},

]

export {publicRoutes};