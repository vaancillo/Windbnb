import { logo,search } from "../assets"

const Header = () => {
  return (
    <div>
      <nav>
        <img className="logo-img"src={logo} alt="logo airbnb" />
          <div className="srch-div">
            <h1 className="srch-text">Helsinki, Finland</h1>
            <div className="divider"></div>
            <input className="srch-input"type='text' placeholder='Add Guest'/>
            <button className="srch-button"><img className="srch-img" src={search} alt="SearchIcon"></img></button>
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
