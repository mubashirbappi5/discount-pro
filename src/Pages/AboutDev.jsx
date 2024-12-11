import React from 'react';

const AboutDev = () => {
    return (
        <div>
            <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
      <p className="text-lg text-gray-700 mb-6">
        Hi, I’m <strong>Mubashir Bappi</strong>, a passionate front-end developer and tech enthusiast. I specialize in building modern,
        responsive, and user-friendly websites using the latest web technologies. I enjoy solving real-world problems with creative
        and efficient solutions, whether it's through building sleek UI designs, optimizing web performance, or implementing interactive
        features.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        I am also deeply interested in <strong>React</strong> and <strong>JavaScript</strong>, and I'm continuously learning to expand
        my knowledge and stay updated with the latest trends in web development. Outside of coding, I enjoy exploring <strong>history</strong>,
        <strong>culture</strong>, and <strong>nature</strong>, which has inspired me to work on various personal projects, such as my YouTube
        channel, <strong>Earth Explorer</strong>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
        <li>
          <strong>Gadget Heaven (E-commerce Platform)</strong>: A responsive e-commerce platform built with React and Tailwind CSS, focused on selling
          cutting-edge gadgets. The project features a fully functional shopping cart, product filtering, and product details pages.
        </li>
        <li>
          <strong>Pet Adoption Project</strong>: An app designed to help people find and adopt pets, with features like filtering pets by type and location,
          as well as a responsive layout.
        </li>
        <li>
          <strong>Book Wishlist (React)</strong>: A book recommendation app that allows users to add books to their wishlist and access them across devices
          using localStorage and React Context API.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc pl-8 text-lg text-gray-700 mb-6">
        <li><strong>Frontend Development</strong>: HTML, CSS (Tailwind CSS, Bootstrap), JavaScript (ES6+), React.js,</li>
        
        <li><strong>Tools</strong>: Git, GitHub, Firebase, NPM, Visual Studio Code, Figma</li>
        <li><strong>Libraries & Frameworks</strong>: React Router, Axios, Firebase Authentication, Tailwind CSS</li>
        <li><strong>Version Control</strong>: Git, GitHub</li>
      </ul>

      
    </div>
            
        </div>
    );
};

export default AboutDev;