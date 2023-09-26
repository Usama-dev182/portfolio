import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Porfolio } from "@/types/brand";
const Portfolio = () => {
  const cardData:Porfolio[] = [
    {
      id: 1,
      title: "WEBMEETING FEATURES",
      description: "FWR blocks are beautifully crafted with creativity, passion and quality.",
      href: "/blog/details",
      src: "/images/blog/blog-details-02.jpg",
      url: '/project-1',

    },
    {
      id: 2,
      title: "YOUNG BLOODS",
      description: "FWR blocks are beautifully crafted with creativity, passion and quality.",
      href: "#",
      src: "/images/blog/blog-details-02.jpg",
      url: '/project-2',

    },
    {
      id: 3,
      title: "YOUNG BLOODS",
      description: "FWR blocks are beautifully crafted with creativity, passion and quality.",
      href: "#",
      src: "/images/blog/blog-details-02.jpg",
      url: '/project-3',

    },
    {
      id: 4,
      title: "NIKE90 STORE",
      description: "FWR blocks are beautifully crafted with creativity, passion and quality.",
      href: "#",
      src: "/images/blog/blog-details-02.jpg",
      url: '/project-4',

    },
    {
      id: 5,
      title: "WOMEN INVENTOR",
      description: "You can use FWR blocks for personal or commercial purpose with attribution.",
      href: "#",
      src: "/images/blog/blog-details-02.jpg",
      url: '/project-5',

    },
    {
      id: 6,
      title: "GLAX LANDING",
      description: "FWR blocks are made with Bootstrap and minimal custom styling.",
      href: "#",
      src: "/images/blog/blog-details-02.jpg",
      url: '/project-6',
      

    },

  ]
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
               

                <div className="our_work ">
                <h2 className="text-center text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight  ">
                  OUR WORK SPEAKS ITSELF
                </h2>
                  <p className="text-center text-white text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We Design and Develop Elegant, Engaging and Responsive Apps for Web and Mobile.
                  </p>
                  {/* <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                      title="HI eldf"
                      
                        src="/images/blog/blog-details-02.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div> */}

                </div>
                <div>
                  <section className="bg-white dark:bg-gray-900">
                    <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                      <div className=" place-self-center lg:col-span-12">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">CREATIVE PORTFOLIO
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                          Get started
                          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                          Let's Talk about Your Project
                        </a>
                      </div>

                    </div>
                  </section>
                </div>
                <div className="portfolio-2  md:py-12">
                  <div className="container px-4 mx-auto">
                    <div className="sm:flex sm:flex-wrap sm:-mx-4  pb-6">
                      {cardData.map((cardDt , i) => {
                        return (
                          <div className="sm:px-6 sm:w-1/2 lg:w-1/2 mt-8" key={i}>
                          <div className="portfolio-item mx-auto max-w-sm">
                            <div className="portfolio-img relative overflow-hidden cursor-pointer">
                            <a href={cardDt.url}>  <img    src={cardDt.src} alt="portfolio image" className="max-w-full h-auto" /></a>
                              <div className="portfolio-hover"></div>
                            </div>
                            <div className="px-1 py-4">
                              <h5 className="font-semibold text-xl text-indigo-600 uppercase" >{cardDt.title}</h5>
                              <p className="text-gray-600">{cardDt.description}</p>
                            </div>
                          </div>
                        </div>
                        )
                      })}

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
