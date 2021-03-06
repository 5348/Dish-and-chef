import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

  componentDidMount(){
      console.log("Dish Detail component  mount is invoked");
  }
  componentDidUpdate(){
    console.log("Dish Detail component  update is invoked");
}







    renderComments(dish) {
        if(dish != null) { 
            const dishComments = dish.comments.map((comment) => {    
                return (
                    
                    <div>
                        <li>{comment.comment}</li>
                        <li>-- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </div>
                    
                );
              });              
            return(
                <div>
                    <Card>
                        <CardTitle><h4>Comments</h4></CardTitle>
                        <CardBody>
                            <ul className = 'list-unstyled'>
                                {dishComments}
                            </ul>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else { 
            return(
                null
            )
        }
}

    render() {
        console.log("Dish Detail component  render is invoked");
        // console.log("1st check point");
        const dish = this.props.dish;
        console.log(dish);
        // console.log("this is the 2nd check point");
  
        if (dish != null)
            return(
                <div className = 'row'>
                    <div className = 'col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className = 'col-12 col-md-5 m-1'>
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            );
        else
            return(<div></div>);
    }
}

export default DishDetail;