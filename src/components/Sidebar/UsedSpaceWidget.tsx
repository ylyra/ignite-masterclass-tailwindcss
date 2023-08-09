export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm font-medium text-violet-700">Used space</span>
        <small className="block text-sm text-violet-500">
          Your team has used 80% of your available space. Need more?
        </small>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div
          className="h-full rounded-full bg-violet-600"
          style={{ width: '80%' }}
        />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-500 transition-colors duration-200 hover:text-violet-600"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-violet-700 transition-colors duration-200 hover:text-violet-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
