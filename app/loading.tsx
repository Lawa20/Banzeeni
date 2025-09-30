export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4 animate-spin" />
        <p className="text-gray-600 font-medium animate-pulse">
          Loading Banzeeni...
        </p>
      </div>
    </div>
  )
}
