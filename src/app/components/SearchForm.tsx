'use client'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
        <h1 className='text-lg font-bold'>Publicações</h1>
        <span className='text-sm font-normal text-navy-blue-300'>6 publicações</span>
      </div>

      <input
        id='query'
        type="text"
        placeholder='Buscar conteúdo'
        {...register('query')}
        className='
        w-full
        h-12
        bg-navy-blue-900
        text-base
        font-normal
        border
        border-navy-blue-500
        rounded-md
        px-4
        py-3
        text-navy-blue-200
        placeholder:text-navy-blue-400
        placeholder:text-base
        placeholder:font-normal
        cursor-pointer
        disabled:cursor-not-allowed
        disabled:opacity-60
      '
        disabled={isSubmitting}
        autoComplete="off"
      />
    </form>
  );
}