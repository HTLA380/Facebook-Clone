import React from 'react';
import Image from 'next/image';

import { BsFillGrid3X3GapFill } from 'react-icons/bs';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import DisplayTooltip from '@/components/displayTooltip/DisplayTooltip';
import SearchField from '@/components/inputField/SearchField';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { menuPopoverData1, menuPopoverData2 } from '../../_data/menu-popover-data';

// ==========================================================================

const MenuPopover = () => {
  const renderPopoverContent = (
    <PopoverContent className='w-[37rem] h-[90vh] mr-8 overflow-scroll rounded_scrollbar'>
      <h3 className='text-2xl font-bold '>Menu</h3>

      <div className='flex items-start gap-4 mt-3'>
        <Card className='w-full px-2 py-3 shadow-md'>
          <div className='px-3'>
            <SearchField />
          </div>

          {menuPopoverData1.map((data) => {
            return (
              <div className='mt-3' key={data.group}>
                <h4 className='px-3 mb-1 font-semibold'>{data.group}</h4>
                {data.elements.map((item) => {
                  return (
                    <button
                      key={item.title}
                      className='flex items-center gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-accent'>
                      <Image width={20} height={20} src={item.iconUrl} alt={item.title} className='w-10' />

                      <div className='text-left'>
                        <p className='font-semibold text-sm/5'>{item.title}</p>
                        <p className='text-xs text-muted-foreground'>{item.description}</p>
                      </div>
                    </button>
                  );
                })}
                <Separator className='mt-5' />
              </div>
            );
          })}
        </Card>

        <Card className='p-3 w-80'>
          <h3 className='mb-3 text-xl font-bold'>Create</h3>
          {menuPopoverData2.map((item, idx) => {
            const isFourthItem = idx === 3;
            return (
              <React.Fragment key={`menu-popover-btn-${idx + 1}`}>
                <button className='flex items-center w-full gap-3 px-2 py-1 rounded-md cursor-pointer hover:bg-accent'>
                  <span className='flex items-center justify-center w-10 h-10 text-xl rounded-full bg-secondary'>
                    {item.icon}
                  </span>
                  <div className='text-left'>
                    <p className='font-semibold text-sm/5'>{item.title}</p>
                  </div>
                </button>
                {isFourthItem && <Separator className='my-4' />}
              </React.Fragment>
            );
          })}
        </Card>
      </div>
    </PopoverContent>
  );

  return (
    <Popover>
      <DisplayTooltip tooltipName='Menu'>
        <PopoverTrigger asChild>
          <Button variant={'accent'} className={'text-xl p-0 w-10 h-10 rounded-full'}>
            <BsFillGrid3X3GapFill />
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>

      {renderPopoverContent}
    </Popover>
  );
};

export default MenuPopover;
