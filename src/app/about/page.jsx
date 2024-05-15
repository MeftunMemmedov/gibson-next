'use client'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const {darkMode}=useSelector(store=>store.global)
  
  return (
    <>
      <div className={`container-fluid ${darkMode?'bg-dark text-light':''}`}>
        <div className="container py-5">
        <div className="row">
          <div className="col-12">
              <h2>ABOUT GIBSON</h2>
              <p>Gibson Inc., the world’s most iconic guitar brand, has shaped the sounds of generations of musicians and music lovers across genres for more than 100 years. Founded in 1894 and headquartered in Nashville, TN, Gibson has a legacy of world-class craftsmanship, legendary music partnerships, and progressive product evolution that is unrivaled among musical instrument companies. The Gibson portfolio includes Gibson, the number one guitar brand, as well as many of the most beloved and recognizable music brands, including Epiphone, Kramer, Steinberger, MESA/Boogie, and the Gibson Pro Audio division, KRK Systems. Gibson is dedicated to quality, innovation, and sound excellence so that music lovers for generations to come will continue to experience music shaped by Gibson. Learn more at Gibson.com and follow us on Twitter, Facebook and Instagram.</p>
          
              <hr />
              <h2>Beth Rasnick</h2>
              <h3>Chief Of Staff to the CEO</h3>
              <Image 
              src={'https://images.ctfassets.net/m8onsx4mm13s/4Ra8Pf3kTHnQOZv9WUNKuB/aae4cf6bca7f70534db86a817696ceb9/Beth_Rasnick.JPG'}
              width={1140}
              height={750}
              />
              <p className='my-3'>Beth Rasnick is Gibson’s Chief Of Staff to the CEO. She acts as representative for the office of the CEO internally and externally, keeping our leadership teams focused and engaging them to determine and prioritize business strategies and action plans. She leads office of the CEO sponsored high-impact projects and works cross-functionally on strategic business initiatives from ideation to implementation.

Prior to becoming Chief Of Staff to the CEO, Beth held key positions at Gibson spanning finance, accounting, treasury, business acquisitions and divestitures, transformation initiatives, and corporate strategy. She is an emerging player of rhythm guitar which she has learned from her father.

Prior to joining Gibson, Beth held leadership positions in Voya, Inc’s strategic finance group including during the company’s IPO and rebranding initiatives. She began her career at Ernst & Young serving multiple clients in Ernst & Young's assurance practice. Beth holds a Bachelor's degree in Business Administration and a Master's degree in Accounting from the University of Georgia.</p>
          <hr />
          <h2>Anne Rohosy</h2>
          <h3>Chief Human Resource and Impact Officer</h3>
          <Image 
              src={'https://images.ctfassets.net/m8onsx4mm13s/7m6PFXPN1eDoceLxiS2TjJ/d5024eeff04875e72b783dbb4ee97809/Anne_Rohosy_MAIN_1.jpg'}
              width={1140}
              height={650}
              />

            <p className='my-3'>
            Anne Rohosy is Chief Human Resources and Transformation Officer of Gibson Inc. As a member of Gibson’s worldwide leadership team, Anne is an expert team builder and is responsible for expanding Gibson’s organizational development and business transformation worldwide with her expertise in global corporate strategy, change management, and operational execution.

Anne joins Gibson with 30 years of experience successfully building global brands in the sporting goods, tech, fashion, and lifestyle industries. Anne has held successful President and Director level executive roles in multiple Fortune 500 companies and currently sits on two global company advisory boards in the consumer apparel and technology space.

A global leader and innovator, Anne has won multiple awards for empowering women to move forward in their careers in the business community and as part of the United Nations Global Compact Women’s Empowerment Principles Leadership Group, she has worked to guide and women in the marketplace and communities across the globe.

Anne puts into action bringing new talent into the industry and has long understood that diversity of the business and people is the key to unlock future growth on a worldwide scale. Prior to joining the Gibson team, Anne served as Executive Vice President and President, Americas, and President of the Docker’s Brand at Levi Strauss & Co., and multiple Director Level roles in the Americas, Europe and LTAM while at Nike Inc. Anne presently holds advisory board positions at Brooks Sports, Inc. and the global tech firm Volumental where her insights and operational strategies continue to help the brands strategically expand in international markets, implement development strategies, as well as achieve balance within Omni Channels.

Music, amps, and guitars have filled Anne’s home for years. Her husband is an accomplished musician, guitarist, songwriter, and producer. Her sons are avid guitar players, all of whom are thrilled that she is part of Gibson!

To view all current career opportunities at Gibson, visit: https://www.gibson.com/en-US/Careers.
            </p>
          </div>


        </div>
        </div>
      </div>
    </>
  )
}

export default About
