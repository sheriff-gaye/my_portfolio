import { FaHandsHelping } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import "./volunteer.css";
import { volunteerData } from "./data";


const VolunteerLeadership = () => {
  return (
    <section>
      <h5>Community Impact</h5>
      <h2>Volunteering <span>&</span> Leadership</h2>
      <div className="volunteer_container container">
        <div className="volunteer_section">
          <h3>
            <FaHandsHelping className="volunteer_icon" /> 
            <MdLeaderboard className="volunteer_icon" /> 
            Social Impact
          </h3>
          <div className="volunteer_timeline">
            {volunteerData.map((item) => {
              return (
                <div className="volunteer_timeline_item" key={item.id}>
                  <div className="volunteer_timeline_marker"></div>
                  <div className="volunteer_timeline_content">
                    <div className="volunteer_logo_container">
                      <img 
                        src={item.image} 
                        alt={item.place}
                        className="volunteer_company_logo"
                      />
                    </div>
                    <span className="volunteer_date">{item.date}</span>
                    <h4 className="volunteer_title">{item.title}</h4>
                    <h5 className="volunteer_place">{item.place}</h5>
                    <small className="volunteer_desc">{item.desc}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerLeadership;