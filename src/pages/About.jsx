
import React from 'react'
import countryFacts from '../api/countryData.json'
import '../App.css'

const About = () => {
  return (
    <section className='section-about conntainer'>
      <h2 className='container-title'>
        Here are the Interesting Facts...
        <br />
        we're Proud of
      </h2>

      <div className="gradient-cards">

        {countryFacts.map(({ id, Countryname, capital, population, interestingFact }) => {


          return <div className="card" key={id}>
            <div className="container-card bg-blue-box">
              <p className='card-title'>
                {Countryname}
              </p>

              <p>
                <span className='card-description'>
                  Capital:
                </span>
                {capital}
              </p>

              <p>
                <span className='card-description'>
                  Population:
                </span>
                {population}
              </p>

              <p>
                <span className='card-description'>
                  Interesting Fact:
                </span>
                {interestingFact}
              </p>

            </div>
          </div>


        })}




      </div>

    </section>
  )
}

export default About



