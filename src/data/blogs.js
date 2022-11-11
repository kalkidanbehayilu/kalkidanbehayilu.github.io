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
              We don't have a separate integer type regularly employed <a class="text-blue-700 font-bold" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Source<a/>. To understand Number type check <a class="text-blue-700 font-bold" href="https://www.henoktsegaye.com/blogs/javascript-number-types/"> Henoks post about Number types</a>`,
            },
            {
              id: 1,
              isCodeSnippet: true,
              details: `
              123456 // This is a number

              123456.0 // Could also be represented like this
              `,
            },
            {
              id: 2,
              details: `Numbers in Javascript are represented as a <a class="text-blue-700 font-bold" href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format">Double-precision floating-point format</a> occupying <span class="text-blue-700">64</span> bits of memory and it represents a broad dynamic range of numerical values. 
              If we have a <span class="text-blue-700">64-bit</span> storage, can we have a minimum value of <span class="text-blue-700">-9,223,372,036,854,775,808</span> and a maximum value of <span class="text-blue-700">9,223,372,036,854,775,807</span> you might ask? Unfortunately <span class="font-extrabold text-rose-500 animate-pulse">NO!</span>`,
            },
            {
              id: 2,
              details: `<span class="font-extrabold">Here is why</span>`,
            },
            {
              id: 3,
              isCodeSnippet: true,
              details: `
              1 bit for the sign (positive or negative)
              11 bits for the exponent (-1022 to 1023)
              52 bits for the mantissa (representing a number between 0 and 1)`,
              img: require("@/assets/images/blog/64bit-representation.webp")
            },
            {
              id: 4,
              details: `But how do we represent large numbers greater than <span class="text-blue-700">52</span> bits? Easy, use the <span class="text-blue-700">11</span> bits for the exponents! It can hold upto <span class="text-blue-700">2<sup>1024 - 1</sup></span> (with the exponent being <span class="text-blue-700">1023</span> and the mantissa being <span class="text-blue-700">0.1111… in base 2</span>).`
            },
            {
              id: 5,
              isCodeSnippet: true,
              details: `
              console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
              `
            },
            {
              id: 5,
              details: `Based on the MAX_VALUE, you might think you can represent any number under <span class="text-blue-700">1.7976931348623157e+308</span> without any problem. But that's not the case. Let's see why`
            },
            {
              id: 6,
              isCodeSnippet: true,
              details: `
              const x = 112233445566778898;
              const y = 112233445566778899;
              console.log(x === y); // true
              // "What? Something is wrong with Javascript!"

              // Let's try this one
              // It should work this time

              const x = 112233445566778898e+30;
              const y = 112233445566778899e+30;
              console.log(x === y); // true
              // "Not again!"
              `
            },
            {
              id: 7,
              details: `The problem is that we can only store <span class="text-blue-700">52</span> bits of data, so it can only safely represent integers between <span class="text-blue-700">-(2<sup>53 – 1</sup>)</span> and <span class="text-blue-700">2<sup>53 – 1</sup></span>. That means the maximum number we can store is <span class="text-blue-700">9,007,199,254,740,991</span> or <span class="text-blue-700">-9,007,199,254,740,991</span>`
            },
            {
              id: 8,
              isCodeSnippet: true,
              details: `
              console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
              `
            },
            {
              id: 9,
              details: `Any number respresentation over or under the specified range will be considered as <span class="text-blue-700">Overflow</span> or <span class="text-blue-700">Underflow</span>.
              `
            }
          ],
        },
        {
          id: 1,
          blogDetailsHeading: "How to fix it",
          blogDetails: [
            {
              id: 10,
              details: `This is where <span class="text-blue-700 font-bold">BIGINT</span> comes.
              <br><br>
              <span class="text-blue-700 font-bold">BIGINT</span> is a built-in object in JavaScript that provides a way to represent numbers larger than <span class="text-blue-700 font-bold">2<sup>53-1</sup></span>.
              It is usefull when we work with timestamps and large integer Numbers (like ID's)`,
            },
            {
              id: 11,
              details: `<span class="font-bold text-xl">How to use it</span>
              <br>
              <br>
              You can use the <span class="text-blue-700 font-bold">BigInt()</span> constructor, you don't have instantiate or use the <span class="text-blue-700">new</span> keyword
              `,
            },
            {
              id: 8,
              isCodeSnippet: true,
              details: `
              const x = BigInt("90071992547409919007199254740991");
              console.log(x.toString()); // 90071992547409919007199254740991
              `
            },
            {
              id: 12,
              details: `<span class="font-bold text-xl">Alternative method</span>
              <br>
              <br>
              You can use the also use <span class="text-blue-700">n</span> prefix after the number.
              `,
            },
            {
              id: 13,
              isCodeSnippet: true,
              details: `
              const x = 90071992547409919007199254740991n;
              console.log(x.toString()); // 90071992547409919007199254740991

              // NOTE: This won't work as expected
              const y = 90071992547409919007199254740991;
              console.log(y); 
              // The reason is that y has already lost precision.
              // y is being changed on initialization.
              `
            },
            {
              id: 14,
              details: `<span class="font-bold text-xl">Operations in BigInt</span>
              <br>
              <br>
              <span class="text-blue-700">Bitwise operators </span> are supported, except <span class="text-blue-700">>>> (zero-fill right shift)</span>, as every BigInt value is signed. Lets user <span class="text-blue-700 font-extrabold"> + * - % ** </span>
              `,
            },
            {
              id: 15,
              isCodeSnippet: true,
              details: `
              const originalNumber = BigInt("9007199254740998");
              console.log(originalNumber.toString()); // 9007199254740998

              const addition = originalNumber + 2n;
              console.log(addition.toString()); // 9007199254741000

              const subtraction = originalNumber - 2n;
              console.log(subtraction.toString()); // 9007199254740996

              const multiplication = originalNumber * 2n;
              console.log(multiplication.toString()); // 18014398509481996

              const division = originalNumber / 2n;
              console.log(division.toString()); // 4503599627370499

              `
            },
            {
              id: 16,
              details: `<span class="text-xl"><span class="text-orange-500 font-bold">Note: </span> Multiplication won't return any fractional digits!</span>
              <br>
              <br>
              Operations with a fractional result will be truncated when used with a BigInt value. BigInt won't accept fractional digits as well.
              `,
            },
            {
              id: 17,
              isCodeSnippet: true,
              details: `
              const expected = 4n / 2n
              console.log(expected.toString()); // 2n
              
              const truncated = 5n / 2n
              console.log(truncated.toString()); // 2n, not 2.5n
              `
            },
          ]
        }
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
