/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "Sorrow",
  email: "sorrowguerrero@gmail.com",
  about:
    "Hey! I'm <b>Sorrow</b>, a nineteen year old <b>Esports Designer</b> and <b>Marketing Student</b> currently based in <b>The Philippines</b>.",

  // intro
  accomplishments: {
    name: "Recent Accomplishments",
    value: [
      "Finished project Velocity",
      "Started a Marketing Plan",
      "Created concepts for upcoming clientwork",
    ],
  },
  socialLink: {
    name: "Social Links",
    value: [
      { name: "Instagram", link: "/" },
      { name: "Behance", link: "/" },
      { name: "Twitter", link: "/" },
      { name: "Twitch", link: "/" },
      { name: "Youtube", link: "/" },
      { name: "LinkedIn", link: "/" },
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
        "Project": ["Velocity"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
	      "My Objectives": [
	        "User Testing",
	        "Accessibility improvements"
	      ],
      },

      link: "/",
      image: "/images/HEADER.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing",
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/spiderman.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing", 
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/microsoft.png",
    },
  ],

  // available options:- light, dark, auto
  theme: "dark",
};
