import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-dark sm:text-xl font-weight-bold font-montserrat text-decoration-none"
    >
      {title}
    </Link>
  );
};

export default NavLink;
