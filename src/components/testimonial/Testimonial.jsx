import React from 'react'
import ReviewCard from '../ReviewCard'
import Slider from 'infinite-react-carousel'


const Testimonial = () => {


  return (
    <section className='testimonial-section' id='testimonial'>
      <div className="container grid">
        <div className="title">
          <h1 className='text-neutral-300 fw-extra-bold fs-section-title ff-primary'>
            WHAT <span className='fw-light'>THEY SAY</span>
          </h1>
        </div>
  
        <div className="testimonial-list">
          <Slider 
            dots 
            arrows={false}
            className='slide-size'
          >
            <div>
              <ReviewCard 
              reviewerName={`Vince StaL`}
              reviewerCompany={`Upwork's Client`}
              desc={`
                A nice person I worked with.
              `}  
              />
            </div>
            <div>
              <ReviewCard 
              reviewerName={`Ajmal Bajawray`}
              reviewerCompany={`Upwork's Client`}
              desc={`
                Good person!
              `}  
              />
            </div>
          </Slider>
          
        </div>

      </div>
    </section>
  )
}

export default Testimonial