import logo2 from './assets/logo2.png';
import chat from './assets/chat.png';
import plus from './assets/plus.png';
import notification from './assets/notification.png';
import profile from './assets/profile.png';


export default function Header() {
  return (
    <div className="header">
      <img src={logo2} alt="Logo" />
      <h2>Blogging Platform</h2>
      <input type="text" placeholder="Search..." />
      <div className="img1">
        <img src={chat} alt="Chat" />
      </div>
      <div className="img2">
        <img src={plus} alt="Plus" />
      </div>
      <div className="img3">
        <img src={notification} alt="Notifications" />
      </div>
      <div className="img4">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
}
