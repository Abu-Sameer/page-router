import React from 'react';
import '../HomeBody/Home.css';
import homeImage from './home-image.jpeg';
import homeSideImage from './home-side-image.jpeg';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-main-section">
        <div className="home-section-title">
          <img src={homeImage} alt="home" />
          <div className="home-head-title">
            <p className="title">Stock Market</p>
            <p className="title-body">Ultimate City of Service</p>
          </div>
        </div>
        <div className="home-text-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            dapibus arcu nulla, vitae laoreet tortor tincidunt vel. Curabitur
            sit amet diam ut felis porttitor porta ultricies ac nisi. Sed
            efficitur molestie maximus. Suspendisse pretium est condimentum,
            viverra eros accumsan, dictum quam. Proin pellentesque velit lorem,
            in rutrum tellus ultrices et. Integer tincidunt nisi vel nunc
            molestie suscipit vel commodo augue. Proin blandit diam non leo
            pellentesque finibus. Cras non risus sapien. Nullam sed lorem purus.
            Donec sollicitudin, est vitae fringilla dapibus, tellus nisi
            vestibulum est, maximus iaculis ipsum sapien a nisl. Proin et arcu
            commodo, faucibus velit quis, vestibulum nisl. Nullam at odio
            vulputate, vulputate ipsum quis, cursus sapien. Cras malesuada,
            augue congue ullamcorper dapibus, diam diam tristique nibh, sed
            accumsan tortor dui vitae est. Maecenas eu tristique sem, vitae
            mollis tortor. Morbi venenatis ultrices lacus quis scelerisque.
            Vestibulum in pretium ante, sit amet suscipit risus. Nunc tempor
            odio ut felis sodales, in elementum sem pulvinar. Phasellus eu
            tincidunt velit, sed dapibus nisl. Nulla augue tellus, tincidunt id
            pulvinar at, fermentum ut nisl. Suspendisse scelerisque eros urna,
            in suscipit dolor vestibulum rutrum. Donec consequat tempus massa,
            sit amet lacinia felis pulvinar nec. Suspendisse potenti. Nullam ac
            blandit libero. Donec id risus eu erat consectetur tempor. Ut
            sollicitudin varius mi. Pellentesque dapibus blandit mauris vel
            facilisis. Maecenas sed nisl id augue mollis sollicitudin. Aliquam
            eget eros non lorem lacinia ultrices eget quis mauris. Suspendisse
            pulvinar lectus mi, ut vulputate libero tempor eget. Duis id
            efficitur quam, non tristique tellus. Donec tristique purus vel nunc
            tristique feugiat tempus in odio. Sed maximus ut eros ac tempus.
            Nunc sit amet ex elit. Curabitur ut pulvinar ante. Sed bibendum nisl
            nunc, sed vehicula nibh tempor vel. Nullam at porta lorem.
          </p>
          <img src={homeSideImage} alt="images" />
          <div className="content-text-head">
            <p>stock</p>
            <p>Villa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
