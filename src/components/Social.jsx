import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";


const social = [
    { icon: <FaGithub />, path: "https://github.com/shabbir303" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/shabbirhossain55/" },
    { icon: <FaFacebookF />, path: "https://www.facebook.com/profile.php?id=100004112419131" },
    { icon: <FaDiscord />, path: "discord.com/users/498796104587018250" }
]
const Social = ({ containerStyle, iconStyle }) => {

    return (
        <div className={containerStyle}>
            {social.map((item, index) =>
                <Link key={index}
                    className={iconStyle}
                    href={item.path}>
                    {item.icon}
                </Link>
            )}
        </div>
    );
};

export default Social;