import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. —Jack Welch",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: "fa2a5e1e870c111-a2d",
    content:
      "Learn from the mistakes of others. You can't live long enough to make them all yourself 🚀",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-14T16:43:34+05:30",
    updatedAt: "2022-05-14T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
      "Hey all checkout my projects, you will get github link in my profile.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          username: "dan_abramov",
          firstName: "Dan",
          lastName: "Abramov",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "Good work",
        commentDate: "2022-05-12T19:05:28+05:30",
        firstName: "Lucy",
        lastName: "Van",
        username: "lucyvan",
        _id: uuid(),
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652872677/28102735662_5773509d11_b_zpjwv0.webp",
          original_filename: "lucyvan-profile",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    postMedia: null,
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
      "The difference between having Strict Mode on and off is between “eager bugs” and “on-demand bugs”. Strict Mode immediately forces you to handle the edge cases. This includes bugs you won’t hit in prod today but definitely will as your logic changes. I’ve seen this many times.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: null,
    comments: [],
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "what are the best resources you have found for people trying to leave Ukraine? i’ve seen a few docs floating around but not sure which are most up-to-date. share links pls!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: null,
    comments: [],
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I’m going to the stars and then past them.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653738815/UFC_229_Preview__Khabib_Nurmagomedov_vs__Conor_McGregor_mj5j5c.jpg",
      original_filename: "conor-post-image",
    },
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
      original_filename: "conor-mcgregor",
    },
    userId: "conor-mcgregor-test-userId",
    firstName: "Conor",
    lastName: "McGregor",
    username: "thenotoriousmma",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content: "Checkout my social media app.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "Cool colors, great work.",
        commentDate: formatDate(),
        firstName: "Conor",
        lastName: "McGregor",
        username: "thenotoriousmma",
        _id: uuid(),
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
          original_filename: "conor-mcgregor",
        },
      },
      {
        comment: "Good job",
        commentDate: formatDate(),
        firstName: "Lucy",
        lastName: "Van",
        username: "lucyvan",
        _id: uuid(),
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652872677/28102735662_5773509d11_b_zpjwv0.webp",
          original_filename: "lucyvan-profile",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653742074/ss_vudit9.jpg",
      original_filename: "project-showcase",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "If you're thinking about putting a TypeScript package up to NPM, you should be considering preconstruct. It makes setup EXTREMELY easy and takes many decisions out of your hands.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653740919/350-600x300_reikyg.jpg",
      original_filename: "test-image",
    },
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "Experience is not the amount of time you have held a position but the amount of time you have put into your craft ✨",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        comment: "Well said.",
        commentDate: "2022-05-10T19:05:28+05:30",
        firstName: "Conor",
        lastName: "McGregor",
        username: "thenotoriousmma",
        _id: uuid(),
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
          original_filename: "conor-mcgregor",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    postMedia: null,
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content: "This beauty ✨",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        comment: "Well said.",
        commentDate: "2022-05-15T19:05:28+05:30",
        firstName: "Conor",
        lastName: "McGregor",
        username: "thenotoriousmma",
        _id: uuid(),
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
          original_filename: "conor-mcgregor",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652874627/788-536x354_btpwul.jpg",
      original_filename: "scenery",
    },
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content:
      "Leadership is lifting a person's vision to high sights, the raising of a person's performance to a higher standard, the building of a personality beyond its normal limitations. —Peter Drucker",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "Nice quote.",
        commentDate: "2022-05-28T19:05:28+05:30",
        firstName: "Dan",
        lastName: "Abramov",
        username: "dan_abramov",
        _id: uuid(),
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
          original_filename: "dan-abramov",
        },
      },
      {
        comment: "Good one.",
        commentDate: "2022-05-28T19:05:28+05:30",
        firstName: "Conor",
        lastName: "McGregor",
        username: "thenotoriousmma",
        _id: uuid(),
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
          original_filename: "conor-mcgregor",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    postMedia: null,
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: uuid(),
    content: `This man has been inspiring me for a couple of decades now.
      Selflessness, dealing with failure, handling success, staying calm in adversity, getting the best out of resources! 🚀`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Conor",
          lastName: "McGregor",
          username: "thenotoriousmma",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
        {
          _id: uuid(),
          firstName: "Dan",
          lastName: "Abramov",
          username: "dan_abramov",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "This is awesome.",
        commentDate: "2022-05-28T19:05:28+05:30",
        firstName: "Dan",
        lastName: "Abramov",
        username: "dan_abramov",
        _id: uuid(),
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
          original_filename: "dan-abramov",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652616473/ss_jjlh2c.jpg",
      original_filename: "dhoni-book",
    },
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves. —Lao Tzu",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652872677/28102735662_5773509d11_b_zpjwv0.webp",
      original_filename: "lucyvan-profile",
    },
    postMedia: null,
    userId: "lucy-van-userId",
    firstName: "Lucy",
    lastName: "Van",
    username: "lucyvan",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content: "The champ.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
      original_filename: "conor-mcgregor",
    },
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653741427/HD_wallpaper__Sports_Mixed_Martial_Arts_Conor_Mcgregor_Mixed_Martial_Artist_btgery.jpg",
      original_filename: "conor-post-image",
    },
    comments: [],
    userId: "conor-mcgregor-test-userId",
    firstName: "Conor",
    lastName: "McGregor",
    username: "thenotoriousmma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Life is fragile and temporary. The faces of today quickly become the faces of the past. Sorrow, pain, and anger... it all fades.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
      original_filename: "conor-mcgregor",
    },
    userId: "conor-mcgregor-test-userId",
    firstName: "Conor",
    lastName: "McGregor",
    username: "thenotoriousmma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "A pessimist is one who makes difficulties of his opportunities and an optimist is one who makes opportunities of his difficulties.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: uuid(),
    content:
      "A genuine leader is not a searcher for consensus, but a molder of consensus.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Dan",
          lastName: "Abramov",
          username: "dan_abramov",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653743304/648-600x400_bg9yl4.jpg",
      original_filename: "rohan-post-test-image",
    },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
];
