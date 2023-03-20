import Icon from "../../../common/icon";
import Icons from "../../../common/icon/Icon";
import "./services.scss"

function Services() {
  return (
    <>
      <div className="f-services">
        <div className="f-item">
          <Icon color="#5CB846" size={33} icon={Icons.send_outline_bold} />
          <span>Easy Sharing</span>
          <p>Share your files quickly and effortlessly with anyone, anywhere on our user-friendly platform.</p>
        </div>

        <div className="f-item">
          <Icon color="#5B6EE8" size={33} icon={Icons.users_three_outline_bold} />
          <span>Group Share</span>
          <p>Share your files with multiple recipients easily and save valuable time with our intuitive sharing platform.</p>
        </div>

        <div className="f-item">
          <Icon color="#EC6E00" size={33} icon={Icons.discount_outline_bold} />
          <span>Great Offers</span>
          <p>Upgrade to our Pro version for advanced file sharing options and complete control over your files.</p>
        </div>
      </div>
    </>
  );
}

export default Services;
