import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
          <p className="text-sm">Địa chỉ: 123 Đường Cầu Nguyện, TP. Hà Nội</p>
          <p className="text-sm">Email: info@trangchu.vn</p>
          <p className="text-sm">Điện thoại: (84) 123 456 789</p>
        </div>
        <div className="lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:text-blue-300 transition">Trang Chủ</a></li>
            <li><a href="#" className="text-sm hover:text-blue-300 transition">Tin tức</a></li>
            <li><a href="#" className="text-sm hover:text-blue-300 transition">Lịch lễ</a></li>
            <li><a href="#" className="text-sm hover:text-blue-300 transition">Bài giảng</a></li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.061c0-5.525-4.477-10-10-10S2 6.536 2 12.061c0 4.99 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.798c0-2.516 1.493-3.906 3.778-3.906 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563v1.89h2.773l-.443 2.89h-2.33v6.988C18.343 21.189 22 17.051 22 12.061z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.043.763.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.732-.666 1.584-.666 2.494 0 1.722.875 3.243 2.204 4.132-.813-.026-1.577-.25-2.243-.615v.062c0 2.405 1.713 4.41 3.986 4.864-.417.113-.857.171-1.31.171-.32 0-.633-.031-.94-.088.634 1.982 2.475 3.427 4.654 3.467-1.704 1.335-3.852 2.132-6.185 2.132-.403 0-.8-.023-1.192-.068 2.211 1.416 4.834 2.242 7.66 2.242 9.192 0 14.215-7.614 14.215-14.215 0-.217-.005-.434-.014-.65.975-.705 1.822-1.588 2.494-2.594z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c-5.523 0-10 4.477-10 10 0 4.411 2.865 8.138 6.839 9.466.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.698-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.853.004 1.71.116 2.51.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.578.688.482C21.138 20.302 24 16.573 24 12.163c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">© 2025 Trang Chủ. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;