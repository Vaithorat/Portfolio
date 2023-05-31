import crypto from "../assets/projects/crypto.jfif";
import ai from "../assets/projects/ai.jfif";
import social from "../assets/projects/social.jfif";
import ecomm from "../assets/projects/ecomm.jpg";

export const data = [
  {
    id: 1,
    name: "Crypto-Currency Dashboard",
    image: crypto,
    github: "https://github.com/Vaithorat/CryptoCurrency-Dashboard",
    live: "https://cryptodashboard-alma.netlify.com/",
    intro:
      "Live cryptocurrency price tracking app made using React, Redux, Tailwind and Coingecko API",
  },
  {
    id: 2,
    name: "Open AI Image Generator",
    image: ai,
    github: "https://github.com/Vaithorat/AiImageGenerator",
    live: "https://dalleimggen.netlify.app/",
    intro:
      "AI image generator using user prompts. It uses Vite-React, Dall-e API, Tailwind and Cloudinary ",
  },
  {
    id: 3,
    name: "Retrogram Social Media App",
    image: social,
    github: "https://github.com/Vaithorat/SocialMediaApp",
    live: "https://retrogramsocial.netlify.app/",
    intro:
      "Create profile, add friends and more on Retrogram. It uses React, Redux, Material UI, MongoDB and JWT",
  },
  {
    id: 4,
    name: "E-commerce Website",
    image: ecomm,
    github: "https://github.com/Vaithorat/ecomm",
    live: "https://ecommdemoproject.netlify.app/",
    intro:
      "E-commerce website built using React, Redux-toolkit. Authentication is done using Firebase",
  },
];
