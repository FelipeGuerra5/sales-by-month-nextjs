import Styles from '../page.module.css'

type Props = {
    params: monthlySales[]
}
export default function Graph({ params }: Props): JSX.Element {
    const content: JSX.Element = (
        <div className={Styles.graph_container}>
            {params.map(item => {
                return (
                    <div key={item.month}>
                        <h1>{item.month}</h1>
                        <p>{item.sales}</p>
                    </div>
                )
            })}
        </div>
    )


    return content
}
