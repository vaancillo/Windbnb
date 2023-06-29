function App () {

  return (
    <header>
      <nav>
        <img src="./src/assets/logo.svg" alt="logo del airbnb" />
        <ul>
          <li className='search-bar'><input type='text' placeholder='Add Guest' /></li>
        </ul>
      </nav>
      <HotelRooms />
    </header>
  )
}

function HotelRooms () {
  
  return (
    <div className='hotel-rooms'>
      <h1>Stays in finland</h1>
    </div>
  )
}

export default App
