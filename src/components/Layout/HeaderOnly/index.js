import Header from "../Header";

function Layout({children}) {
    return ( 
        <aside>
            <Header/>
            <div className="container">
                <div className="Content">
                    {children}
                </div>
            </div>
        </aside>
     );
}

export default Layout;