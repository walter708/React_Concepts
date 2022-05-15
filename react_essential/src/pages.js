import React from 'react'
import {Link, useLocation , Outlet} from 'react-router-dom'


export function Home(){
  return (
    <div>
      <h1>[Companies Website]</h1>
      <nav>
        <Link to='about'>About</Link>
        <Link to='events'>Events</Link>
        <Link to='contacts'>Contacts</Link>
        <Link to='pancakes'>Don't Exist</Link>
      </nav>
    </div>
  )
};

export function About(){
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
    
  )
};
export function Services(){
  return (
    <div>
      <h1>Our Services</h1>
    </div>
  )
};
export function CompanyHistory(){
  return (
    <div>
      <h1>Our History</h1>
    </div>
  )
};
export function Location(){
  return (
    <div>
      <h1>Our Location</h1>
    </div>
  )
};

export function Events(){
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  )
};

export function Contact(){
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  )
};

export function Woops404(){
  let location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>Resource not found at {location.pathname} </h1>
    </div>
  )
};