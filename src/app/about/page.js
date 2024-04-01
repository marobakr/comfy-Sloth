import React from 'react'
import Image from 'next/image'
import Main from '/public/images/product-1.jpeg'
import PageHero from '../components/pagehero'
const About = () => {
  return (
    <>
      <PageHero title={'about'} />
      <div className='About'>
        <div className='container'>
          <div className='img'>
            <Image src={Main} alt='' />
          </div>
          <div className='info'>
            <h2>our sroty</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
