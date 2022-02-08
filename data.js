/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "Sorrow",
  email: "sorrowguerrero@gmail.com",
  about:
    "Hey! I'm <b>Sorrow</b>, a nineteen year old <b>Esports Designer</b> and <b>Marketing Student</b> from <b>The Philippines</b>.",

  // intro
  accomplishments: {
    name: "Specialization",
    value: [
      "Art Direction",
      "Esports Design",
      "Stream Design",
    ],
  },
  socialLink: {
    name: "Let's Get in Touch!",
    value: [
      { name: "Instagram", link: "https://instagram.com/SorrowGuerrero/" },
      { name: "Behance", link: "https://behance.net/SorrowGuerrero" },
      { name: "Twitter", link: "https://twitter.com/SorrowGuerrero" },
      { name: "Twitch", link: "https://twitch.tv/SorrowGuerrero" },
      { name: "Youtube", link: "https://www.youtube.com/channel/UC1qOXmc46Lk35bFTN6PL8xA" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/john-charles-guerrero-6120b0205" },
    ],
  },
  currentProfession: {
    name: "Currently",
	  value: [
		  "Doing contract/freelance work",
		  "Available for new projects"
	  ],
  },

  // Footer
  contactDetails: {
    name: "Let's get in touch!",
    value: [
      {
        name: "Gmail",
        value: "sorrowguerrero@gmail.com",
      },
      {
        name: "Discord",
        value: "SorrowG#3872",
      },
    ],
  },
  currentStatus: {
    name: "What am I upto right now",
    value: [
      "Drinking my 5th cup of coffee for the day",
      "Reading a new book",
    ],
  },

  // work
  // image min-dimensions: 1640x600
  // image format: jpg, png, webp
  // if image is from an external source then add the domain in next.config.js
  workExperience: [
    {
      info: {
        "Project": ["Personal Branding"],
        "Description": [
          "Personal Branding Project created in order to personify the brand identity that is SorrowGuerrero. Focuses on high contrast and standing out, takes inspiration from real-world design.",
        ],
        "My Objectives": [
          "Be Timeless",
          "Personify"
        ],
      },
     
      link: "https://www.behance.net/gallery/135442783/VELOCITY-Premade-Stream-Package",
      image: "/images/SORROW.jpg",
    },
    {
      info: {
        "Project": ["Sentinels Dark"],
        "Description": [
          "The creation of this project was initially an experiment to take a team's branding and shift it into an entirely different direction.",
        ],
        "My Objectives": [
          "Create a new direction",
          "Enhance the Sentinels experience"
        ],
      },

      link: "https://www.behance.net/gallery/119299325/SENTINELS-DARK",
      image: "/images/SENTINELS1.jpg",
    },
    {
      info: {
        "Project": ["Velocity"],
        "Description": [
          "Looking to improve the overall quality of Stream packages and to enhance the viewing experience for the viewers watching.",
        ],
        "My Objectives": [
          "Enhance streaming", 
          "Stand out from most stream packages"
        ],
      },

      link: "https://www.behance.net/gallery/113019399/SORROW-GUERRERO",
      image: "/images/VELOCITY2.jpg",
    },
  ],

  // available options:- light, dark, auto
  theme: "dark",
};
