import searchBarCss from './SearchBar.module.css'
export default function SearchBar({ onSubmit }) {
    const handlerSubmit = (evt) => {
        evt.preventDefault();
        const query = evt.target;
        if (query.elements.topic.value.trim() === "") {
            return
        }
        onSubmit(query.elements.topic.value.trim());
        query.reset();
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