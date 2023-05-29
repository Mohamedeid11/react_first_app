import {Component} from "react";
import "../style/style.css"
import Products from "../ProductData.js";
import CounterClass from './CounterClass';


class DataComponent extends Component {

    render (){

        return(
            <div>
            


        <main className="main-area">
                
            <div className="centered">

                <section className="cards">
                  {

                   
                Products.map((product) => (
                    
                    <article className="card"  key={product.id}>
                    
                        <picture className="thumbnail">
                            <img src={product.img} alt="A banana that looks like a bird"/>
                        </picture>
                        <div className="card-content">

                            <h2>{product.name}</h2>
                            <p>Category : {product.category}.</p>
                        </div>
                        <div className="card-content">
                            <p>Price : {product.price}.</p>
                        </div>
                        <div className="card-content">
                        <   CounterClass></CounterClass> 
                        </div>

                </article>
                    
                ))
            }

            </section>
            
            </div>

        </main>


        </div>
        )
    }
}
    
export default DataComponent;


