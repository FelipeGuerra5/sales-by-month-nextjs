import Styles from '../page.module.css'
import Filter from './Filter'

type Props = {
  params: {
    options: filter[],
    hooks: hooks
  }
}

export default function Filters({ params }: Props): JSX.Element {

  const content: JSX.Element = (
    <div className={Styles.filters}>
      {
        params.options.map(filter => {
          return (
            <div className={Styles.filter} key={filter.name}>
              <label htmlFor={filter.name}>{filter.name}: </label>
              <Filter params={filter} />
            </div>
          )
        })
      }
    </div>
  )

  return content
}
