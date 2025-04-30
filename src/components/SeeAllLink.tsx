'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // icon, nếu bạn đang dùng shadcn hoặc lucide-react

const SeeAllLink = ({ href = '/tin-tuc', label = 'Xem tất cả' }: { href?: string; label?: string }) => {
  return (
    <div className="flex justify-end mt-4">
      <Link
        href={href}
        className="inline-flex items-center text-blue-600 hover:underline font-medium text-sm"
      >
        {label}
        <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default SeeAllLink;
