import React from 'react'

const Footer = ()=>{
	return(
		<div className="container-fluid footer">
			<div className="col-sm-12">
				<div className="col-sm-6 text-center footer-options">
					<ul>
						<li>SHIPPING & RETURNINGS</li>
						<li>TERMS & PRIVACY</li>
						<li>FAQ</li>
					</ul>
				</div>
				<div className="col-sm-6 text-center footer-socials">
					<ul>
						<li id="facebook"></li>
						<li id="twitter"></li>
						<li id="instagram"></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer;