export default function SkeletonDetailPage() {
  return (
    <div className="animate-pulse border-2 border-dashed border-blue-400 bg-blue-50 rounded-lg p-6 mb-4">
      {/* Tiêu đề trang giả lập */}
      <div className="h-6 bg-blue-200 rounded w-1/4 mb-6"></div>

      {/* Nội dung chi tiết giả lập */}
      <div className="space-y-4">
        <div className="h-4 bg-blue-200 rounded w-full"></div>
        <div className="h-4 bg-blue-200 rounded w-full"></div>
        <div className="h-4 bg-blue-200 rounded w-full"></div>
        <div className="h-4 bg-blue-200 rounded w-full"></div>
        <div className="h-4 bg-blue-200 rounded w-full"></div>
      </div>

      {/* Khu vực nút điều hướng giả lập */}
      <div className="flex justify-end space-x-2 mt-6">
        <div className="h-6 bg-blue-200 rounded w-20"></div>
        <div className="h-6 bg-blue-200 rounded w-20"></div>
        <div className="h-6 bg-blue-200 rounded w-20"></div>
        <div className="h-6 bg-blue-200 rounded w-20"></div>
        <div className="h-6 bg-blue-200 rounded w-20"></div>
      </div>
    </div>
  );
}