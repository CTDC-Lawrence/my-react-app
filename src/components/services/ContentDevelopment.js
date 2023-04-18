import React from 'react';
import './services.css';
import contentDevImg from '../../assets/images/content-development.png';

const ContentDevelopment = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Content Development</h1>
        <img src={contentDevImg} alt="Content Development" className="service-page-image" />
        <p className="service-page-description">Our team of content developers can help you create engaging content that resonates with your target audience. We offer a range of services to help you plan, develop, and distribute your content, including:</p>
        <ul className="service-page-list">
          <li>Content strategy development</li>
          <li>Content creation and copywriting</li>
          <li>Graphic design and video production</li>
          <li>Content distribution and promotion</li>
        </ul>
        <p className="service-page-advantage">By working with us to develop your content, you can:</p>
        <ul className="service-page-advantage-list">
          <li>Increase engagement and conversions</li>
          <li>Establish your brand as an authority in your industry</li>
          <li>Improve your search engine rankings</li>
          <li>Drive more traffic to your website</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our content development services.</p>
      </div>
    </div>
  );
};

export default ContentDevelopment;
