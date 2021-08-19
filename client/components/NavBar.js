import React from 'react'

export default function NavBar() {
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-blue-600 shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0">
          <h2 className="text-3xl font-bold text-white font-sans">
            GitHub
            <span className="pl-2 text-white font-sans font-light">
              Jobs
            </span>
          </h2>
        </div>
    </nav>
  )
}