import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate, useLocation } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {

  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()
  const location = useLocation();

  const onLogout = ()=>{
    localStorage.clear()
    navigate("/login")
  }

  const handleSearch = ()=>{
    if(searchQuery){
      onSearchNote(searchQuery)
    }
  }

  const onClearSearch = ()=>{
    setSearchQuery("")
    handleClearSearch()
  }

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
     <h2 className='text-2xl font-bold text-black py-2'>Notes</h2>

     <Searchbar value={searchQuery}
     onChange={(s)=>{
      setSearchQuery(s.target.value)
     }}
     handleSearch={handleSearch}
     onClearSearch={onClearSearch}
     />

      {!isAuthPage && userInfo && ( 
        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
      )}
    </div>
  )
}

export default Navbar
