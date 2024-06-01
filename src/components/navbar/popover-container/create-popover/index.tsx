import React from 'react';
import { FaPlus } from 'react-icons/fa6';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import DisplayTooltip from '@/components/displayTooltip/DisplayTooltip';

import { menuPopoverData2 } from '../../_data/menu-popover-data';

// ==========================================================================

const CreatePopover = () => {
  const renderPopoverContent = (
    <PopoverContent className='w-full max-w-360px p-1.5 mr-8 overflow-scroll rounded_scrollbar'>
      <h3 className='text-2xl font-bold px-2 mb-2'>Create</h3>
      {menuPopoverData2.map((item, idx) => {
        const isFourthItem = idx === 3;
        return (
          <React.Fragment key={`menu-popover-btn-${idx + 1}`}>
            <Button
              variant='ghost'
              className='flex items-center justify-start w-full gap-2 px-2 overflow-hidden h-fit py-1'>
              <span className='flex items-center justify-center w-10 h-10 text-xl rounded-full bg-secondary'>
                {item.icon}
              </span>
              <div className='text-left'>
                <h5 className='text-sm/5'>{item.title}</h5>
                <p className='text-xs font-normal text-muted-foreground'>{item.description}</p>
              </div>
            </Button>
            {isFourthItem && <Separator className='my-2' />}
          </React.Fragment>
        );
      })}
    </PopoverContent>
  );

  return (
    <Popover>
      <DisplayTooltip tooltipName='Menu'>
        <PopoverTrigger asChild>
          <Button variant={'accent'} className={'text-xl p-0 w-10 h-10 rounded-full'}>
            <FaPlus />
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>

      {renderPopoverContent}
    </Popover>
  );
};

export default CreatePopover;
