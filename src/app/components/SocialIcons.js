import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      {social.map((s, index) => (
        <a
          key={s.icon.iconName}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={s.icon}
            className={`user-select-none text-3xl px-4 text-gray-600 transition-transform duration-50 transform hover:scale-150 ${s.hoverColor}`}
          />
        </a>
      ))}
      {showEmail && (
        <a target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={
              "user-select-none text-3xl px-4 text-gray-600 transition-transform duration-50 transform hover:scale-150 hover:text-gray-900"
            }
          />
        </a>
      )}
    </>
  );
}
