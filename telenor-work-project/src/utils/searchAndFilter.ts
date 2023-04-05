import getLocaleIndexOf from 'locale-index-of'
import type { StoreItem } from '@/types'
import type { Ref } from 'vue'

export const searchAndFilter = () => {
  const performSearch = (items: Ref<Array<StoreItem>>, search?: string) => {
    if (!search) return items.value

    const collator = new Intl.Collator('nb-no', {
      usage: 'search',
      sensitivity: 'base'
    })
    const localeIndexOf = getLocaleIndexOf(Intl)
    return items.value.filter(
      (it) =>
        localeIndexOf(it.title, search, collator) !== -1 ||
        localeIndexOf(it.description, search, collator) !== -1
    )
  }

  return {
    performSearch
  }
}
