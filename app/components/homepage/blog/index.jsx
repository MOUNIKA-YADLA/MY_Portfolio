// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';

function Blog({ blogs }) {
  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            CERTIFICATIONS
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Certifications Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            src: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
            title: "AWS Cloud Practitioner",
            link: "https://www.credly.com/badges/74156906-4bf9-4a7a-8ba6-b99040c80113/public_url",
          },
          {
            src: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
            title: "AWS Solution Architect",
            link: "https://www.credly.com/badges/8abcce86-f520-415c-861d-9b01afc2cee6/public_url",
          },
          {
            src: "https://images.credly.com/size/680x680/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
            title: "Azure AI Fundamentals",
            link: "https://www.credly.com/badges/2ac577e7-e4c7-4acf-bbc2-470bb0741415/public_url",
          },
          {
            src: "https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
            title: "Azure Fundamentals",
            link: "https://www.credly.com/badges/aa28cd01-2a40-445a-9922-6907d48839d3/public_url",
          },
          {
            src: "https://images.credly.com/size/680x680/images/ae7dd2bd-1d04-43d9-b148-1ef79ec45129/image.png",
            title: "RedHat Certified Enterprise App Developer",
            link: "https://www.credly.com/badges/3e886b9c-4a76-4895-b927-94ac15eba43a/public_url",
          },
        ].map(({ src, title, link }) => (
          <div className="bg-[#1b203e] rounded-lg p-5 shadow-lg flex flex-col items-center" key={title}>
            <img src={src} alt={title} className="h-32 w-32 object-contain mb-3" />
            <h3 className="text-white font-semibold">{title}</h3>
            <Link href={link} target="_blank" className="text-pink-500 hover:underline">
              View Certification
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
