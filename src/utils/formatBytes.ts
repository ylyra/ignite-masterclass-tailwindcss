export function formatBytes(bytes: number) {
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 B'

  let value = bytes
  let unitIndex = 0

  while (value >= 1024 && unitIndex < sizes.length - 1) {
    value /= 1024
    unitIndex++
  }

  return `${value.toFixed(1)} ${sizes[unitIndex]}`
}
