import Hidden from "../Hidden/Hidden";
import Navbar from "../Navbar/Navbar";

const Header = ({ fn }) => {
  return (
    <header>
      {/* <Hidden /> */}
      <Navbar fn={fn} />
    </header>
  );
};

export default Header;
