import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mepAnchorEl, setMepAnchorEl] = useState<null | HTMLElement>(null);
  const [bimAnchorEl, setBimAnchorEl] = useState<null | HTMLElement>(null);
  const openMep = Boolean(mepAnchorEl);
  const openBim = Boolean(bimAnchorEl);
  const handleMepClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMepAnchorEl(event.currentTarget);
  };
  const handleBimClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setBimAnchorEl(event.currentTarget);
  };
  const handleMepClose = () => {
    setMepAnchorEl(null);
  };
  const handleBimClose = () => {
    setBimAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="p-6 md:flex md:justify-between md:items-center sticky top-0 z-50 border-b-[1px] border-b-[#333]">
        <div className="flex justify-between items-center">
          <div className="title flex items-center gap-3">
            <img src="../assets/logo.svg" alt="logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold gradient-color">
              <Link to="/">Design Draft</Link>
            </h1>
          </div>

          {/* Hamburger Button */}
          <button className="text-3xl md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-5">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-blue-600">
            About US
          </Link>
          <button
            id="mep-button"
            aria-controls={openMep ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMep ? "true" : undefined}
            onClick={handleMepClick}
            className="cursor-pointer"
          >
            MEP Design
          </button>
          <button>AI Tools</button>
          <button
            id="bim-button"
            aria-controls={openBim ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openBim ? "true" : undefined}
            onClick={handleBimClick}
            className="cursor-pointer"
          >
            BIM Services
          </button>
          <Link to="/contact-us" className="hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isMenuOpen ? "max-h-72 shadow-sm" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 py-3">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-blue-600">
              About US
            </Link>
            <button
              id="mep-mobile-button"
              aria-controls={openMep ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMep ? "true" : undefined}
              onClick={handleMepClick}
              className="cursor-pointer text-start"
            >
              MEP Design
            </button>
            <button className="cursor-pointer text-start">AI Tools</button>
            <button
              id="bim-mobile-button"
              aria-controls={openBim ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openBim ? "true" : undefined}
              onClick={handleBimClick}
              className="cursor-pointer text-start"
            >
              BIM Services
            </button>
            <Link to="/contact-us" className="hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <Menu
        id="mep-menu"
        anchorEl={mepAnchorEl}
        open={openMep}
        onClose={handleMepClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "&. MuiPaper-root": {
            background: "#111",
          },
        }}
      >
        <MenuItem onClick={handleMepClose}>
          <Link to="/mep/electrical">Electrical</Link>
        </MenuItem>
        <MenuItem onClick={handleMepClose}>
          <Link to="/mep/hvac">HVAC</Link>
        </MenuItem>
        <MenuItem onClick={handleMepClose}>
          <Link to="/mep/fire-fighting">Fire Fighting</Link>
        </MenuItem>
        <MenuItem onClick={handleMepClose}>
          <Link to="/mep/plumbing">Plumbing</Link>
        </MenuItem>
      </Menu>
      <Menu
        id="bim-menu"
        anchorEl={bimAnchorEl}
        open={openBim}
        onClose={handleBimClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "&. MuiPaper-root": {
            background: "#111",
          },
        }}
      >
        <MenuItem onClick={handleBimClose}>
          <Link to="/bim/solution">BIM Solution</Link>
        </MenuItem>
        <MenuItem onClick={handleBimClose}>
          <Link to="/bim/manpower">Staffing / Secondment</Link>
        </MenuItem>
        <MenuItem onClick={handleBimClose}>
          <Link to="/bim/training">BIM Training</Link>
        </MenuItem>
        <MenuItem onClick={handleBimClose}>
          <Link to="/bim/e-learning">E-Learning</Link>
        </MenuItem>
        <MenuItem onClick={handleBimClose}>
          <Link to="/bim/cad-to-revit">CAD to Revit</Link>
        </MenuItem>
        <MenuItem onClick={handleBimClose}>
          <Link to="/bim/revit-plugins">Revit Plugins</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
