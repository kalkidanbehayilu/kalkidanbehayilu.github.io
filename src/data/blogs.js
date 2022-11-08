// Blogs data.

const blogs = [
  {
    id: "big-numbers-in-javascript",
    title: "Big numbers in javascript",
    category: "Web Application",
    img: require("@/assets/images/blog/big-number.png"),
    detail:
      "The Javascript understanding of huge number representation and how an interpreter scans through the code.",
    singleBlogHeader: {
      singleBlogTitle: "Big numbers in javascript",
      singleBlogDate: "November 07, 2022",
      singleBlogTag: "Numbers",
    },
    blogImages: [],
    blogInfo: {
      authorHeading: "Author",
      authorInfos: [
        {
          id: 1,
          title: "",
          details: "Kalkidan B.",
        },
        {
          id: 3,
          title: "Website",
          details: "https://kalkidanbehayilu.github.io",
        },
      ],
      objectivesHeading: "Objective",
      objectivesDetails:
        "We will try to Understand how big numbers are represented and handled in Javascript.",
      blogContents: [
        {
          id: 1,
          blogDetailsHeading: "Number",
          blogDetails: [
            {
              id: 1,
              details: `Number is a primitive wrapper object used to represent and manipulate numbers. The Number constructor contains constants and methods for working with numbers. A literal number in JavaScript code is a floating-point value.
              We don't have a separate integer type regularly employed. To understand Number type check <a class="text-blue-700 font-bold" href="https://www.henoktsegaye.com/blogs/javascript-number-types/"> Henoks post about Number types</a>`,
            },
            {
              id: 1,
              isCodeSnippet: true,
              details: `
              `,
            },
          ],
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
          id: 4,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
      ],
    },
  },
];

export default blogs;
