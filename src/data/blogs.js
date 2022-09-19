// Blogs data.
// Note: Here we are getting data from a js file, but in a different blog I'll be fetching these blogs from some srt of APIs.

const blogs = [
  {
    id: "google-health-platform",
    title: "Google Health Platform",
    category: "Web Application",
    img: require("@/assets/images/mobile-project-2.jpg"),
	detail: "Here we are getting data from a js file, but in a different blog I'll be fetching these blogs from some srt of APIs.",
    singleBlogHeader: {
      singleBlogTitle: "Blog Management UI",
      singleBlogDate: "Jul 26, 2021",
      singleBlogTag: "UI / Frontend",
    },
    blogImages: [
      {
        id: 1,
        title: "Kabul Blog Management UI",
        img: require("@/assets/images/ui-project-1.jpg"),
      },
      {
        id: 2,
        title: "Kabul Blog Management UI",
        img: require("@/assets/images/web-project-2.jpg"),
      },
      {
        id: 3,
        title: "Kabul Blog Management UI",
        img: require("@/assets/images/mobile-project-2.jpg"),
      },
    ],
    blogInfo: {
      authorHeading: "About Client",
      authorInfos: [
        {
          id: 1,
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "https://company.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      blogDetailsHeading: "Challenge",
      blogDetails: [
        {
          id: 1,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: 2,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 3,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: 4,
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharingsHeading: "Share This",
      socialSharings: [
        {
          id: 1,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com",
        },
        {
          id: 2,
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com",
        },
        {
          id: 3,
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 5,
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com",
        },
      ],
    },
  },
];

export default blogs;
