import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import moviefi from '../../public/images/moviefi.png';
import reactuiforge from '../../public/images/reactuiforge.png';
import portfolio from '../../public/images/portfolio.png';
import pcmt from '../../public/images/pcmt.png';
import cms from '../../public/images/cms.png'
import { IconGithub } from '@/components/Icons';
import TransitionEfffect from '@/components/TransitionEfffect';

const Project = ({ title, summery, img, link, github }) => {
  return (
    <article className="w-ful bg-gray-800  flex flex-col justify-between items-center  border-2 border-solid border-black shadow-black shadow-2xl xs:p-4 transition hover:-translate-y-1 delay-150 ease-in-out hover:scale-110 overflow-hidden rounded-xl ">
      <Link href={link} target="_blank" className="cursor-pointer rounded-md p-1">
        <Image src={img} alt={title} className="w-full h-68 rounded-xl" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between p-4 gap-2">
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2 text-2xl font-bold text-white"
        >
          {title}
        </Link>
        <p className='text-gray-500 line-clamp-3 text-sm'>{summery}</p>
        <div className="flex mt-4 items-center  ">
          <Link href={github} target="_blank" className="">
            <IconGithub />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 bg-rose-500 rounded- text-white px-2 py-1 hover:bg-rose-700 border-2 border-rose-300 hover:font-semibold md:text-base transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-2xl"
          >
            Preview{' '}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> SKbari | project page</title>
        <meta content="project" />
      </Head>
      <TransitionEfffect />
      <main className="w-full flex flex-col items-center justify-center min-h-screen ">
        <Layout className="pt-16">
          <AnimatedText
            text="welcome to my project world"
            className="ld:text-6xl md:text-5xl sm:text-4xl sx:3xl break-words mb-10"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 ld:gap-x-8 sm:gap-x-0">
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Movie-Fi"
                img={moviefi}
                summery="JWT authentication, secure email, password and profile pic update functionality. User can review,, likes, ratings and comments. Admin panel to create delete and update movies"
                link="https://movie-fi.vercel.app/"
                github="https://github.com/Kabri108/MovieFi"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React-UI-Forge"
                img={reactuiforge}
                summery="Dynamic library showcasing reusable React + Tailwind UI components with live previews and code snippets. Developer can copy and use fully optimize JSX components, Admin panel for adding new components"
                link="https://react-ui-forge.vercel.app/"
                github="https://github.com/Kabri108/react-ui-forge"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Cms-Dashboard"
                img={cms}
                summery="Engineered a robust, multi-role system (Admin, Teacher, Student, Parent) with intuitive dashboards and interactive data
 visualization, which notably reduced manual paperwork by 67%."
                link="https://cms-dashboard.vercel.app/"
                github="https://github.com/Kabri108/cms-dashboard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="College Website"
                img={pcmt}
                summery=" Dynamic library showcasing reusable React + Tailwind UI components with live previews and code snippets. Developed dynamic sections like Admissions, Academics, and News and Events. Implemented animations and optimized for performance"
                link="https://pcmt.vercel.app/"
                github="https://github.com/Kabri108/pcmt"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio"
                img={portfolio}
                summery=" Created a personal portfolio showcasing projects and skills. Awesome animations for better user experience"
                link="https://portfolio-five-wheat-40.vercel.app/"
                github="https://github.com/Kabri108/S_Kabri_Portfolio"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
