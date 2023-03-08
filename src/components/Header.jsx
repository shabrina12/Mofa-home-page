import React from 'react'
import star1 from '../images/Star 1.png'
import star2 from '../images/Star 2.png'
import star3 from '../images/Star 3.png'
import arrow from '../images/arrow.png'
import girl1 from '../images/girl 1.png'
import girl2 from '../images/girl 2.png'
import ig from '../images/Instagram.png'
import fb from '../images/Facebook.png'

const Header = () => {
  return (
    <header>
      <div className='left-side'>
        <h1 className='title1-container'>
          Make Your
          <div>
            <img src={star1} alt='star'/>
            <img className='star-3' src={star3} alt='star'/>
            <img className='star-2' src={star2} alt='star'/>
          </div>
        </h1>
        <h1>Fashion Look</h1>
        <h1>More Fancy</h1>

        <div className='subtitle-container'>
            <div className='line'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque fermentum scelerisque blandit tincidunt mi, eget sed. Ipsum consectetur dui suspendisse in amet, leo. Sed amet ut etiam sed semper cursus nisi. Suspendisse eros commodo.</p>
        </div>

        <div className='menu-container'>
          <div>Collection</div>
          <div className='menu-about'>About Us<img src={arrow} alt='arrow' /></div>
        </div>
      </div>

      <div className='right-side'>
        <div className='outer-oval'>
          <div className='oval'>
            <img src={girl1} alt='girl' />
          </div>
        </div>

        <div className='outer-rectangle'>
          <div className='rectangle'>
            <img src={girl2} alt='girl' />
          </div>
        </div>

        <div className='social-container'>
          <img src={ig} alt='ig' />
          <img src={fb} alt='fb'/>
        </div>
      </div>
        
    </header>
  )
}

export default Header