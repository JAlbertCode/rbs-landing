import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import ButtonGroup from '../elements/ButtonGroup';
// import Button from '../elements/Button';
// import Image from '../elements/Image';
// import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  // const innerClasses = classNames(
  //   'hero-inner section-inner',
  //   topDivider && 'has-top-divider',
  //   bottomDivider && 'has-bottom-divider'
  // );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div >
        {/* className={innerClasses} */}
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Renewal 
            </h1>
            
          </div>
          
          <div className='schedule' >  
          <iframe title='scheduler'
              src="https://renewalshop.setmore.com/"
              scrolling="yes"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
