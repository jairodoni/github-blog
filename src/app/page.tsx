import { Card } from "../components/Card";
import { Profile } from "../components/Profile";
import { SearchForm } from "../components/SearchForm";

export default function Home() {
  return (
    <div className="max-w-[1200px] w-full max-h-screen h-full">
      <div className="min-h-[13.25rem] w-full font-bold rounded text-2xl mb-[4.5rem]">
        <Profile />
      </div>

      <SearchForm />
      <div className="w-full grid grid-cols-custom gap-8 mt-12 max-sm:grid-cols-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
