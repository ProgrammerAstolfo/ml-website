import {Inter} from "next/font/google";
import {motion} from "framer-motion";
import Navbar from "@/components/NavBar";
import Head from "next/head";
import {useEffect, useRef, useState} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const hasRan = useRef(false);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (hasRan.current) return;
    hasRan.current = true;

    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  return (
    <div className={inter.className}>
      <Head>
        <title>mldkyt's website</title>
        <meta
          name="description"
          content="Welcome to mldkyt's website!"
        />
        <meta name="author" content="mldkyt"/>
        <meta name="theme-color" content="#FF77FF"/>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4021488147419187"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <div className="absolute left-0 top-0 w-screen">
        <div className="bg-gradient-to-b from-[#2B0029] to-black">
          <motion.div
            className="h-56"
            initial={{opacity: 0, transform: "scale(0.8) translateY(-100px)"}}
            animate={{opacity: 1, transform: "scale(1) translateY(0)"}}
            transition={{duration: 1, ease: "backOut"}}
          >
            <div className="relative px-[10%] top-1/2 -translate-y-1/2">
              <div className="flex">
                <div className="relative top-5">
                  <img
                    src="/pfp.png"
                    alt="Astolfo Profile Picture"
                    className="rounded-full w-10"
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-5xl my-4 text-white">mldkyt</h1>
                </div>
              </div>
              <p className="text-white">Scroll down &#x2193;</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.5}}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">About me</h1>
            <p className="my-4 text-white">
              I am proficient in writing code across a wide array of programming languages, encompassing a diverse spectrum of options. These languages encompass C#, C++, C, Python, Java, Kotlin, JavaScript, TypeScript, HTML, and CSS. My experience and expertise in the realm of programming are substantial, having dedicated over a decade to crafting and refining code.
            </p>

            {readMore && <>
                <motion.p initial={{opacity: 0, fontSize: '0%'}} animate={{opacity: 1, fontSize: '100%'}} transition={{duration: 1}} className="my-4 text-white">
                    Over the course of my extensive journey in the realm of programming, I've delved into the nuances and intricacies of various languages, each with its unique syntax and application. C# and C++ offer robust capabilities for software development, while C itself provides a foundational understanding of programming principles. Python, renowned for its simplicity and versatility, has been a valuable tool in numerous projects. Java and Kotlin enable cross-platform compatibility, bolstering my repertoire for mobile and web applications. JavaScript and TypeScript empower me to create dynamic and interactive web experiences, while HTML and CSS lay the foundation for web development.
                </motion.p>

                <motion.p initial={{opacity: 0, fontSize: '0%'}} animate={{opacity: 1, fontSize: '100%'}} transition={{duration: 1}} className="my-4 text-white">
                    My decade-long voyage in programming has been marked by continuous learning and adaptation. Staying abreast of the latest advancements and best practices has been integral to my growth as a programmer. Throughout this journey, I've undertaken diverse projects, tackling challenges and honing my problem-solving skills.
                </motion.p>

                <motion.p initial={{opacity: 0, fontSize: '0%'}} animate={{opacity: 1, fontSize: '100%'}} transition={{duration: 1}} className="my-4 text-white">
                    In essence, my proficiency across these programming languages, coupled with my extensive experience, positions me as a versatile and capable programmer, equipped to navigate the multifaceted landscape of software development with finesse.
                </motion.p>
                <button className='text-blue-500 cursor-pointer' onClick={() => setReadMore(false)}>Show less &#x2190;</button>

            </>}

            {readMore || <>
              <button className='text-blue-500 cursor-pointer' onClick={() => setReadMore(true)}>Show more &#x2192;</button>
            </>}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 0.8}}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">
              mldkyt's Projects
            </h1>
            <div className="mt-6">
              <h2 className="text-xl text-white font-bold">Astolph0/place</h2>
              <p className="text-white">An r/place clone</p>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="https://place.mldkyt.com/"
              >
                <button className="mt-2">Open</button>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                Astolfo Resource Pack
              </h2>
              <p className="text-white">A resource pack for Minecraft</p>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="/project/astolforesourcepack"
              >
                <button className="mt-2">Download</button>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">Asphalt Roads</h2>
              <p className="text-white">A mod for My Summer Car</p>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="/project/asphaltroads"
              >
                <button className="mt-2">Download</button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, delay: 1}}
        >
          <div className="relative px-[10%] py-[10px]">
            <h1 className="text-3xl text-white font-bold">
              Stalk mldkyt
            </h1>
            <div className="mt-6">
              <h2 className="text-xl text-white font-bold">
                <span className="text-red-500">You</span>Tube
              </h2>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="https://youtube.com/@mldkyt"
              >
                <button className="mt-2">Subscribe</button>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                <span className="text-[#25f4ee]">Tik</span>
                <span className="text-[#ee1d52]">Tok</span>
              </h2>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="https://tiktok.com/@astolph0_"
              >
                <button className="mt-2">Follow</button>
              </a>
            </div>
            <div className="mt-4">
              <h2 className="text-xl text-white font-bold">
                <span className="text-[#a970ff]">Twitch</span>
              </h2>
              <a
                className="text-white bg-blue-600 p-1 px-2 rounded-md"
                href="https://twitch.tv/mldkyt"
              >
                <button className="mt-2">Follow</button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Navbar sel="home"/>
    </div>
  );
}