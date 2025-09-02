import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import aboutPic from '../../public/images/about1.png';
import Skills from '@/components/Skills';
import Expreances from '@/components/Expreances';
import Education from '@/components/Education';
import TransitionEfffect from '@/components/TransitionEfffect';
import TypingEffect from '@/components/TypingEffect';

const about = () => {
  return (
    <>
      <Head>
        <title>AD | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEfffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-10 md:pt-8 sm:pt-6">
          {/* Heading Section */}
          <div className="md:flex flex-row sm:flex-col sm:items-center gap-6">
            <Image
              src={aboutPic}
              alt="do you want to know about me"
              className="w-24 h-auto rounded-full 2xl:hidden md:inline-block md:ml-6 sm:my-2"
            />

            <TypingEffect
              text="A little bit About Me"
              className="!text-5xl xl:!text4xl md:!text-4xl sm:!text-3xl"
            />
          </div>

          {/* About and Video Section */}
          <div className="flex items-center justify-between pt-6 w-full md:flex-col md:justify-center md:items-center gap-8">
            {/* Text Section */}
            <div className="w-1/2 md:w-full border-4 border-double p-6">
              <p className="font-medium leading-relaxed">
                I'm a passionate full-stack web developer focused on building impactful web applications. I leverage my strong foundation in JavaScript, HTML, CSS, React, Java, and Python, along with solid knowledge of OOPs concepts and Data Structures, to create dynamic and engaging user interfaces 💻. 
                 <br/>
                 On the back end, I use Node.js to develop robust and scalable server-side solutions ⚙️.
                <br />

I'm always eager to connect and collaborate on new projects! Feel free to reach out if you're looking for a skilled developer – let's build something great together! 
                
                <span className='font-bold'>📩 axitadash@gmail.com</span>
              </p>
            </div>

            {/* Video Section */}
            <div className="w-80 h-96 rounded-xl overflow-hidden shadow-lg border-4s">
              <video
                src="/images/video.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Skills, Education, Experience Sections */}
          <Skills />
          <Education />
          <Expreances />
        </Layout>
      </main>
    </>
  );
};

export default about;
