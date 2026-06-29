import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fcfbf8] backdrop-blur-md ">
      {/* Nav */}
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-[#5B4BFF]" />
          <span className="font-display text-xl font-bold tracking-tight">NEURALEDGE</span>
        </a>
        <div className="hidden gap-8 text-sm font-medium text-[#64748B] md:flex">
          <a href="#curriculum" className="hover:text-[#1E293B]">Curriculum</a>
          <a href="#testimonials" className="hover:text-[#1E293B]">Students</a>
          <a href="#pricing" className="hover:text-[#1E293B]">Pricing</a>
          <a href="#faq" className="hover:text-[#1E293B]">FAQ</a>
        </div>
        <a
          href="#pricing"
          className="rounded-full bg-[#1E293B] px-5 py-2.5 text-sm font-semibold text-[#F8FAFC] transition-colors hover:bg-[#1E293B]/85"
        >
          Join Cohort
        </a>
      </nav>
    </header>
  );
};

export default Navbar;