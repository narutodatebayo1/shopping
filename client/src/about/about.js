import "./about.css"
import Nav from "../nav/nav"

export default function About(){
    return (
        <div>
            <Nav />
            <div className="outerAboutDiv">
                <div className="innerAboutDiv">
                    <div>
                        <p>&emsp;Ut et ante rutrum, placerat nisl eget, pharetra erat. Mauris nec mauris interdum, tristique eros vel, feugiat urna. Proin faucibus elit iaculis ante interdum rhoncus. Quisque rhoncus quam et magna maximus, ut molestie diam molestie. Sed tempus justo sit amet leo commodo tempus. Etiam aliquam luctus leo, nec dapibus elit mollis vel. Fusce facilisis porta lacus, at maximus ex auctor ut.</p>

                        <p>&emsp;Phasellus orci eros, lobortis et gravida et, luctus in justo. Suspendisse ut mauris non neque malesuada pulvinar at gravida sapien. Aenean in lorem in ex eleifend pharetra eget quis purus. Donec dictum enim et tempus facilisis. Etiam lobortis rutrum nisl, eu dictum dolor efficitur tincidunt. Pellentesque sit amet fringilla enim. Aenean et sem feugiat, facilisis massa et, rhoncus tellus. Curabitur nec dolor eleifend, commodo magna id, egestas ipsum.</p>
                    </div>
                    <br />
                    <br />
                    <div className="div1">
                        <div className="imageDiv1">
                            <img src="https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/01/15/1797868130.jpg" alt="" />
                        </div>
                        <div className="textDiv1">
                            &emsp;Lorem ipsum dolor sit amet, dolor ante consectetur adipiscing elit. Mauris lorem tellus, vehicula eget malesuada et, dolor dapibus et ligula. Duis sit amet tempor quam. Donec ullamcorper tristique varius. Praesent sit amet urna quis ante lacinia tincidunt.
                        </div>
                    </div>
                    <div className="socialMediaDiv">
                        <p>Go to our social media</p>
                        <div className="logoDiv">
                            <div><a href="https://twitter.com" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="halo"/></a></div>
                            <div><a href="https://facebook.com" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="halo"/></a></div>
                            <div><a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="halo"/></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}