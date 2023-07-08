import { logo, search } from '../assets'

const Header = () => {
  return (
    <div>
      <nav>
        <img className='logo-img' src={logo} alt='logo airbnb' />
        <div className='srch-div'>
          <h1 className='srch-text'>Helsinki, Finland</h1>
          <div className='divider' />
          <input className='srch-input' type='text' placeholder='Add Guest' />
          <div className='divider2' />
          <button className='srch-button'><img className='srch-img' src={search} alt='SearchIcon' /></button>
        </div>
      </nav>
      <section>
        <h1 className='header-title'>Stays in finland
          <span className='hotel-rooms'>12+ stays</span>
        </h1>
      </section>
    </div>
  )
}

export default Header
