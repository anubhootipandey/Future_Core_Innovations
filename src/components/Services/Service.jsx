import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faBriefcase, faChartBar, faUnlockKeyhole, faFileLines } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/serimg-01.jpg';
import image2 from '../images/serimg-02.jpg';
import image3 from '../images/serimg-03.jpg';
import image4 from '../images/serimg-04.jpg';
import image5 from '../images/serimg-05.jpg';
import image6 from '../images/serimg-06.jpg';
import image7 from '../images/serimg-07.jpg';
import image8 from '../images/serimg-08.jpg';
import image9 from '../images/serimg-09.jpg';
import image10 from '../images/serimg-10.jpg';
import newsletter from '../images/newletter.png';

const servicesData = {
    "Cloud Databases": {
        description: "Unlock the power of seamless data management with our cloud database solutions. Designed for scalability and flexibility, our cloud databases offer a robust platform for storing, accessing, and analyzing data with unparalleled ease. Whether you’re handling massive amounts of information or need real-time access from anywhere in the world, our service ensures high performance and reliability. Enjoy automatic updates, secure data backups, and seamless integration with your existing applications. With our cloud databases, you can focus on growing your business while we manage the complexities of data storage and maintenance. Embrace the future of data management and streamline your operations effortlessly.",
        image: image1,
    },
    "Website Hosting": {
        description: "In the digital age, having a robust and reliable web presence is essential for any business or individual looking to make an impact online. Our web hosting services are designed to provide you with a seamless, secure, and highly efficient platform to ensure your website runs smoothly and remains accessible at all times. Whether you're running a personal blog, an e-commerce store, or a corporate website, we offer a range of hosting solutions tailored to meet your specific needs. Our web hosting packages come with a variety of features that cater to both beginners and seasoned webmasters. We provide ample storage space, high bandwidth, and guaranteed uptime to ensure your site can handle high traffic without any slowdowns or interruptions.",
        image: image2, // Add the correct path to your image
    },
    "Network Setup & Management": {
        description: "Network setup and management services encompass a comprehensive range of activities designed to ensure the efficient functioning, security, and reliability of computer networks within organizations. These services are crucial for businesses of all sizes, from small enterprises to large corporations, aiming to establish and maintain robust network infrastructures that support their operations. This involves setting up network security protocols, implementing Quality of Service (QoS) measures to prioritize critical applications, and optimizing network performance to achieve optimal throughput and minimize latency.",
        image: image3, // Add the correct path to your image
    },
    "IT Consulting": {
        description: "We specialize in delivering comprehensive IT consulting services tailored to meet the diverse needs of modern businesses. Our team of seasoned IT consultants brings years of industry expertise, combining technical proficiency with a deep understanding of business strategy. We partner closely with our clients to assess their current IT infrastructure, identify opportunities for improvement, and develop customized solutions that drive efficiency and innovation. Whether your organization is navigating digital transformation, seeking to optimize existing systems, or integrating new technologies, we provide strategic guidance every step of the way. We begin by conducting thorough assessments to gain a comprehensive understanding of your business goals and IT challenges.",
        image: image4, // Add the correct path to your image
    },
    "Data Management and Analytics": {
        description: "Elevate your business with our comprehensive Data Management and Analytics services. We provide a robust framework for efficiently organizing, storing, and analyzing your data to drive actionable insights. Our solutions enable you to consolidate data from various sources, ensuring accuracy and consistency. With advanced analytics tools, you can uncover trends, forecast future performance, and make data-driven decisions that propel your business forward. Our service includes real-time reporting, customizable dashboards, and in-depth data visualization to help you understand and leverage your data effectively. Optimize your operations, enhance decision-making, and achieve strategic goals with our cutting-edge data management and analytics solutions.",
        image: image5, // Add the correct path to your image
    },
    "Design & Development": {
        description: "At the heart of our company's innovation lies our dedicated Design and Development team, a group of visionary creators and technical experts committed to transforming ideas into tangible solutions. Our approach to design is rooted in understanding the unique needs of our clients and the ever-evolving demands of the market. We believe that effective design is not just about aesthetics but about creating intuitive, user-centric experiences that resonate with users on a fundamental level. We pride ourselves on our ability to handle projects of varying complexities, from simple websites to intricate enterprise applications. Our team is proficient in a wide range of programming languages and platforms, enabling us to choose the best tools for each project.",
        image: image6, // Add the correct path to your image
    },
    "Android Apps Development": {
        description: "Application development is a dynamic process focused on creating software applications that meet specific user or business needs across various platforms like desktops, mobile devices, and embedded systems. It encompasses several key stages, starting with thorough planning and requirement gathering. During this phase, developers collaborate closely with stakeholders to understand the application's purpose, functionalities, and target audience. Design and prototyping follow, where the application's architecture, user interface (UI), and user experience (UX) are conceptualized and validated through mockups or prototypes. Once the design is finalized, developers proceed to the coding and development phase, where they write and integrate code using programming languages, frameworks, and development tools.",
        image: image7, // Add the correct path to your image
    },
    "Website Development": {
        description: "At Future Core Innovations, we are not just a web development company; we are architects of digital transformation. With a relentless passion for innovation and a commitment to excellence, we specialize in creating cutting-edge web solutions that propel businesses forward in the digital age. Tailored solutions designed to meet the unique needs of your business. From intricate e-commerce platforms to robust corporate websites, we build with precision and purpose. Responsive Design: Ensuring your website looks stunning and functions seamlessly across all devices. We prioritize user experience to maximize engagement and conversions. Contact us today to discuss your project and discover how we can help you achieve your business objectives through innovative web solutions. Your future begins here.",
        image: image8, // Add the correct path to your image
    },
    "Cyber Security Services": {
        description: "Cybersecurity is the practice of protecting computer systems, networks, and data from malicious attacks, unauthorized access, and other cyber threats. In today's interconnected world, where digital technologies are integral to business operations, communication, and personal activities, cybersecurity has become a critical concern for individuals, organizations, and governments alike. The primary goal of cybersecurity is to safeguard sensitive information, maintain the integrity of data, and ensure the availability of systems and services.",
        image: image9, // Add the correct path to your image
    },
    "VoIP and Unified Communications": {
        description: "Transform your communication experience with our VoIP and Unified Communications services. Our solutions seamlessly integrate voice, video, and messaging into a single, cohesive platform, enhancing collaboration and productivity across your organization. Enjoy crystal-clear voice calls, high-definition video conferencing, and instant messaging, all managed through an intuitive interface. Our VoIP service offers cost-effective, scalable options that adapt to your needs, while unified communications streamline interactions and improve workflow efficiency. Benefit from advanced features like call forwarding, voicemail-to-email, and real-time presence indicators. Enhance your team’s connectivity and collaboration, reduce communication costs, and streamline your operations with our cutting-edge VoIP and Unified Communications solutions.",
        image: image10, // Add the correct path to your image
    },
};

