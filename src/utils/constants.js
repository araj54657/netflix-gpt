export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVTAR =
  "https://i.pinimg.com/236x/81/8f/5e/818f5eafb5c326e3cd177c931eda4569.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGQwODY2NGI3MDBmYzFiMGRkMmUxMjllZDcyMjAxZSIsInN1YiI6IjY1NjBkZTE5YTZjMTA0MDBmZWIwMWMwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rmUM0FiGgdegAwI4l4pI4WWDurHRcklPO4UUj6Mq4G8 ",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
