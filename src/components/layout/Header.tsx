import Link from 'next/link';
import * as React from 'react';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  return (
    // <header className='sticky top-0 z-50 bg-white'>
    //   <div className='flex h-14 items-center justify-between'>
    //     <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
    //       Home
    //     </UnstyledLink>
    //     <nav>
    //       <ul className='flex items-center justify-between space-x-4'>
    //         {links.map(({ href, label }) => (
    //           <li key={`${href}${label}`}>
    //             <UnstyledLink href={href} className='hover:text-gray-600'>
    //               {label}
    //             </UnstyledLink>
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   </div>
    // </header>

    <header className='layout navbar z-50 bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
          >
            <li>
              <a>How It Works</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Newsroom</a>
            </li>
          </ul>
        </div>
        <Link href='/' passHref>
          <a className='btn btn-ghost text-xl normal-case'>Midi-chlorian</a>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a>How It Works</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          {/* <li tabIndex={0}>
            <a>
              Parent
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
              </svg>
            </a>
            <ul className='p-2'>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a>Newsroom</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Get started</a>
      </div>
    </header>
  );
}
