import Header from "../Header";

function Layout({ children }) {
    return (
        <aside>
            <Header />
            {children}
        </aside>
    );
}

export default Layout;