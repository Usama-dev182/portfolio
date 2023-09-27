"use client"

import NewsLatterBox from "./NewsLatterBox";
import React, { useState } from 'react';
import { Formik, Field } from "formik";
import { useFormik } from "formik";
const Contact = () => {
  const [selectOption, setselectOption] = useState();
  const formik = useFormik({
    initialValues: {
      visitor_name: "",
      visitor_email: "",
      visitor_message: "",
      concerned_department: selectOption,


    },
    onSubmit: values => {
      // handle form submission
      console.log(values, 'values ===>')
    },
  });
  const handleChange = (e) => {
    setselectOption(e.target.value)
  }

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-12/12 xl:w-12/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Leave a message
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        id="name" name="visitor_name"
                        required
                        value={formik.values.visitor_name}
                        onChange={formik.handleChange}
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        name="visitor_email"
                        value={formik.values.visitor_email}
                        onChange={formik.handleChange}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <div className="elem-group">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Choose  Department
                        </label>                  <div>
                          <select className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one 
                          outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                            id="department-selection" name="concerned_department" value={selectOption} onChange={formik.handleChange} required>
                            <option value="">Select a Department</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Block-Chain">Block-Chain</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Python Development">Python Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="Technical Support">Technical Support</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <div className="elem-group">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Choose  Document (Optional)
                        </label>
                        {/* <Field type="file" id="myFile" name="myFile" /> */}
                        <input id="file" name="file" type="file" onChange={(event) => {
                          formik.setFieldValue("file", event.currentTarget.files[0]);
                        }} />                      </div>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="visitor_message"
                        onChange={formik.handleChange}
                        // name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
