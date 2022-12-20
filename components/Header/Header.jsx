import Hidden from "../Hidden/Hidden";
import Navbar from "../Navbar/Navbar";

const Header = ({pedirYa}) => {
  return (
    <header>
      <Hidden />
      <Navbar pedirYa={pedirYa}/>
    </header>
  );
};

export default Header;
