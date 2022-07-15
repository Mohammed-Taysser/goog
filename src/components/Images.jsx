import React from 'react';

const Images = (props) => {
	const { images = [] } = props;

	let masonry_bricks = images.map((img, index) => {
		return (
			<div className='masonry-brick' key={index}>
				<a href={img?.link.href}>
				<img
					src={img?.image.src}
					alt={img.description}
					className='img-fluid'
				/>
				</a>
			</div>
		);
	});

	return <div className='masonry-container mt-4'> {masonry_bricks} </div>;
};

export default Images;
