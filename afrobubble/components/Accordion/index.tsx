import React from 'react'

interface AccordionProps {
  question: string
}

const index: React.FC<AccordionProps> = ({ question, children }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  return (
    <>
      <div className={`faq-box ${isOpen ? 'openFaq' : ''}`}>
        <div onClick={() => setOpen(!isOpen)} className='faq-box__top'>
          <h2 className='faq-box__title'>{question}</h2>
          <img src='svg/chevron.svg' alt='chevron icon' />
        </div>
        <div className='faq-box__bottom'>
          <p className='faq-box__p'>{children}</p>
        </div>
      </div>
    </>
  )
}

export default index