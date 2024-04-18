import css from './SearchBar.module.css';
import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query === '') {
            toast.error('Enter query for searching');
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}

/*const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const search = form.elements.searchInput.value;
    onSearch(search);

    event.target.reset();
  };

  return (
    <header className={css.header}>
       <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="searchInput"
          type="text"
          // value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form> 
    </header>
  ); */
