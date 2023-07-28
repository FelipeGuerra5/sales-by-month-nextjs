import Styles from '../page.module.css'

type Props = {
  params: options
}

export default function Filter({ params }: Props): JSX.Element {
  const filter = (
    <>
      <select className={Styles.select} name={params.name} id={params.name}>
        {
          params.items.map(item => {
            return (
              <option value={item} key={item}>{item}</option>
            )
          })
        }
      </select>
    </>
  )

  return filter

}
