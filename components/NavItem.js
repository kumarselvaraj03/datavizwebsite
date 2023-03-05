import Link from "next/link";

const NavItem = ({ text, href }) => {
  return (
    <Link className={`nav__link font-bold text-slate-700 hover:text-slate-900`} href={href}>{text}</Link>
  );
};

export default NavItem;