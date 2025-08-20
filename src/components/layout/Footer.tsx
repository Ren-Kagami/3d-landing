import { FC } from "react";
import { appConfig } from "../../config/app.config";

const Footer: FC = () => (
  <footer className="py-8 text-center bg-[#659497] dark:bg-[#374a4d] text-white">
    <p className="mb-2">&copy; {new Date().getFullYear()} {appConfig.site_name}</p>
    <div className="flex justify-center space-x-4"></div>
  </footer>
);

export default Footer;