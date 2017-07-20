import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import GetCart from '../actions/action_GetCart';

class Cart extends Component{
	constructor(props) {
		super(props);
		
		this.makePayment = this.makePayment.bind(this);
	}

	makePayment(){
		var handler = window.StripeCheckout.configure({
            key: 'pk_test_u0RSzvoRcvf4Xogmq1r0voQb',
            locale: 'auto',
            token: (token) => {
            	console.log(token);
                var theData = {
                    amount: this.props.cartInfo.totalPrice * 100,
                    stripeToken: token.id,
                    userToken: this.props.loginInfo.token,
                }
                $.ajax({
                    method: 'POST',
                    url: window.hostAddress+'/stripe',
                    data: theData
                }).done((data) => {
                    console.log(data);
                    if (data.msg === 'paymentSuccess') {
                    	this.props.history.push('/thank-you');
                    }
                });
            }
        });
        handler.open({
            name: "Pay Now",
            description: 'Pay Now',
            amount: this.props.cartInfo.totalPrice * 100
        })
	}
	componentDidMount() {
		
	}
	render(){

		return(
			<div className="container cart-list">
				<div className="col-sm-12">
					<div className="col-sm-8">
					</div>
					<div className="col-sm-4">
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		loginInfo: state.userReduer,
		cartInfo: state.cartReducer
	}
}
export default connect(mapStateToProps, {getCart: GetCart})(Cart);