const Service = () => {
    const [selectedService, setSelectedService] = useState("Cloud Databases");

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    return (
        <div className='bg-gray-100 flex flex-col items-center px-4'>
            <div className='flex flex-col md:flex-row justify-between w-full max-w-7xl mt-20'>
                {/* Left Section with Buttons */}
                <div className='w-full md:w-1/3 bg-white rounded-2xl p-4'>
                    <h2 className='font-bold text-3xl mb-4'>Services</h2>
                    <div className='space-y-2'>
                        {Object.keys(servicesData).map(service => (
                            <div key={service}>
                                <button 
                                    className="flex justify-between items-center hover:bg-blue-950 hover:text-white font-bold text-gray-500 rounded-xl w-full text-start px-4 py-2"
                                    onClick={() => handleServiceClick(service)}
                                >
                                    {service} <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section with Image and Description */}
                <div className='w-full relative -right-[7rem] md:w-2/3 flex flex-col'>
                    <h1 className='text-4xl font-bold mb-4'>{selectedService}</h1>
                    <img 
                        className='rounded-2xl w-[40rem] h-80 object-cover mb-4' 
                        src={servicesData[selectedService].image} 
                        alt={selectedService} 
                    />
                    <p className='text-gray-700 w-[45rem]'>
                        {servicesData[selectedService].description}
                    </p>
                </div>
            </div>

            {/* Key Factor Section */}
            <div className='w-[36rem] mt-[4rem] relative left-[13rem]'>
                <h1 className='text-3xl font-bold mb-4'>Key Factors</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                        <FontAwesomeIcon className='w-6 h-6 text-blue-950' icon={faBriefcase} />
                        <h3 className='text-2xl font-semibold'>Performance</h3>
                        <p className='text-gray-700'>Benefit from high-speed data processing and retrieval...</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='w-6 h-6 text-blue-950' icon={faChartBar} />
                        <h3 className='text-2xl font-semibold'>Cost-Efficiency</h3>
                        <p className='text-gray-700'>Reduce overhead by eliminating the need for physical hardware...</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='w-6 h-6 text-blue-950' icon={faUnlockKeyhole} />
                        <h3 className='text-2xl font-semibold'>Scalability</h3>
                        <p className='text-gray-700'>Easily adjust resources to match your growing data needs...</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className='w-6 h-6 text-blue-950' icon={faFileLines} />
                        <h3 className='text-2xl font-semibold'>Security</h3>
                        <p className='text-gray-700'>Protect your data with advanced encryption...</p>
                    </div>
                </div>
            </div>

            {/* Key Benefits Section */}
            <div className='w-[36rem] mt-[4rem] relative left-[13rem] top-4'>
                <h1 className='text-3xl font-bold mb-4'>Key Benefits</h1>
                <ul className='list-disc list-inside text-gray-700'>
                    <li className='mb-2'>Reduce communication expenses with affordable VoIP calling...</li>
                    <li className='mb-2'>Improve efficiency with features like call forwarding...</li>
                    <li className='mb-2'>Access communication tools from anywhere...</li>
                    <li>Integrate voice, video, and messaging for seamless team interactions.</li>
                </ul>
            </div>

            {/* Subscribe Section */}
            <div className=' mt-[4rem] w-[73rem] relative -left-[5rem] h-[26rem] top-20 p-8 rounded-lg flex flex-col '>
                <h1 className='text-5xl font-bold mb-4'>Subscribe to our newsletter</h1>
                <p className='text-gray-600 mb-6'>
                    Subscribe to our newsletter and get exclusive deals you won't find anywhere else straight to your inbox.
                </p>
                <form className='w-[28rem] flex flex-col items-start'>
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className='w-full max-w-md p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
                    />
                    <button
                        type="submit"
                        className='bg-blue-950 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none'
                    >
                        Subscribe Now
                    </button>
                </form>
                <div className='absolute top-[.5rem] left-[50rem] '>
                    <img className='w-[25rem] h-[25rem]' src={newsletter} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Service;
