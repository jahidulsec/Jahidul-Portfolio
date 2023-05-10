import React from 'react'
import { BsQuote } from 'react-icons/bs'

const ReviewCard = ({reviewerName, reviewerCompany, desc}) => {
  return (
    <article className='testimonial-card bg-light-200'>
        <div className="quotation">
            <BsQuote size={80}/>
        </div>
        <p className='text-primary ff-primary fw-regular fs-para'>
            {desc}
        </p>
        <div className="testimonial-footer">
            <div className="circles">
                <span className="circle-dark"></span>
                <span className="circle-dark"></span>
            </div>
            <div className="author">
                <h4 className='text-primary ff-primary fw-bold fs-para'>{reviewerName}</h4>
                <h4 className='text-primary ff-primary fw-regular fs-para'>{reviewerCompany}</h4>
            </div>
        </div>
    </article>
  )
}

export default ReviewCard