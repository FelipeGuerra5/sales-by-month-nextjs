import Styles from '../page.module.css'

type Props = {
    params: {
        category: string,
        product: string,
        brand: string
    }
}
export default function Graph({ params }: Props): JSX.Element {
    const content: JSX.Element = (
        <div className={Styles.graph_container}>
            <div>{params.category}</div>
            <div>{params.product}</div>
            <div>{params.brand}</div>
        </div>
    )


    return content
}
