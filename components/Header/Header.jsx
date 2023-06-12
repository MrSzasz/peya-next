import Hidden from "../Hidden/Hidden";
import Navbar from "../Navbar/Navbar";

const Header = ({ fn, links }) => {
  return (
    <header>
      {/* <Hidden /> */}
      <Navbar fn={fn} links={links}/>
    </header>
  );
};

export default Header;
