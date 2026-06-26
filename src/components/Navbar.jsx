import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fcfbf8] backdrop-blur-md ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-indigo-600"></div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            NEURALEDGE
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 text-sm">
          <a
            href="#curriculum"
            className="transition hover:text-indigo-600"
          >
            Curriculum
          </a>

          <a
            href="#testimonials"
            className="transition hover:text-indigo-600"
          >
            Students
          </a>

          <a
            href="#pricing"
            className="transition hover:text-indigo-600"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="transition hover:text-indigo-600"
          >
            FAQ
          </a>
        </div>

        {/* Button */}
        <a
          href="#pricing"
          className="rounded-full bg-black px-6 py-2.5 text-white font-semibold transition hover:bg-indigo-700"
        >
          Join Cohort
        </a>
      </nav>
    </header>
  );
};

export default Navbar;