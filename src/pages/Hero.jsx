import ActivitiesCard from "../components/ActivitiesCard";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="hero">
        <div className="heroText">
          <h1 className="title">
            The
            <br />
            <span className="blueTitle">Blue</span>
            <br />
            Brigade
          </h1>
          <h2 className="title_2">Uniting Chelsea FC Supporters Worldwide</h2>
          <h3 className="subtitle">
            Join Us in Celebrating the Pride, Passion, and Glory of the Blues
          </h3>
        </div>
      </div>
      <div className="activities">
        <ActivitiesCard
          className="bg-light"
          description="Welcome to the official webpage of the Chelsea F.C. Supporters Group! We are a vibrant community of passionate fans who live and breathe everything blue. If you're a dedicated Chelsea supporter looking to connect with like-minded individuals and enhance your football experience, you've come to the right place."
          title="Who we are?"
          image="https://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/editorial/news/2019/5/supporters-club-photo-1"
        />
        <ActivitiesCard
          className="flowRight bg-dark"
          description="Join us on matchdays to watch the games together, creating an unbeatable atmosphere filled with chants, cheers, and a sea of blue. We organize meetups at local pubs, sports bars, or designated venues, ensuring you never miss out on the excitement."
          title="Matchday Meetups"
          image="https://img.chelseafc.com/image/upload/f_auto,c_fill,h_700,g_faces,ar_16:9,q_90/official-supporters-clubs/IMG_0667-1280x1280.jpg"
        />
        <ActivitiesCard
          className="bg-light"
          description="We believe in giving back to the community. Our group actively participates in charitable initiatives and supports local projects that make a positive impact. By joining us, you'll have the chance to contribute to these meaningful endeavors and make a difference in the lives of others."
          title="Charity Initiatives"
          image="https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,q_90/editorial/news/2018/8/Bucket-Collection-Dravet-Syndrome.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
