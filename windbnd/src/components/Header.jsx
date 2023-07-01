import { logo,search } from "../assets"

const Header = () => {
  return (
    <div>
      <nav>
        <img className="logo-img"src={logo} alt="logo airbnb" />
          <div className="search-div">
            <h1 className="search-text">Helsinki, Finland</h1>
            <div className="divider"></div>
            <input className="search-input"type='text' placeholder='Add Guest'/>
            <button className="search-button"><img className="search-img" src={search}></img></button>
          </div>        
      </nav>
      <section>
        <h1>Stays in finland 
          <span className='hotel-rooms'>12+ stays</span>
        </h1>
      </section>
    </div>
)
}

export default Header
