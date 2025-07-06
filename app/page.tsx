"use client"

// import type React from "react"
import React from "react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Monitor,
  Stars,
  Wrench,
  Mail,
  Instagram,
  ArrowRight,
  Star,
  Heart,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Variants } from "framer-motion";

export default function Portfolio() {

const projects = [
  {
    title: "Homepage Concept",
    subtitle: "Hero section & intro layout",
    images: ["/homepage-portfolio-website.png"],
  },
  {
    title: "Homepage Variation",
    subtitle: "Alternate hero & feature blocks",
    images: ["/homepage-portfolio-website-2.png", "/homepage-portfolio-website.png"],
  },
  {
    title: "About Page Design",
    subtitle: "Bio & values section mockup",
    images: ["/about-portfolio-website-2.png"],
  },
  {
    title: "Services Section",
    subtitle: "Features & offerings layout",
    images: ["/services-portfolio-website-1.png"],
  },
  {
    title: "Contact Page Layout",
    subtitle: "Inquiry form & details",
    images: ["/contact-portfolio-website-1.png"],
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut", // This is correct
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.42, 0, 1, 1] as [number, number, number, number], // cubic-bezier for easeOut
      },
    }),
  }

  const serviceVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 1, 1] as [number, number, number, number], // Add 'as [number, number, number, number]'
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotate: 1,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 1, 1] as [number, number, number, number], // Add 'as [number, number, number, number]'
      },
    },
  }
  const portfolioVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 1, 1] as [number, number, number, number], // Add 'as [number, number, number, number]'
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 1, 1] as [number, number, number, number], // Add 'as [number, number, number, number]'
      },
    },
  }

  // integrate form 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "66f9c46a-07d4-4e4e-b2e4-1e8da31cf793");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    
    <div className="min-h-screen bg-stone-100 text-gray-800 scroll-smooth overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-stone-300 to-stone-400 rounded-full opacity-15"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-25"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif text-xl font-bold text-teal-700"
            >
              EPITOME & Co
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden md:flex space-x-8"
            >
              {["About", "Services", "Portfolio", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-teal-700 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Animation */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero1.png "
            alt="Creative workspace background"
            fill
            className="object-cover"
            priority
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-stone-100/90 via-stone-100/80 to-stone-100/70"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {["Helping", "small", "brands", "&", "creators", "stand", "out", "online"].map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariants}
                className={`inline-block mr-3 ${index >= 5 ? "text-teal-700" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 font-light"
          >
            Simple & stylish portfolio websites. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#services">
                  View Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 opacity-5"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Monitor className="w-full h-full text-teal-700" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-10 w-24 h-24 opacity-5"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 5,
            }}
          >
            <Wrench className="w-full h-full text-teal-700" />
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet the Creative Behind the Code
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story & Values */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Introduction */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
                  Hi, I&lsquom <span className="font-semibold text-teal-700">Ioana</span>! I’m a UK-based web developer who helps small brands and independent creatives build an intentional online presence through clean, minimal portfolio websites.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
                  Whether you&lsquore an artist, service provider, or content creator, I’ll work with you to build a custom portfolio that reflects your vision and makes your work shine.
                </motion.p>
              </motion.div>

              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">What drives my work:</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    {
                      icon: Heart,
                      title: "Friendly",
                      description:
                        "Building genuine connections with every client, making the creative process enjoyable and stress-free.",
                      color: "from-pink-400 to-red-400",
                    },
                    {
                      icon: Star,
                      title: "Minimal & Effective",
                      description:
                        "Clean design that puts your work front and center.",
                      color: "from-yellow-400 to-orange-400",
                    },
                    {
                      icon: Zap,
                      title: "Tailored to You ",
                      description:
                        "Every portfolio is built around your unique goals and style.",
                      color: "from-teal-400 to-blue-400",
                    },
                  ].map((value, index) => (
                    <motion.div
                      key={value.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-stone-50 transition-all duration-300 cursor-pointer group"
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <value.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Elements & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="space-y-8"
            >
            

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
              {[
                { number: "Thoughtful Design", icon: "🚀" },
                { number: "Client-Focused", icon: "⭐" },
                { number: "Growth-Oriented", icon: "📈" },
                { number: "Fast & Reliable", icon: "⚡" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.number} // Add this line
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white rounded-2xl p-4 shadow-md text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-bold text-lg text-gray-900">{stat.number}</div>
                </motion.div>
              ))}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 text-white text-center shadow-xl"
              >
                <h4 className="font-serif text-lg font-semibold mb-2">Ready to work together?</h4>
                <p className="text-sm opacity-90 mb-4">
                  Let&lsquos create something beautiful that represents your brand perfectly.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-white text-teal-700 hover:bg-stone-50 font-medium px-6 py-2 rounded-full shadow-lg"
                    asChild
                  >
                    <a href="#contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What I Can Do for You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple Portfolio Websites for Creatives & Small Brands
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Monitor,
                title: "Custom Portfolio Website",
                description:
                  "Clean, responsive one-page or multi-page websites designed to showcase your work professionally. No templates, just thoughtful, custom layouts tailored to your brand.",
              },
              {
                icon: Stars,
                title: "Subtle Animations & Interactive Elements",
                description:
                  "Bring your site to life with modern animations and hover effects that make browsing more enjoyable, without overwhelming the user. These subtle touches give your portfolio a polished, high-end feel.",
              },
              {
                icon: Wrench,
                title: "Launch & Aftercare Toolkit",
                description:
                  "Don’t worry about the tech or launch stress, I’ll handle domain setup, basic SEO, and handover guidance.  Once your site is live, you’ll have everything you need to share it with confidence.",
              },
            ].map((service, index) => (
              <motion.div key={service.title} variants={serviceVariants} whileHover="hover" className="cursor-pointer">
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8 text-teal-700" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

     
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See What I&lsquove Been Creating
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into recent projects that showcase simple, custom portfolio sites.
            </p>
          </motion.div>

          {/* Grid of Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-1"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={`${project.title}-${idx}`}
                variants={portfolioVariants}
                whileHover="hover"
                className="relative group overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300"
              >
                {/* Carousel */}
              <Swiper spaceBetween={10} slidesPerView={1} loop>
        {project.images.map((img, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            {/* 
              Increase the max width here — you can also
              remove it entirely to let it stretch full-width.
            */}
            <div className="grid grid-cols-1 ">
              <Image
                src={img}
                alt={`${project.title} ${i + 1}`}
                width={1200}            // bump up intrinsic size
                height={600}
                layout="responsive"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


                {/* Gradient Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                />

                {/* Title / Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-4 left-4 text-white z-10"
                >
                  <h3 className="font-serif text-lg font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.subtitle}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to bring your idea to life?
            </h2>
            <p className="text-xl text-gray-600">
              Let&lsquos chat about your project and see how we can work together to create something amazing.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-2xl bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Let&lsquos Start a Conversation</h3>
                    <p className="text-gray-600">Tell me about your vision and let&lsquos make it happen together.</p>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          className="border-stone-200 transition-all duration-300"                          
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          className="border-stone-200 transition-all duration-300"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type
                      </label>
                      <Input
                        id="project-type"
                        name="project-type"
                        placeholder="Personal Portfolio, Brand Showcase, etc."
                        className="border-stone-200 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project and vision..."
                        rows={4}
                        className="border-stone-200 transition-all duration-300"
                      />
                    </motion.div>

                  </form>
                  <span>{result}</span>

                  {/* Contact Methods */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8 pt-6 border-t border-stone-200"
                  >
                    <p className="text-center text-sm text-gray-600 mb-4">Or reach out directly:</p>
                    <div className="flex justify-center space-x-6">

                      <motion.a
                        href="https://instagram.com/ioacreatives"
                        className="flex items-center space-x-2 text-gray-600 hover:text-teal-700 transition-colors duration-300 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Instagram className="w-5 h-5 text-teal-700" />
                        </motion.div>
                        <span className="text-sm font-medium">Instagram</span>
                      </motion.a>

                      <motion.a
                        href="mailto:hello@epitomecreatives.com"
                        className="flex items-center space-x-2 text-gray-600 hover:text-teal-700 transition-colors duration-300 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Mail className="w-5 h-5 text-teal-700" />
                        </motion.div>
                        <span className="text-sm font-medium">Email</span>
                      </motion.a>


                    </div>
                  </motion.div>

                  {/* Personal Quote */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-6 text-center"
                  >
                    <p className="text-sm text-gray-500 italic font-serif">
                      Every great project starts with a simple conversation. I can&lsquot wait to hear from you!
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white border-t border-stone-200 py-4 px-4 sm:px-4 lg:px-8"
      >
        <div className="flex items-center justify-center mx-auto ">
            <p className="text-gray-600">© 2025 Epitome & Co</p>
        </div>

      </motion.footer>
    </div>
  )
}
