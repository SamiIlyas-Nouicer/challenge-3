import {ReactComponent as image_1} from 'C:/Users/fujitsu/challenge-3/src/images/image-retro-pcs.jpg'

const home = () => {
    return ( 
        <div className="all">

            <div className="top">
                <div className="top-left">
                        
                    <div className="haut" >
                     

                    </div>
                    <div className="bas">
                        <div className="left">
                            <h1> The Bright Future of 
                            Web 3.0 ?</h1>
                        </div>
                        <div className="right">
                            <p> Web 3.0, also known as the Semantic Web, is the next evolution of the internet. 
                            It is a decentralized web that is built on the principles of blockchain technology and focuses on c
                            reating a more open and transparent internet. The main goal of Web 3.0 is to create a more intelligent
                             and interconnected web 
                            that is capable of understanding the context and meaning of information.
                            </p>
                            <button> Read More</button>
                            </div>
                    </div>

                </div>
                <div className="top-right">
                    <div className="box-1">
                         <h1> New</h1>
                         <h3> Hydrogen VS Electric Cars</h3>
                         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi ut excepturi laudantium neque, molestias dolorum ratione nesciunt culpa qui porro pariatur blanditiis, possimus quae, labore fuga natus doloribus molestiae! </p>
                    </div>
                    <hr  />

                    <div className="box-2"> 
                    <h3> Title 2</h3>                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi ut excepturi laudantium neque, molestias dolorum ratione nesciunt culpa qui porro pariatur blanditiis, possimus quae, labore fuga natus doloribus molestiae! </p>
                            </div>
                    <hr />

                    <div className="box-3">
                    <h3> Title 3</h3>                         <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi ut excepturi laudantium neque, molestias dolorum ratione nesciunt culpa qui porro pariatur blanditiis, possimus quae, labore fuga natus doloribus molestiae! </p>
                        </div>
                 </div>


            </div>
            <div className="bottom">
                <div className="bottom-left">
                <div className="image container-1">
                </div>
                <div className="description">
                    <h1> 01</h1>
                    <h2> Reviving Retro Pcs</h2>
                    <p> this is a short description about the pic wrote by me just to fill 
                    the space so dont bother reading</p>
                </div>
                </div>
                <div className="bottom-mid">
                <div className="image container-2"></div>
                <div className="description">
                <h1> 02</h1>
                    <h2> Reviving Retro Pcs</h2>
                    <p> this is a short description about the pic wrote by me just to fill 
                    the space so dont bother reading</p>
                </div>
                </div>
                <div className="bottom-right">
                <div className="image container-3"></div>
                <div className="description">
                <h1> 03</h1>
                    <h2> Reviving Retro Pcs</h2>
                    <p> this is a short description about the pic wrote by me just to fill 
                    the space so dont bother reading</p>
                </div>
                </div>

            </div>

        </div>

     );
}
 
export default home;