import React from 'react';

function Footer() {
	const GetCurrentYear = () => {
		const currentYear = new Date().getFullYear();
		return <>{currentYear}</>;
	};
	return (
		<div className='has-background-light has-text-centered py-3'>
			<p>
				2022-
				<GetCurrentYear /> <span className='has-text-primary'>GOOG.inc</span>
			</p>
		</div>
	);
}

export default Footer;
