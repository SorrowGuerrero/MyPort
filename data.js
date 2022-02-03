/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "Henry",
  email: "therealjohndoe@gmail.com",
  about:
    "Hey! I'm <b>Henry</b>, a twenty-four years old <b>User Interface</b> and <b>Experience Designer</b> currently based in <b>California</b>.",

  // intro
  accomplishments: {
    name: "Recent Accomplishments",
    value: [
      "Learned HTML + CSS",
      "Started a side project",
      "Cooked meal for myself and choked to death",
    ],
  },
  socialLink: {
    name: "Social Links",
    value: [
      { name: "Instagram", link: "/" },
      { name: "Dribbble", link: "/" },
      { name: "Twitter", link: "/" },
      { name: "Github", link: "/" },
      { name: "Youtube", link: "/" },
      { name: "Spotify", link: "/" },
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
    name: "Ways to contact me",
    value: [
      {
        name: "Gmail",
        value: "therealjohndoe@gmail.com",
      },
      {
        name: "Discord",
        value: "DopeAss#9669",
      },
    ],
  },
  currentStatus: {
    name: "What am I upto right now",
    value: [
      "Walking my dog in the park",
      "Making dog excuse to gawk at the hot girl",
    ],
  },

  // work
  // image min-dimensions: 1640x600
  // image format: jpg, png, webp
  // if image is from an external source then add the domain in next.config.js
  workExperience: [
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
      image: "/images/apple.png",
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
  theme: "light",
};
