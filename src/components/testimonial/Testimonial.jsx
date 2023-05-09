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
              reviewerName={`Reviwer's name`}
              reviewerCompany={`Company name`}
              desc={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi.
              `}  
              />
            </div>
            <div>
              <ReviewCard 
              reviewerName={`Reviwer's name`}
              reviewerCompany={`Company name`}
              desc={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi.
              `}  
              />
            </div>
            <div>
              <ReviewCard 
              reviewerName={`Reviwer's name`}
              reviewerCompany={`Company name`}
              desc={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi.
              `}  
              />
            </div>
            <div>
              <ReviewCard 
              reviewerName={`Reviwer's name`}
              reviewerCompany={`Company name`}
              desc={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi.
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