import { Route } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react/cjs/react.production.min";
import Comments from '../comments/Comments';



const QuoteDetail = () =>{

    const params = useParams();

    return(

        <Fragment>
        <h1>Quote Page</h1>

        <p>{params.quoteId}</p>

        <Route path={`/quotes/${params.quoteId}/comments`}>

            <Comments/>

        </Route>


        </Fragment>

    )

}

export default QuoteDetail;