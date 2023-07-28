import Styles from '../page.module.css'

type Props = {
    params: monthlySum[]
}
export default function Graph({ params }: Props): JSX.Element {
    const content: JSX.Element = (
        <div className={Styles.graph_container}>
            {params.map(item => {
                return (
                    <div>
                        <h1>{item.month}</h1>
                        <p>{item.sells}</p>
                    </div>
                )
            })}
        </div>
    )


    return content
}
