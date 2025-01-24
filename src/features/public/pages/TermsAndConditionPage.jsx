import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import MeetOurTeam from '../components/MeetOurTeam'
import SecBreadCrumb from '../../../components/SecBreadCrumb'


const terms = [
  
    {
      title : "Acceptance of Terms",
      paragraph : "By using our services, you affirm that you are at least 18 years old and have the legal capacity to enter into this agreement. Your use of our services constitutes acceptance of these Terms and Conditions."
    },
    {
      title : " Services Provided",
      paragraph : "The Company offers real estate services, including but not limited to:"
    },
    {
      title : " User Responsibilities",
      paragraph : "As a user of our website and services, you agree:",
      subLines : [
        "To provide accurate and up-to-date information","To use our platform for lawful purposes only","To use our platform for lawful purposes only"
      ]
    },
    {
      title : " Privacy Policy",
      paragraph : "Our use of your personal information is governed by our estatela. By using our services, you consent to the collection and use of your information as described.",
      
    },
    {
      title : " Listings and Descriptions",
      paragraph : "The Company strives to ensure the accuracy of property listings. However:",
      subLines : [
        "We do not guarantee the completeness or reliability of property details.", "Listings are provided by third parties, and any discrepancies should be addressed with the relevant party"
      ]
    }
  
]

const TermsBox = ({serial,title, paragraph, subLines}) => {
  console.log(subLines)
  return (
    <div className='md:py-10 py-5 md:pr-32 flex border-b-2 flex-col gap-5'>
      <h4 className='md:text-2xl text-lg text-neutral-700 font-semibold leading-10 font-sans'>
      {serial + 1}. {title}
      </h4>

      <div className='md:w-3/4'>
          <p className='font-normal text-neutral-500 text-sm md:text-xl font-heading'>
          {
            paragraph
          }
          </p>

          {
            subLines && (
              <ul className='font-heading text-sm md:text-xl font-normal text-neutral-500 px-3 flex flex-col gap-3 my-3'>
            {
              subLines.map((l,i) => <li className='flex gap-2' key={i}><div className='text-center w-3'>{i+1}</div> <div>.</div> {l}</li> )
            }
            
            

          </ul>
            )
          }
      </div>
    </div>
  )
}

const TermsAndConditionPage = () => {
  return (
    <section>
            <BreadCrumb className={'hidden md:block'} currentPage={"Terms & Conditions"} />
        <Container className={"md:my-20"}>
            <SecBreadCrumb className={"block md:hidden"} currentPageTitle={'terms & conditions'} />

            
             <div className='border-b-2  pb-10'>
             <h2 className='font-sans text-neutral-700 text-2xl md:text-4xl my-3 md:my-5 font-bold'>Terms & condition</h2>
              <h4 className='font-sans  text-neutral-500 text-lg md:text-2xl font-semibold leading-10 my-5 md:my-10'>Last Updated: 27 Nov 2024</h4>
              <p className='font-heading'>Welcome to Estatela. By accessing or using our website ([Website URL]) and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
             </div>

            {
              terms.map((t,i) => <TermsBox key={i} serial = {i} title={t.title} paragraph={t.paragraph} subLines={t.subLines} />)
            }

            <MeetOurTeam />
        </Container>
    </section>
  )
}

export default TermsAndConditionPage