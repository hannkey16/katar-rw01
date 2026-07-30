import { useState, useEffect } from 'react'

export function useAdminData<T>(key: string, initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load data dari localStorage saat mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`admin_${key}`)
      if (saved) {
        setData(JSON.parse(saved))
      }
    } catch (error) {
      console.error(`[v0] Error loading ${key} data:`, error)
    }
    setIsHydrated(true)
  }, [key])

  // Save data ke localStorage setiap kali berubah
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(`admin_${key}`, JSON.stringify(data))
      } catch (error) {
        console.error(`[v0] Error saving ${key} data:`, error)
      }
    }
  }, [data, key, isHydrated])

  // Add item
  const addItem = (item: T) => {
    setData((prev) => [...prev, item])
  }

  // Update item by ID
  const updateItem = (id: string, updates: Partial<T>) => {
    setData((prev) =>
      prev.map((item) => {
        if ((item as any).slug === id || (item as any).id === id) {
          return { ...item, ...updates }
        }
        return item
      })
    )
  }

  // Delete item by ID
  const deleteItem = (id: string) => {
    setData((prev) =>
      prev.filter((item) => (item as any).slug !== id && (item as any).id !== id)
    )
  }

  return { data, isHydrated, addItem, updateItem, deleteItem }
}
