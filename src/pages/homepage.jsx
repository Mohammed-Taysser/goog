import React, { useEffect, useState } from 'react';
import { CgImage } from 'react-icons/cg';
import { BsCameraVideo } from 'react-icons/bs';
import { GiNewspaper } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';
import Results from '../components/Results';
import { googleSearch } from '../apps/apiClient';
import { Puff } from 'react-loader-spinner';
import Images from '../components/Images';
import News from '../components/News';
import Videos from '../components/Videos';
import { useDebounce } from 'use-debounce';

function Homepage() {
	const [results, setResults] = useState([]);
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [loadingError, setLoadingError] = useState(null);
	const [searchType, setSearchType] = useState('search');
	const [searchQuery, setSearchQuery] = useState('JS');
	const [news, setNews] = useState([]);
	const [query] = useDebounce(searchQuery, 1000);

	useEffect(() => {
		getApiResult();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query, searchType]);

	const getApiResult = () => {
		setIsLoading(true);
		googleSearch(searchQuery, searchType)
			.then((response) => response.json())
			.then((json) => {
				switch (searchType) {
					case 'image':
						setImages(json.image_results);
						break;
					case 'news':
						setNews(json.entries);
						break;
					case 'video':
					default:
						setResults(json.results);
						break;
				}
			})
			.catch((error) => setLoadingError(error))
			.finally(() => {
				setIsLoading(false);
			});
	};

	const RenderResult = () => {
		if (isLoading) {
			return (
				<div className='is-flex is-justify-content-center'>
					<Puff color='#00d1b2' />
				</div>
			);
		} else if (loadingError) {
			return (
				<div className='message is-warning'>
					<div className='message-body'>
						{JSON.stringify(loadingError, null, 2)}
					</div>
				</div>
			);
		} else if (results.length > 0) {
			switch (searchType) {
				case 'image':
					return <Images images={images} />;
				case 'news':
					return <News results={news} />;
				case 'video':
					return <Videos results={results} />;
				default:
					return <Results results={results} />;
			}
		} else {
			return (
				<article className='message is-warning'>
					<div className='message-body'>no result found</div>
				</article>
			);
		}
	};

	const onSearchTypeClick = (evt, type) => {
		evt.preventDefault();
		setSearchType(type);
	};

	const onFormSubmit = evt=>{
		evt.preventDefault()
		getApiResult()
	}

	return (
		<div className='container my-6'>
			<form className='field is-grouped' onSubmit={onFormSubmit}>
				<p className='control is-expanded'>
					<input
						className='input is-primary is-rounded'
						type='text'
						placeholder='search for anything!!'
						value={searchQuery}
						onChange={(evt) => setSearchQuery(evt.target.value)}
					/>
				</p>
				<p className='control'>
					<button className='button is-primary' type='submit'>
						<BiSearchAlt className='is-size-4' />
					</button>
				</p>
			</form>

			<div className='tabs is-toggle is-toggle-rounded'>
				<ul>
					<li className={`${searchType === 'search' && 'is-active'}`}>
						<a
							href='#search'
							onClick={(evt) => onSearchTypeClick(evt, 'search')}
						>
							<span className='icon is-small'>
								<CgImage />
							</span>
							<span>All</span>
						</a>
					</li>
					<li className={`${searchType === 'image' && 'is-active'}`}>
						<a href='#image' onClick={(evt) => onSearchTypeClick(evt, 'image')}>
							<span className='icon is-small'>
								<CgImage />
							</span>
							<span>Pictures</span>
						</a>
					</li>
					<li className={`${searchType === 'video' && 'is-active'}`}>
						<a href='#video' onClick={(evt) => onSearchTypeClick(evt, 'video')}>
							<span className='icon is-small'>
								<BsCameraVideo />
							</span>
							<span>Videos</span>
						</a>
					</li>
					<li className={`${searchType === 'news' && 'is-active'}`}>
						<a href='#news' onClick={(evt) => onSearchTypeClick(evt, 'news')}>
							<span className='icon is-small'>
								<GiNewspaper />
							</span>
							<span>News</span>
						</a>
					</li>
				</ul>
			</div>
			<RenderResult />
		</div>
	);
}

export default Homepage;
