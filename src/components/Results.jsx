import React from 'react';
import ReactPlayer from 'react-player';

function Results(props) {
	const { results = [], withVideo } = props;

	const RenderResults = () => {
		return results.map((result, index) => (
			<div className='' key={index}>
				<div className='message is-primary my-3'>
					<div className='message-body py-2'>
						<div className='is-flex'>
							{withVideo && (
								<div className=''>
									<ReactPlayer
										url={result.link}
										width='200px'
										height='150px'
										controls
										title={result.title}
									/>
								</div>
							)}
							<div className={`${withVideo &&'px-4'}`}>
								<a
									href={result.link}
									target='_blank'
									rel='noreferrer'
									className='is-size-7'
								>
									{result.link}
								</a>
								<br />
								<a
									href={result.link}
									target='_blank'
									rel='noreferrer'
									className='is-size-5'
								>
									{result.title}
								</a>
								<br />
								<p className='is-size-6'>{result?.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		));
	};

	return (
		<div className=''>
			<RenderResults />
		</div>
	);
}

export default Results;
