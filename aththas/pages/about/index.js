import React,{useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPowerOff,
  FaLeaf,
  FaDocker,
  FaCloud,
  FaJava, 
  FaPhp, 
  FaSass, 
  FaCode,
  FaDatabase,
  FaFire,
  FaGit, 
  FaGithub,
  FaNetworkWired,
  FaTerminal,
  FaLinux,
  FaShieldAlt,
  FaBrain,
  FaKey,
  FaLock,
  FaUserSecret,
  FaBug
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiMicrosoftazure,
  SiKubernetes, 
  SiAmazonaws,
  SiTypescript, 
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiDart,
  SiPostman,
  SiIbm,
  SiOracle
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass />,
          <FaJs />,
          <FaReact />,
          <SiTypescript />,
          <SiRedux />,
          <SiNextdotjs />,
          <SiFramer />,
        ]
      },
      {
        title: 'Backend',
        icons: [
          <FaJava />,
          <FaJs />,
          <FaPhp />,
          <FaCode />,
          <FaLeaf />,
          <FaPowerOff />,
          <SiDart />,
        ]
      },
      {
        title: 'Database',
        icons: [
          <FaDatabase />,
          <SiPostgresql />, 
          <FaFire />, 
          <SiMongodb />, 
        ],
      },
      {
        title: 'Version Control',
        icons: [
          <FaGit />,
          <FaGithub />,
          <SiMicrosoftazure />, 
        ],
      },
      {
        title: 'Cloud',
        icons: [
          <FaDocker />,
          <SiAmazonaws />, 
          <SiKubernetes />, 
          <FaCloud />,
        ],
      },
      {
        title: 'Other Tools',
        icons: [
          <FaNetworkWired />, 
          <SiPostman />,
          <FaTerminal />,
          <FaLinux />,
        ],
      },
      {
        title: 'Security Tools',
        icons: [
          <FaShieldAlt />, 
          <FaBrain />,
          <FaKey />,
          <FaLock />,
          <FaUserSecret />,
          <FaBug />,
          <SiIbm />,
          <SiOracle />,
        ],
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Bsc (Honors) in Computer Science and Technology at Uva Wellassa University (GPA 3.62)',
        stage: '2020 - 2024',
      },
      {
        title: 'Diploma in Software Engineering at NIBM (GPA 3.69)',
        stage: '2018 - 2019',
      },
      {
        title: 'GCE Advanced Level (Physical Science) - 1B 2C (z = 1.0817)',
        stage: '2018',
      },
      {
        title: 'Software Engineering certification at ATARI Institute',
        stage: '2015',
      },
      {
        title: 'GCE Ordinary Level - 7A 2B',
        stage: '2015',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Intern Information Systems - Mobitel Pvt Ltd',
        stage: '2024/03 - present',
      },
    ],
  },
  {
    title: 'Publications',
    info: [
      {
        title: 'A Comprehensive Study on Paddy Classification and Market Predictions: A Case Study in Sri Lanka',
        stage: '2024',
      },
    ],
  },
];

//components
import AvatarOther from '../../components/AvatarOther';
import Circles from '../../components/Circles';

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles/>
      <motion.div 
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <AvatarOther/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            className="h2 hidden lg:block"
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Iam a <span className="text-accent">Software</span> Engineer
          </motion.h2>
          <motion.p 
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Aspiring Software Engineer with a solid foundation in Java, C, PHP, and JavaScript. Passionate about Web and
            Mobile Application Development, eager to contribute innovative solutions to a software team, and committed to
            continuous learning.
          </motion.p>
          <motion.div 
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <div className="flex flex-1 xl:gap-x-6">

              <div 
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
                after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>

              <div 
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
                after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5}/> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Completed Projects</div>
              </div>

              <div 
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
                after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5}/>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Research Publication</div>
              </div>

            </div>
          </motion.div>
        </div>
        <motion.div 
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return <div key={itemIndex} 
              className={`
                ${
                index === itemIndex && 
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } 
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white 
              after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
              {item.title}
            </div>
          })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return <div key={itemIndex} 
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">:</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className="text-2xl text-white" key={itemIndex}>{icon}</div>
                  })}
                </div>
              </div>
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
