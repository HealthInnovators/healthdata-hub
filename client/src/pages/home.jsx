import React from 'react'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <motion.div 
        className='h-full md:px-10 bg-white grid grid-cols-1 md:grid-cols-2'
        initial={{ opacity: 0, x: -50}}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 2}} >
          <div className='flex flex-col text-center text-blue-800 px-5'>
            <h1 className='text-5xl pt-10 pb-7'>Health Data Hub</h1>
            <span className='text-xl pb-7'>Revolutionizing Human Health Data Management</span>
            <p className='text-start'>In response to the challenges in the current human health data landscape, the HealthData Hub Blockchain Project aims to establish a decentralized marketplace for health data. This initiative addresses issues such as fragmented data collection, lack of compensation for data contributors, and concerns about data security and privacy. By leveraging blockchain technology, the HealthData Hub seeks to standardize data collection, using health data as a transaction unit, and implement robust security measures.</p>
            <div className='py-7 flex flex-row justify-center'>
              <button className='p-3 mx-4 mb-10 bg-green-400 hover:bg-green-500 text-white rounded-full'>Learn More</button>
              <button className='p-3 mx-4 mb-10 bg-green-400 hover:bg-green-500 text-white rounded-full'>Log In</button>
              <button className='p-3 mx-4 mb-10 bg-green-400 hover:bg-green-500 text-white rounded-full'>Sign Up</button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src="https://demigos.com/media/blog/upload/2021/07/13/2021-07-13-185742.png" alt="Image" className='p-2 w-96 h-80' />
          </div>    
      </motion.div>

      {/* Features */}
      <div className='h-full md:px-10 bg-blue-500 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-center'>
            <img src="https://demigos.com/media/blog/upload/2021/07/13/2021-07-13-185742.png" alt="Image" className='p-2 w-96 h-80' />
        </div>
        <motion.div 
          className='flex flex-col text-center text-white px-5'
          initial={{ opacity:0, x:50}}
          animate={{ opacity:1, x:0}}
          transition={{ duration: 2}}
        >
            <h1 className='text-3xl pt-10 pb-7'>Key Features and Solutions</h1>
            <p className='text-justify'>
            1. Standardized Data Collection: The HealthData Hub promotes standardized data collection methodologies to streamline information from various sources, ensuring consistency and reliability.<br /><br />
            2. Blockchain Security: Health data, being sensitive, is stored on the HealthData Hub Blockchain, incorporating advanced encryption techniques to safeguard personal information. The decentralized nature of the blockchain enhances security by reducing the risk of a single point of failure.<br /><br />
            3. Fair Compensation System: The platform introduces a fair compensation system, quantifying the value of health data and providing compensation to contributors in the form of HealthData Coins. This incentivizes individuals to share their health data, fostering a more comprehensive and diverse dataset.<br /><br />
            4. Decentralized Marketplace: The HealthData Market operates on the HealthData Hub Blockchain, allowing participants to securely share and trade health data. The platform ensures data privacy and ownership rights, preventing unauthorized access and use. <br /><br />
            {/* 5. Distributed Data Storage: HealthData Peer Storage, an integral part of the HealthData Hub Blockchain, supports distributed storage for health data. This ensures efficiency, accessibility, and redundancy in data storage, enhancing overall system reliability. <br /><br />
            6. HealthData Platform: Responsible for managing and operating the HealthData Market, the HealthData Platform handles policies, participant authentication, and software distribution. It facilitates seamless interaction between data producers (individuals) and consumers (healthcare providers, researchers, etc.). <br /><br /> */}
            </p>
            <div className='py-7 flex justify-center'>
              <button className='p-3 mb-10 bg-green-400 hover:bg-green-500 text-white rounded-full'>Learn More</button>
            </div>
        </motion.div>
      </div>

      {/* Methods of Health Data Collection */}
      <motion.div 
        className='h-full md:px-10 bg-white grid grid-cols-1 md:grid-cols-2'
        initial={{ opacity: 0, x: -50}}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 2}} >
          <div className='flex flex-col text-center text-blue-800 px-5'>
            <h1 className='text-3xl pt-10 pb-7'>Methods of Health Data Collection</h1>
            <p className='text-start'>Similar to the DataMart approach, the HealthData Hub employs two methods for collecting health data: <br /><br />
            - HealthData Mobile WalletTM: Individuals can use the HealthData Mobile Wallet, which securely collects and transmits health data to the HealthData Blockchain. Personal or confidential information is encrypted before transmission. <br /><br />
            - HealthData Wearable Device: A wearable health device securely collects and stores health data on the blockchain. The data is encrypted, ensuring privacy and security. For larger data sets like medical images or voice recordings, alternate methods such as Wi-Fi transmission or local storage may be employed.</p>
            <div className='py-7 flex justify-center'>
              <button className='p-3 mb-10 bg-green-400 hover:bg-blue-500 text-white rounded-full'>Learn More</button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img src="https://demigos.com/media/blog/upload/2021/07/13/2021-07-13-185742.png" alt="Image" className='p-2 w-96 h-80' />
          </div>    
      </motion.div>

      {/* Potential Services and Benefits */}
      <div className='h-full md:px-10 bg-blue-500 grid grid-cols-1 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-center'>
            <img src="https://demigos.com/media/blog/upload/2021/07/13/2021-07-13-185742.png" alt="Image" className='p-2 w-96 h-80' />
            <img src="https://demigos.com/media/blog/upload/2021/07/13/2021-07-13-185742.png" alt="Image" className='p-2 w-96 h-80' />
        </div>
        <motion.div 
          className='flex flex-col text-center text-white px-5'
          initial={{ opacity:0, x:50}}
          animate={{ opacity:1, x:0}}
          transition={{ duration: 2}}
        >
            <h1 className='text-3xl pt-10 pb-7'>Potential Services and Benefits</h1>
            <p className='text-justify'>
            1. Health Services Enhancement: The HealthData Market facilitates the development of personalized health services, aiding in diagnostics, treatment, and preventive care. <br /><br />
            2. Legal Use of Health Data: Health data can serve as legal evidence in medical cases, contributing to the resolution of disputes and ensuring accuracy in legal proceedings. <br /><br />
            3. Customized Insurance Plans: Insurance providers can tailor plans based on an individual's health data, promoting fair and personalized coverage. <br /><br />
            4. Availability of Healthcare Facilities: Real-time information on the availability of medical facilities, such as hospitals and clinics, can be provided through the HealthData Market. <br /><br />
            5. Media Content in Healthcare: Access to educational and informational content related to healthcare can be provided in real-time through the HealthData Market. <br /><br />
            6. Traffic Condition Maps for Healthcare Facilities: Creating detailed maps of healthcare facilities and their accessibility can improve healthcare service delivery. <br /><br />
            7. Secure Monitoring and Control: Users have control over their personal health information, ensuring secure monitoring and sharing as per their preferences. <br /><br />
            8. Data Transfer Between Healthcare Providers: Seamless and secure transfer of health data between different healthcare providers can enhance collaborative care. <br /><br />
            9. Bounties for Desired Health Data: To encourage the sharing of specific health data, the platform may allow for the offering of bounties, further enriching the dataset. <br /><br />
            In summary, the HealthData Hub Blockchain Project aims to revolutionize human health data management, providing a secure, decentralized marketplace that incentivizes data sharing, ensures privacy, and unlocks new possibilities in healthcare services and research.
            </p>
            <div className='py-7 flex justify-center'>
              <button className='p-3 mb-10 bg-green-400 hover:bg-green-500 text-white rounded-full'>Learn More</button>
            </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div 
        className='h-full md:px-10 bg-white grid items-center'
        initial={{ opacity: 0, x: -50}}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 2}} >
          <div className='flex flex-col text-center px-5 pb-10'>
            <h1 className='text-3xl pt-10 pb-7 text-blue-500'>Contact</h1>
            <form className='flex flex-col justify-center items-center'>
              <input type="text" placeholder='Name' className='p-3 my-3 w-96 border-2 border-gray-400' />
              <input type="text" placeholder='Email' className='p-3 my-3 w-96 border-2 border-gray-400' />
              <input type="text" placeholder='Occupation' className='p-3 my-3 w-96 border-2 border-gray-400' />
              <textarea placeholder='Your Message' className='p-3 my-3 w-96 border-2 border-gray-400' cols="30" rows="10"></textarea>
              <input type="submit" value={'Submit'} className='p-3 my-5 rounded-full bg-green-400 hover:bg-green-500 text-white' />
            </form>
          </div>
      </motion.div>

    </div>
  )
}

export default Home
