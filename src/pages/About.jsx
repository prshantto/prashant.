import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen lg:w-[79%] bg-[url(/src/assets/images/bg_1.jpg)] bg-cover bg-center ">
      <div className="text-base md:text-xl text-center  inset-0 bg-black/80 text-gray-200 flex flex-col justify-center items-center gap-0.5 p-4 md:px-16 overflow-y-auto">
        <h1 className="text-3xl font-bold flex items-center md:mb-4">
          <img
            src="/src/assets/images/profile.jpg"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-5"
          />
          about me<span className="text-gray-500 text-5xl">.</span>
        </h1>
        <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
          <p>
            Hey there, I&apos;m Prashant Singh - a passionate developer, avid
            writer, and a connoisseur of awesome design. Welcome to my corner of
            the digital world!
          </p>
          <p>
            Since the early days of my journey, I&apos;ve been captivated by the
            art of crafting exceptional digital experiences. As a developer, I
            thrive on turning lines of code into functional and elegant
            solutions. My goal is to not just create software, but to build
            digital marvels that seamlessly merge form and function.
          </p>

          <p>
            But my journey doesn&apos;t stop at coding. With a heart full of
            words and a mind brimming with ideas, I&apos;ve ventured into the
            realm of writing. From tech articles that unravel complex concepts
            to creative tales that ignite the imagination, I weave words to
            inform, entertain, and inspire.
          </p>
          <p>
            What sets me apart is my unwavering appreciation for design. I
            believe that aesthetics and usability go hand in hand. My eye for
            awesome design ensures that every project I undertake not only works
            flawlessly under the hood but also looks stunning on the surface.
          </p>
          <p>
            Through this website, I aim to share my insights, experiences, and
            creations with you. Whether you&apos;re a fellow developer seeking
            solutions, a fellow writer in search of inspiration, or simply
            someone who appreciates the finer aspects of design, there&apos;s
            something here for you.
          </p>
          <p>
            Join me on this journey of bytes and narratives, logic and
            creativity, code and prose. Together, we can explore the boundless
            possibilities of technology and storytelling, all while reveling in
            the sheer beauty of thoughtful design.
          </p>
          <p>
            Thank you for being here, and I can&apos;t wait to embark on this
            adventure with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
