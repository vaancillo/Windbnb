import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';

function HotelRooms () {
  
    return (
      <div>
        <section className='hotels-photos-rooms'>
            <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src="https://cdn.forbes.com.mx/2021/12/Hoteles-de-lujo-tres-1-1024x682.jpg" alt="Card image cap" />
                 <div className="card-body">
                    <h5 className="card-title">Entire apartement. 2 beds</h5>
                    <p className="card-text">Stylest apartement in the center of the city</p>
                    <button href="#" className="btn-primary">SUPER HOST</button>
                  </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src="https://media.ambito.com/p/0c5616e28bf58d0403a76b5cc372f420/adjuntos/239/imagenes/036/681/0036681201/1200x675/smart/2jpg.jpg" alt="Card image cap" />
                 <div className="card-body">
                    <h5 className="card-title">Private room</h5>
                    <p className="card-text">Cozy, peaceful and private room with...</p>
                  </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src="https://www.infobae.com/new-resizer/mgEpxPqcxG2LQAETGta69SRKSfk=/1200x900/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20152251/Dorado-Beach-a-Ritz-Carlton-Reserve-3.jpg" alt="Card image cap" />
                 <div className="card-body">
                    <h5 className="card-title">Entire house</h5>
                    <p className="card-text">Modern house in remote arena</p>
                  </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src="https://i.pinimg.com/originals/da/39/ce/da39ceccbd966c17c74c016e311e1ec2.png" alt="Card image cap" />
                 <div className="card-body">
                    <h5 className="card-title">Entire apartement. 2 beds</h5>
                    <p className="card-text">Stylist room in design district</p>
                    <button href="#" className="btn-primary">SUPER HOST</button>
                  </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src="https://uh.gsstatic.es/sfAttachPlugin/2009247.jpg" alt="Card image cap" />
                 <div className="card-body">
                    <h5 className="card-title">Private room</h5>
                    <p className="card-text">Modern apartement close to nature</p>
                    <div className='star'><img src='/Estrella.png' alt='imagen de estrella' /><p>4.85</p></div>
                  </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img className="card-img-top" src="https://i0.wp.com/tucochinito.com/wp-content/uploads/2019/09/cuarto-lujo-hotel-1.jpg" alt="Card image cap" />
                 <div className="card-body">
                    <h5 className="card-title">Entire house</h5>
                    <p className="card-text">House in remote area</p>
                  </div>
            </div>
        </section>
      </div>
    )
  }
export default HotelRooms