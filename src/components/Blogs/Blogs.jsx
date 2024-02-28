import React from "react";
import Heading from "../Shared/Heading";

import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="container mb-10">
      <Heading title="Recent News" subtitle="Explore our Blogs" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {BlogData.map((data, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              <div className="overflow-hidden rounded-2xl  ">
                <img
                  src={data.image}
                  alt="Blog image"
                  className="w-full object-cover h-[220px] hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 mt-2">{data.published}</p>
                <p className="text-md font-bold line-clamp-2">{data.title}</p>
                <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
