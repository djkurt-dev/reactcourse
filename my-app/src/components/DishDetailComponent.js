import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



const RenderDish = ({ dish }) => {
    console.log('DishDetail Component render is invoked.')

    if (dish != null) {
        return (
            <div>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

const RenderComments = ({ comments }) => {

    if (comments != null) {
        const coms = comments.map((com) => {
            return (
                <li key={com.id}>
                    <p>{com.comment}</p>
                    <p>-- {com.author}, {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" }).format(new Date(com.date))}</p>
                </li>
            );
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {coms}
                </ul>
            </div>
        );
    }
    else {
        return (<div></div>);
    }

}

const DishDetail = (props) => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>

    );
}

export default DishDetail;