import React from 'react'
import style from './Header.module.scss'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className={style.main}>

        <Link to={"/"}>Home</Link>

    </div>
  )
}

export default Header