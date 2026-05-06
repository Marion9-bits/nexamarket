import { computed, ref } from 'vue'
import { useProductStore } from '../store/products'

export function useProducts() {
  const store = useProductStore()
  const search = ref('')
  const page = ref(1)
  const perPage = 6

  const filtered = computed(() => {
    return store.products.filter(p =>
      p.title.toLowerCase().includes(search.value.toLowerCase())
    )
  })

  const paginated = computed(() => {
    const start = (page.value - 1) * perPage
    return filtered.value.slice(start, start + perPage)
  })

  return {
    ...store,
    search,
    page,
    paginated
  }
}