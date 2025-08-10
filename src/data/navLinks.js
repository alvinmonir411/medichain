import Link from "next/link";

export const navLinks = {
  guest: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ],

  patient: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Appointments", path: "/appointments" },
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/logout" },
  ],

  doctor: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Patients", path: "/patients" },
    { name: "Schedule", path: "/schedule" },
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/logout" },
  ],

  admin: [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Manage Users", path: "/users" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/logout" },
  ],
};

export let Navlinks = (
  <>
    <Link href="/">Home</Link>
    <Link href="/">DOCTORS</Link>
    <Link href="/">PATIANT</Link>
    <Link href="/">PHARMECHY</Link>
    <Link href="/">PAGE</Link>
  </>
);
