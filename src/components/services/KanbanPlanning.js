import React from 'react';
import './services.css';
import kanbanImg from '../../assets/images/kanban.png';

const KanbanPlanning = () => {
  return (
    <div className="service-page-container">
      <div className="service-page-content">
        <h1 className="service-page-title">Kanban Planning</h1>
        <img src={kanbanImg} alt="Kanban Board" className="service-page-image" />
        <p className="service-page-description">Kanban is a lean method to manage and improve work across human systems. Our experts will help you to implement Kanban systems in your organization and optimize your workflow for greater efficiency and productivity.</p>
        <ul className="service-page-list">
          <li>Visualizing workflow and work in progress</li>
          <li>Limiting work in progress to improve flow</li>
          <li>Managing flow and making process policies explicit</li>
          <li>Implementing feedback loops to improve process and outcomes</li>
        </ul>
        <p className="service-page-advantage">By adopting Kanban methodologies, your organization can benefit from:</p>
        <ul className="service-page-advantage-list">
          <li>Increased efficiency and productivity</li>
          <li>Improved workflow visibility and understanding</li>
          <li>Reduced work in progress and inventory</li>
          <li>Optimized capacity utilization and resource allocation</li>
        </ul>
        <p className="service-page-contact">Contact us today to learn more about our Kanban planning services.</p>
      </div>
    </div>
  );
};

export default KanbanPlanning;
