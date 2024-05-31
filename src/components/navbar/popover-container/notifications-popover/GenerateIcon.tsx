import React from 'react';

import { IoIosShareAlt, IoIosTrendingUp } from 'react-icons/io';
import { FaBell, FaUser, FaUsers } from 'react-icons/fa';
import { MdCake, MdEvent } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { BiSolidMessage } from 'react-icons/bi';
import { HiThumbUp } from 'react-icons/hi';
import { FiAtSign } from 'react-icons/fi';

import { getRandomElement } from '@/utils/utils';

// ======================================================================

const iconMapping: { icon: React.ReactNode; color: string }[] = [
  {
    icon: <FaUser />,
    color: 'linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)',
  },
  { icon: <FaUsers />, color: 'linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)' },
  { icon: <HiThumbUp />, color: 'linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)' },
  { icon: <BiSolidMessage />, color: 'linear-gradient(0deg, rgba(86,181,76,1) 0%, #78d36e 100%)' },
  { icon: <IoIosShareAlt />, color: 'linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(108,170,240,1) 100%)' },
  { icon: <FaUser />, color: 'linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)' },
  { icon: <MdEvent />, color: '#2196f3' },
  { icon: <IoIosTrendingUp />, color: '#2196f3' },
  { icon: <FiAtSign />, color: 'linear-gradient(0deg, rgba(52,131,218,1) 0%, rgba(4,111,229,0.8) 100%)' },
  {
    icon: <AiFillMessage />,
    color: 'linear-gradient(0deg, rgba(86,181,76,1) 0%, #78d36e 100%)',
  },
  { icon: <MdCake />, color: 'linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)' },
  {
    icon: <MdCake />,
    color: 'linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)',
  },
  { icon: <FaBell />, color: 'linear-gradient(0deg, rgba(231,72,78,1) 0%, rgba(255,162,166,1) 100%)' },
];

const GenerateIcon = () => {
  const { icon, color } = getRandomElement(iconMapping);

  return (
    <span
      className={`block p-1.5 text-sm rounded-full text-gray-100`}
      style={{
        background: color,
      }}>
      {icon}
    </span>
  );
};

export default GenerateIcon;
