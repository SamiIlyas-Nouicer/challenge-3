import  { ReactComponent as  Logo} from './images/logo.svg'
const Nav = () => {
    return ( 
        <nav className="navbar">
           <div className="logo"> <Logo /> </div>
              <div className="links">
                <a href="/">Home</a>
                <a href="/">New </a>
                <a href="/">Popular</a>
                <a href="/">Trending</a>
                <a href="/">Categories</a>
                </div>
                 

        </nav>
     );
}
 
export default Nav;