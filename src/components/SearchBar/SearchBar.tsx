import { FormEvent } from 'react';
import searchBarCss from './SearchBar.module.css'

type SearchBarProps = {
  onSubmit: (query: string) => void
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handlerSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.namedItem('topic') as HTMLInputElement | null;
    if (!input || input.value.trim() === "") {
      return
    }
    onSubmit(input.value.trim());
    form.reset();
    return
  }
  return (
    <header>
      <form onSubmit={handlerSubmit} className={searchBarCss.form}>
        <input
          type="text"
          placeholder="Search images and photos"
          name="topic"
          className={searchBarCss.input}
        />
        <button type="submit" className={searchBarCss.button}>Search</button>
      </form>
    </header>
  )
}