import React from 'react';
import './OurServices.css';
import Data from './Data';
import OurServicesBody from './OurServicesBody';

export default function OurService() {
  const [isToggle, setIsToggle] = React.useState(true);
  const ServiceElement = Data.map((service) => {
    return (
      <OurServicesBody key={service.id} {...service} isToggle={isToggle} />
    );
  });
  function toggle() {
    setIsToggle((prev) => !prev);
  }
  return (
    <div
      className="ourservice-container"
      style={{
        backgroundColor: isToggle ? 'rgb(231, 237, 240)' : 'rgb(3, 3, 33)',
      }}
    >
      <div className="head">
        <div className="body">
          <span className={isToggle ? 'light' : 'lightOpt'}>light</span>
          <div className={isToggle ? 'box' : 'boxtog'} onClick={toggle}>
            <div className={isToggle ? 'tog' : 'togged'}></div>
          </div>
          <span className={isToggle ? 'dark' : 'darkOpt'}>Dark</span>
        </div>
        <h1 className={isToggle ? 'titleTog' : 'titletogged'}>Our Services</h1>
      </div>

      <div className="card-container">{ServiceElement}</div>
    </div>
  );
}
