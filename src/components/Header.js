import logoNetflix from "../assets/img/logo_netflix.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logoNetflix} alt="Logo Netflix" />
    </div>
  );
};

export default Header;
