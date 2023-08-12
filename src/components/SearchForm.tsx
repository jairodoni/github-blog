'use client'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MdOutlineSearch } from 'react-icons/md'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {

  const { register, handleSubmit, formState: { isSubmitting }, } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchForm(query: SearchFormInput) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('handleSearchForm: ', query)
  }

  return (
    <form className='leading-[1.6]' onSubmit={handleSubmit(handleSearchForm)}>
      <div className='flex justify-between mb-3'>
        <label className='text-lg font-bold text-navy-blue-100'>Publicações</label>
        <span className='text-sm font-normal text-navy-blue-300'>6 publicações</span>
      </div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 right-0 flex items-center justify-center pr-4 hover:opacity-50 transition-opacity duration-0 hover:duration-300">
          <button className='h-5 w-8 flex items-center justify-center shadow-none' type='submit'>
            <MdOutlineSearch size={18} className="h-5 w-6  text-navy-blue-400 fill-navy-blue-400" viewBox="0 0 20 20" />
          </button>
        </span>

        <input className="
          w-full
          h-12
          bg-navy-blue-900
          text-base
          font-normal
          border
          border-navy-blue-500
          rounded-md
          py-3
          pl-4
          pr-12
          text-navy-blue-200
          placeholder:text-navy-blue-400
          placeholder:text-base
          placeholder:font-normal
          cursor-pointer
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
          placeholder='Buscar conteúdo'
          type="text"
          name="search"
          disabled={isSubmitting}
          autoComplete="off"
        />
      </label>
    </form>
  );
}