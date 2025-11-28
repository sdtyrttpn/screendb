export default function FullscreenLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
      <div className="animate-spin rounded-full h-14 w-14 border-4 border-yellow-400 border-t-transparent"></div>
    </div>
  );
}
