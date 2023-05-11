import './styles/formHome.css'

const FormHome = ({ setopenCloseFilter }) => {

  const hanldeFilterOpen = () => {
    setopenCloseFilter("close")
  }

  return (
    <div className='search__form-home'>

      <form className='search__form'>

        <input className='search__input' type="text" placeholder='What are you looking for?' />
        <button className='search__btn'> <i className='bx bx-search-alt'></i> </button>

      </form>
    </div>

  )
}

export default FormHome