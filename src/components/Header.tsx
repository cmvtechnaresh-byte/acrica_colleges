import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${isScrolled ? "shadow-[0_0_calc(1.125*16px)_rgba(0,0,0,0.15)]" : ""
        }`}
      style={{ height: "72px" }}
    >
      <div className="h-full px-6 md:px-[calc(18vw-10rem)]">
        <div className="flex items-center justify-between h-full max-w-[138rem] mx-auto">
          <Link to="/" className="font-sans text-[21px] font-bold text-foreground">
            Editorial
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
