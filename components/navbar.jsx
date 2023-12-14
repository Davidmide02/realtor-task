const { default: Link } = require("next/link")

const Navbar = () => {

    // const links = [{'Home''#'}, 'Apartments', 'Services', 'About us']
    const links = [{ link: 'Home', pageId: '#' }, { link: 'Apartments', pageId: '#' }, { link: 'Services', pageId: '#' }, { link: 'About us', page: '#' }]

    return (
        <nav>
            <div className="logo">
                <p className="title">
                    R.O.N
                </p>
                <p className="title">
                    Realtor Of Nigeria
                </p>
            </div>
            <div className="menu">
                <ul className="link">
                    {links.map(link => {
                        <Link href={`${pageId}`}>

                            <li><a>{link}</a></li>
                        </Link>
                    }
                    )
                    }
                </ul>
                <div className="sign-search">
                    <button>
                        Sign up
                    </button>
                    <div className="search">
                        Search Icon
                    </div>
                </div>
            </div>
        </nav>

    )
}