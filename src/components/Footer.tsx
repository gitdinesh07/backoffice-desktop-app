import React from "react";
import { Facebook, LinkedIn, YouTube, Instagram, Twitter } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-10 md:px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div className="flex flex-col justify-between">
          <h3 className="font-semibold text-lg mb-4">Get App</h3>
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Tuned</h3>
            <div className="flex items-center gap-4 ">
              <a href="#" target="_blank" className="hover:text-blue-600">
                <Facebook fontSize="small" />
              </a>
              <a
                href="https://www.linkedin.com/in/design-drafter-01b682342/"
                target="_blank"
                className="hover:text-blue-600"
              >
                <LinkedIn fontSize="small" />
              </a>
              <a href="https://x.com/design140305" target="_blank" className="hover:text-blue-400">
                <Twitter fontSize="small" />
              </a>
              <a
                href="https://www.instagram.com/designdraftersolutions/?hl=en"
                target="_blank"
                className="hover:text-pink-600"
              >
                <Instagram fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li>MEP Design</li>
            <li>BIM Solutions</li>
            <li>Construction Management</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">AI Tools</h3>
          <ul className="space-y-2">
            <li>Engineering Design</li>
            <li>CAD to Revit Converter</li>
            <li>Revit Plugins</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Topic</h3>
          <ul className="space-y-2">
            <li>Page</li>
            <li>Page</li>
            <li>Page</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
