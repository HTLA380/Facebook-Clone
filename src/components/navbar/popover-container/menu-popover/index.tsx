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
import { faker } from '@faker-js/faker';

// ==========================================================================

const MenuPopover = () => {
  const renderPopoverContent = (
    <PopoverContent className='p-0 w-full max-w-592px h-90vh mr-8 overflow-scroll rounded_scrollbar'>
      <h3 className='text-2xl px-4 pt-4 pb-2 z-10 font-bold sticky top-0 left-0 bg-popover'>Menu</h3>

      <div className='p-4 flex items-start gap-4 mt-3'>
        <Card className='w-full px-2 py-3 shadow-md'>
          <div className='px-3'>
            <SearchField />
          </div>

          {menuPopoverData1.map((data) => {
            return (
              <div className='mt-3' key={faker.string.uuid()}>
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

        <Card className='p-3 w-80 sticky top-14 right-0'>
          <h3 className='mb-3 text-xl font-bold'>Create</h3>
          {menuPopoverData2.map((item, idx) => {
            const isFourthItem = idx === 3;
            return (
              <React.Fragment key={faker.string.uuid()}>
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
