import React from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';

interface ExpendButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}

const ExpendButton: React.FC<ExpendButtonProps> = ({ onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className='flex w-full items-center gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-accent'>
      <span className='p-1.5 bg-accent text-accent-foreground rounded-full'>
        {isActive ? <LuChevronUp size={20} /> : <LuChevronDown size={20} />}
      </span>

      <p className='text-sm/5'>{isActive ? 'See less' : 'See more'}</p>
    </button>
  );
};

export default ExpendButton;
