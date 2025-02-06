
import styles from './styles.module.scss'


interface Props{
    perPage: number;
    page:number;
    nextPage :()=> void;
    previusPage :()=>void;
    maxItems: number;
}

export const Pagination = ({perPage, page, nextPage,previusPage,maxItems}: Props) => {

  const lastPage = Math.ceil(maxItems/perPage); // buscar que hace
  return (
    <div className={styles.pagination}>
      <button disabled={page ===1} onClick={previusPage}>&lt; </button>
      <span>{page}</span>
      <button disabled={page === lastPage} onClick={nextPage}>&gt;</button>
    </div>
  )
}

export default Pagination