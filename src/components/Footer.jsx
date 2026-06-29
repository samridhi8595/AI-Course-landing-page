import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="border-t border-[#E2E8F0] px-6 py-12 bg-[#F8FAFC]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-[#5B4BFF]/60" />
            <span className="font-display font-bold tracking-tight text-[#64748B]">
              NEURALEDGE
            </span>
          </div>
          <p className="text-sm text-[#64748B]">
            © 2026 NeuralEdge Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="text-[#64748B] hover:text-[#5B4BFF]">Privacy</a>
            <a href="#" className="text-[#64748B] hover:text-[#5B4BFF]">Terms</a>
            <a href="#" className="text-[#64748B] hover:text-[#5B4BFF]">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
