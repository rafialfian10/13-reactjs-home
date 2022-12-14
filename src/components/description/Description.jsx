// css
import './Description.scss'

// image 
import hotel from '../../assets/img/hotel.png'
import transportation from '../../assets/img/transportation.png'
import eat from '../../assets/img/eat.png'
import duration from '../../assets/img/duration.png'
import date from '../../assets/img/date.png'

const Description = () => {
    return (
        <>
            <div className="desc-container">
                <h5>Information Trip</h5>
                <div className="info">
                    <div className='accomodation'>
                        <p>Accomodation</p>
                        <div>
                            <img src={hotel} alt=""/>
                            <h6>Hotel 4 Nights</h6>
                        </div>
                    </div>

                    <div className='transportation'>
                        <p>Transportation</p>
                        <div>
                            <img src={transportation} alt=""/>
                            <h6>Qatar Airways</h6>
                        </div>
                    </div>

                    <div className='eat'>
                        <p>Eat</p>
                        <div>
                            <img src={eat} alt=""/>
                            <h6>Included Itinerary</h6>
                        </div>
                    </div>

                    <div className='durations'>
                        <p>Duration</p>
                        <div>
                            <img src={duration} alt=""/>
                            <h6>6 Days 4 Nights</h6>
                        </div>
                    </div>

                    <div className='datetrip'>
                        <p>Date Trip</p>
                        <div>
                            <img src={date} alt=""/>
                            <h6>26 August 2020</h6>
                        </div>
                    </div>
                </div>

                <div className='desc'>
                    <h5>Description</h5>
                    <p><strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit. Similique molestias voluptas fugiat veritatis quaerat provident ipsa nostrum quia et laborum vero accusamus, neque dignissimos esse voluptatem a cum tempora reprehenderit, maiores cumque, consequatur harum quas quasi! Corporis, est, natus, facilis voluptatibus dolore aut repellendus saepe pariatur illo doloribus voluptatem maiores?</p>
                </div>
            </div>
        </>
    )
}

export default Description