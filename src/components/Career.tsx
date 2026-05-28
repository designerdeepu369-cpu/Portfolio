import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Presentation Specialist</h4>
                <div className="line1">
                <h5>Analytic Edge </h5><h5 style={{color:'#ffffff !important'}}>(Dec 2023 - Present)</h5></div>
              </div>
            </div>
            <p>
              Skilled in creating visually engaging, brand-consistent presentation templates and data visuals.
Experienced in formatting clean, professional decks with strong attention to detail and brand consistency.
Collaborative team player focused on delivering high-quality presentations aligned with brand messaging and stakeholder expectations.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Graphic Designer</h4>
                <div className="line1">
                <h5>Janitri Innovation</h5><h5 style={{color:'#ffffff !important'}}>(Jun 2023 - Nov 2023)</h5>
              </div>
              </div>
              {/* <h4>Jun 2023 - Nov 2023</h4> */}
            </div>
            <p>
              Creative design professional experienced in collaborating with cross-functional teams and staying updated on industry trends to deliver impactful visual solutions.
Skilled in managing and designing high-quality print and digital marketing materials, advertising campaigns, and brand-enhancing creative assets.
Proficient in graphic design software with a strong focus on timely project delivery, visual consistency, and high-quality execution across various media.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Visual Designer</h4>
                <div className="line1">
                  <h5>Furlenco</h5>
                  <h5 style={{color:'#ffffff !important'}}>(Jan 2023 - Mar 2023)</h5>
                </div>
              </div>
            </div>
            <p>
              Design professional skilled in creating furniture line drawings using Adobe Illustrator and enhancing product visuals through Photoshop editing and image corrections.
Experienced in developing creative design products using both Illustrator and Photoshop with strong attention to detail.
Proficient in delivering clean, high-quality visual assets while maintaining consistency and design accuracy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Photogrammetric IC Tech</h4>
                <div className="line1">
                  <h5>EagleView India</h5>
                  <h5 style={{color:'#ffffff !important'}}>(Jul 2021 - Nov 2022)</h5>
                </div>
              </div>
            </div>
            <p>
             Responsible for monitoring and delivering priority files within deadlines while ensuring accuracy and efficiency.
Supported Production Coordinators in driving projects to completion through work with GIS-integrated raster imagery.
Experienced in developing Pictometry products, including image processing and full assembly of final library creation.
            </p>
          </div>
                <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
              
              <div className="line1">
                <h5>Madhu Infotech India Pvt Ltd</h5>
                <h5>(Dec 2019 - Jun 2021)</h5>
              </div>
              </div>
            </div>
            <p>
             Creative designer proficient in creating websites, brochures, Facebook ads, logos, promotional videos, and product photoshoots.
Experienced in resizing and re-editing designs for multiple dimensions, formats, and platform requirements.
Skilled in developing realistic product mockups for effective client presentations and stakeholder reviews.
            </p>
          </div>
                 <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
              
              <div className="line1">
                <h5>Neeram Waters Pvt Ltd </h5>
                <h5>(Jun 2018 - Nov 2019)</h5>
              </div>
              </div>
            </div>
            <p>
             Graphic designer experienced in creating visually appealing water bottle designs using various design tools and software.
Skilled in customer communication and follow-ups to provide design updates, modifications, and enhanced client support.
Successfully delivered creative product designs that contributed to increased customer satisfaction and sales growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
