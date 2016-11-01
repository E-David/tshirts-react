import React from 'react'
import ReactDOM from 'react-dom'


var app = function() {

	var HomePage = React.createClass({
		render: function() {
			return (
				<div className="shirts-grid">
					<ShirtContainer />
					<ShirtContainer />
					<ShirtContainer />
					<ShirtContainer />
					<ShirtContainer />
					<ShirtContainer />
				</div>
				)
		}
	})

	var ShirtContainer = React.createClass({
		render: function() {
			return (
				<div className="shirt-container">
					<FlipShirt />
					<ShirtImage />
					<ShirtNavBar />
					<ShirtDetails />
				</div>
				)
		}
	})

	var FlipShirt = React.createClass({
		render: function() {
			return (
				<div className="flip-shirt">
					<i className="fa fa-share fa-lg" aria-hidden="true"></i>
				</div>
				)
		}
	})
	
	var ShirtImage = React.createClass({
		render: function() {
			return (
				<img src="http://tympanus.net/Blueprints/ProductGridLayout/images/1_front.png"/>
				)
		}
	})

	var ShirtNavBar = React.createClass({
		render: function() {
			return (
				<div className="shirt-nav-bar">
					<SwitchView />
					<Favorite />
					<Size />
					<Color />
					<Purchase />		
				</div>
				)
		}
	})

	var SwitchView = React.createClass({
		render: function() {
			return (
				<div className="switch-view">
					<i className="fa fa-share fa-lg" aria-hidden="true"></i>
				</div>
				)
		}
	})

	var Favorite = React.createClass({
		render: function() {
			return (
				<div className="favorite">
					<i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
				</div>
				)
		}
	})

	var Purchase = React.createClass({
		render: function() {
			return (
				<div className="purchase">
					<i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
				</div>
				)
		}
	})

	var Size = React.createClass({
		render: function() {
			return (
				<div className="sizes">
					<ul className="available-sizes">
						<li>XL</li>
						<li>L</li>
						<li>M</li>
						<li>S</li>
					</ul>
					<p>XL</p>
				</div>
				)
		}
	})

	var Color = React.createClass({
		render: function() {
			return (
				<div className="colors">
					<div className="available-colors">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className="selected-color"></div>
				</div>
				)
		}
	})

	var ShirtDetails = React.createClass({
		render: function() {
			return (
				<div className="shirt-details">
					<p>Save my trees</p>
      				<strong>$29</strong>
				</div>)
		}
	})

	ReactDOM.render(<HomePage />, document.querySelector('.container'))
}

app()