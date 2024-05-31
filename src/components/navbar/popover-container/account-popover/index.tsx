import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import DisplayTooltip from '@/components/displayTooltip/DisplayTooltip';
import LinkButton from '@/components/buttons/LinkButton';

import { accountPopoverData } from '../../_data/account-popover-data';

// ======================================================================

interface AccountPopoverProps {
  name?: string | null;
  image?: string | null;
}

const AccountPopover: React.FC<AccountPopoverProps> = ({ name, image }) => {
  const renderPopoverContent = (
    <PopoverContent className='w-360px mr-6 px-4'>
      <Card className='flex flex-col items-center w-full gap-1 p-1 mb-2 shadow-md'>
        <LinkButton destination={'/me'} className='w-full px-2 py-2 rounded-md'>
          <Avatar>
            <AvatarImage src={image || 'https://placehold.co/25x25'} />
            <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className='font-semibold text-accent-foreground'>{name}</p>
        </LinkButton>

        <Separator />
        <Button
          variant='ghost'
          className='justify-start w-full text-sm font-semibold text-primary hover:text-primary'
          size='sm'>
          See all profiles
        </Button>
      </Card>

      {accountPopoverData.map((data) => {
        return (
          <Button key={data.id} variant='ghost' className='w-full gap-2 py-6'>
            <span className='p-1.5 text-2xl rounded-full bg-accent'>{data.icon}</span>
            <p className='flex-grow font-semibold capitalize text-start'>{data.text}</p>
            {data.endIcon && <span className='p-1.5 text-2xl rounded-full'>{data.endIcon}</span>}
          </Button>
        );
      })}
    </PopoverContent>
  );

  return (
    <Popover>
      <DisplayTooltip tooltipName='Account'>
        <PopoverTrigger asChild>
          <Button size='icon' variant='ghost' className='p-0 rounded-full'>
            <Avatar>
              <AvatarImage src={image || 'https://placehold.co/25x25'} />
              <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
      </DisplayTooltip>
      {renderPopoverContent}
    </Popover>
  );
};

export default AccountPopover;
