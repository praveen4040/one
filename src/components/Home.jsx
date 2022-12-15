import React from 'react'
import vg from '../assets/2.png'
import {AiFillGoogleCircle,AiFillYoutube,AiFillMinusSquare,AiFillAmazonCircle} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechNotes</h1>
          <p>solution created here!</p>
        </main>
      </div>
      <div className="home2" id="about">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We provide solution to increase the
            problem solving ability of your child.
            With our assitance your child can solve and keep
            growing in a right time.
          </p>
        </div>
      </div>
      <div className="home3">
        <div>
          <h1>Who are we?</h1><br/>
          <p>We are the techies that you need to solve your problem.
            We design things and create new technology to solve your 
            everyday problem.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay: "0.3s"
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>

          </div>
          <div style={{
            animationDelay: "0.3s"
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>

          </div>
          <div style={{
            animationDelay: "0.3s"
          }}>
            <AiFillMinusSquare/>
            <p>Square</p>
          </div>
          <div style={{
            animationDelay: "0.3s"
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
        </article>
      </div>
      </div>
      
    </>
  )
}

export default Home