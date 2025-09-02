import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import TransitionEfffect from '@/components/TransitionEfffect';
import TypingEffect from '@/components/TypingEffect';
import Link from 'next/link';
import { IconGithubnav, LinkedInIcon, MailIcon } from '@/components/Icons';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch('https://formspree.io/f/xgvlzdbo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          alert('Message sent successfully!');
          reset();
        } else {
          alert('Oops! There was a problem.');
        }
      })
      .catch(() => alert('Network error'));
  };

  return (
    <>
      <Head>
        <title> AD| Contact Page</title>
        <meta name="Contact" content="contact me" />
      </Head>
      <TransitionEfffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <TypingEffect
            text="Lets talk with me"
            className="!text-5xl xl:!text-4xl md:!text-4xl sm:!text-3xl mx-auto text-center mb-6"
          />
          <div className="relative bg-transparent w-[70%] items-center justify-center m-auto sm:w-[80%] xs:w-[90%] border p-8 shadow-2xl md:p-4 sm:p-2 xs:p-2">
            {/* Social Links */}
            <div className="flex flex-row hover:cursor-pointer justify-center items-center p-2 gap-6">
              <Link
                href="https://www.linkedin.com/in/axita-dash-63b246366/"
                className="mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/Axitadash"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                target="_blank"
              >
                <IconGithubnav />
              </Link>
              <Link
                href="/contact"
                className="mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                target="_blank"
              >
                <MailIcon />
              </Link>
            </div>
            <hr />

            {/* Formspree Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="font-medium mt-4 space-y-4">
              <div className="flex flex-col w-full py-2">
                <label htmlFor="name" className="py-2 font-semibold">Name</label>
                <input
                  id="name"
                  placeholder="Your name"
                  className="p-2 rounded-lg border border-slate-600 border-r-4 border-b-4 focus:outline-none focus:border-black focus:ring-black focus:ring-1 placeholder:italic placeholder:text-slate-400"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col w-full py-2">
                <label htmlFor="email" className="py-2 font-semibold">Email</label>
                <input
                  id="email"
                  placeholder="you@example.com"
                  className="p-2 rounded-lg border border-slate-600 border-r-4 border-b-4 focus:outline-none focus:border-black focus:ring-black focus:ring-1 placeholder:italic placeholder:text-slate-400"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' },
                  })}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col w-full py-2">
                <label htmlFor="message" className="py-2 font-semibold">Message</label>
                <textarea
                  placeholder="Write your message here"
                  rows={5}
                  className="p-2 rounded-md border border-slate-600 border-r-4 border-b-4 focus:outline-none focus:border-black focus:ring-black focus:ring-1 placeholder:italic placeholder:text-slate-400"
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="bg-Charcoal rounded-lg py-2 px-3 text-White m-2 border border-black border-r-4 border-b-4 float-right shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600 duration-300"
              >
                Send Me
              </button>
            </form>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
