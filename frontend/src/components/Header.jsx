import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="col-1">
                <div className="logo"><img src="https://logo.com/image-cdn/images/kts928pd/production/12b36258e55d839ccc258ad2266338fb9545643e-334x326.png?w=1080&q=72" alt="" /></div>
                <nav>
                    <li>Home</li>
                    <li>Topics</li>
                    <li>Newsletter</li>
                    <li>Startup Jobs</li>

                </nav>
            </div>
            <div className="col-2">
                <input type="search" placeholder='Search Startups...' />

                <li>Join</li>
                <li>Login</li>
                <button>Submit Startup</button>

            </div>

        </header>
    )
}

export default Header