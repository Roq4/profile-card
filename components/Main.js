import React from "react"

export default function Main() {
    return (
        <div className="main-container" >
            <div  className="handle" >
                <h3>Roq4</h3>
                <p>Frontend Developer</p>
                <div className="social" >
                    <button> roq4.substack </button>
                    <button >roq4.hashnode</button>
                </div>

            </div>
            
            <div className="information" >
                <h4>About</h4>
                <p>Trying to be a self-taugh Fullstack Web3 Developer while creating his own content! On the way of Scrimba Frontend Career Path!</p>
                <h4>Interests</h4>
                <ul>
                    <li>HTML, CSS, JS</li>
                    <li>Tailwind</li>
                    <li>React.js, Next.js</li>
                    <li>Ethers.js, Web3.js, Wagmi.js</li>      
                </ul>
            </div>

        </div>
    )
}