import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MdOutlineSearch } from 'react-icons/md'
import { useDebounce } from '@/hooks/useDebounce'
import { usePosts } from '@/hooks/usePosts'
import { useEffect } from 'react'

const searchFormSchema = z.object({
  searchText: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { articles, searchArticles, isLoading } = usePosts()

  const { register, handleSubmit, watch } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })
  const searchText = watch('searchText')

  const debouncedSearch = useDebounce(searchText, 2000)

  useEffect(() => {
    if (debouncedSearch) handleSearchForm({ searchText: debouncedSearch })
  }, [debouncedSearch])

  async function handleSearchForm({ searchText }: SearchFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    await searchArticles(searchText)
  }

  return (
    <form className="leading-[1.6]" onSubmit={handleSubmit(handleSearchForm)}>
      <div className="mb-3 flex justify-between">
        <label className="text-lg font-bold text-navy-blue-100">
          Publicações
        </label>
        <span className="text-sm font-normal text-navy-blue-300">
          {articles.length} publicações
        </span>
      </div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 right-0 flex items-center justify-center pr-4 transition-opacity duration-0 hover:opacity-50 hover:duration-300">
          <button
            className="flex h-5 w-8 items-center justify-center shadow-none"
            type="submit"
          >
            <MdOutlineSearch
              size={18}
              className="h-5 w-6  fill-navy-blue-400 text-navy-blue-400"
              viewBox="0 0 20 20"
            />
          </button>
        </span>

        <input
          className="h-12 w-full cursor-pointer rounded-md border border-navy-blue-500
          bg-navy-blue-900 py-3 pl-4 pr-12 text-base font-normal text-navy-blue-200
          placeholder:text-base placeholder:font-normal placeholder:text-navy-blue-400
          disabled:cursor-not-allowed disabled:opacity-60"
          placeholder="Buscar conteúdo"
          id="searchText"
          type="text"
          disabled={isLoading}
          autoComplete="off"
          {...register('searchText')}
        />
      </label>
    </form>
  )
}
