import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import EmailComponent from "@/app/components/EmailComponent";

export default function SocialIcons({ showEmail }) {
  const social = [
    {
      icon: faLinkedin,
      hoverColor: "hover:text-sky-600",
      url: "https://www.linkedin.com/in/john-prokopos",
    },
    {
      icon: faGithub,
      hoverColor: "hover:text-neutral-900",
      url: "https://github.com/prokoposgiannis",
    },
    {
      icon: faFacebook,
      hoverColor: "hover:text-blue-600",
      url: "https://www.facebook.com/prokoposgiannis",
    },
    {
      icon: faSquareInstagram,
      hoverColor: "hover:text-pink-600",
      url: "https://www.instagram.com/prokopos.giannis",
    },
  ];

  return (
    <>
      {social.map((s) => (
        <a
          key={s.icon.iconName}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={s.icon}
            className={`user-select-none text-3xl px-4 text-gray-600 transition-transform duration-10 transform hover:scale-125 ${s.hoverColor}`}
          />
        </a>
      ))}
      {showEmail && <EmailComponent />}
    </>
  );
}
