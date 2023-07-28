import Styles from '../page.module.css'

export default function Navbar(): JSX.Element {
    return (
        <nav className={Styles.navbar}>
            <div className={Styles.menu_user}>
                <menu>Menu</menu>
                <span>UserName</span>
            </div>
            <div className={Styles.navtitle}>
                <h1>Sales Report</h1>
            </div>
        </nav>
    )
}
