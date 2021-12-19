import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Designing</li>
                <li>Branding</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img 
                        src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/12/Habbo-Hotel.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" 
                        alt=""
                    />
                    <h3>Habbo</h3>
                </div>
                <div className="item">
                    <img 
                        src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/12/Habbo-Hotel.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" 
                        alt=""
                    />
                    <h3>Habbo</h3>
                </div>
                <div className="item">
                    <img 
                        src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/12/Habbo-Hotel.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" 
                        alt=""
                    />
                    <h3>Habbo</h3>
                </div>
                <div className="item">
                    <img 
                        src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/12/Habbo-Hotel.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" 
                        alt=""
                    />
                    <h3>Habbo</h3>
                </div>
                <div className="item">
                    <img 
                        src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/12/Habbo-Hotel.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5" 
                        alt=""
                    />
                    <h3>Habbo</h3>
                </div>
            </div>
        </div>
    )
}