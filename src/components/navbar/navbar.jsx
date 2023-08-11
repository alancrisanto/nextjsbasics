"use client";

import styles from './navbar.module.css'

import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      {links.map((link) => (
        <Link href={link.url} key={link.id}>
          {link.title}
        </Link>
      ))}
      <button onClick={() => console.log("logout clicked")}>Logout</button>
    </div>
  );
};

export default Navbar;