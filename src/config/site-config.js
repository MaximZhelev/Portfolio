import {
    FaGithub,
    FaDev,
    FaLinkedin,
    FaQuora,
    FaTwitter,
    FaTelegram
  } from "react-icons/fa";
  import { FiMail } from "react-icons/fi";
  
  const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Maxim Zhelev. All Rights Reserved.`,
    author: {
      name: "Maxim Zhelev",
      accounts: [
        {
          url: "https://github.com/MaximZhelev",
          label: "Github Account",
          type: "gray",
          icon: <FaGithub />
        },
        {
          url: "https://www.linkedin.com/in/maxim-zhelev/",
          label: "LinkedIn Account",
          type: "linkedin",
          icon: <FaLinkedin />
        },
        {
          url: "mailto:maxim.zhelev1@gmail.com",
          label: "Mail Maxim",
          type: "gray",
          icon: <FiMail />
        },
        

      ]
    }
  };
  
  export default siteConfig;