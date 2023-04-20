import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';
const featuresData = [
  {
    title: "Video Data",
    text: "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document."
  },
  {
    title: "Word Document Format",
    text: "To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other. For example, you can add a matching cover page, header, and sidebar. Click Insert and then choose the elements you want from the different galleries."
  },
  {
    title: "Theme and Styles",
    text: "Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme."
  },
  {
    title: "Visual Tools",
    text: "Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it. When you work on a table, click where you want to add a row or a column, and then click the plus sign."
  }
]
function Features() {
  return (
    <div className="immi__features section__padding" id="features">
      <div className="immi__features-heading">
        <h1 className="gradient__text">Useful Topics and Articles</h1>
        <p>When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. </p>
      </div>
      <div className="immi__features-container">
        {
          featuresData.map((data, index) => (
            <Feature key={index}
              title={data.title}
              text={data.text} />
          ))
        }
      </div>
    </div>
  )
}

export default Features