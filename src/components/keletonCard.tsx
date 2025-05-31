export default function SkeletonCard() {
    return (
      <div className="animate-pulse border-2 border-dashed border-blue-400 bg-blue-100 rounded p-4 mb-4">
        <div className="h-4 bg-blue-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-blue-300 rounded w-1/2"></div>
      </div>
    );
  }
  