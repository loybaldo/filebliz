import Icon from "../icon";
import Icons from "../icon/Icon";
import { useEffect, useRef, useState } from "react";
import "./services.scss"

function Services() {
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const servicesSection = servicesRef.current;
    const handleScroll = () => {
      if (servicesSection && window.scrollY >= servicesSection.offsetTop - window.innerHeight / 2) {
        setShowServices(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={servicesRef} className="f-services">
        <div className={`f-item ${showServices ? "show" : "hidden"}`}>
          <Icon color="#5CB846" size={33} icon={Icons.send_outline_bold} />
          <span>Easy Sharing</span>
          <p>Share your files quickly and effortlessly with anyone, anywhere on our user-friendly platform.</p>
        </div>

        <div className={`f-item ${showServices ? "show" : "hidden"}`}>
          <Icon color="#5B6EE8" size={33} icon={Icons.users_three_outline_bold} />
          <span>Group Share</span>
          <p>Share your files with multiple recipients easily and save valuable time with our intuitive sharing platform.</p>
        </div>

        <div className={`f-item ${showServices ? "show" : "hidden"}`}>
          <Icon color="#EC6E00" size={33} icon={Icons.discount_outline_bold} />
          <span>Great Offers</span>
          <p>Upgrade to our Pro version for advanced file sharing options and complete control over your files.</p>
        </div>
      </div>
    </>
  );
}

export default Services;
