import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface LinkButtonProps {
  title: string;
  route: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ title, route, imageUrl, imageAlt, className }) => {
  return (
    <Link
      href={route}
      className={cn('flex w-full items-center gap-3 px-2 py-1.5 rounded-md cursor-pointer hover:bg-accent', className)}>
      <Image width={20} height={20} src={imageUrl} alt={imageAlt} className='w-8' />

      <p className='text-sm'>{title}</p>
    </Link>
  );
};

export default LinkButton;
