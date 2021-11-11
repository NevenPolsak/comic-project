import React from 'react';
import { comics } from './components/data/comics';

const Comic = () => {
	return (
		<div className="row row-cols-1 row-cols-md-3 g-4">
			{comics.map((comic) => (
				<div className="col" key={comic.id}>
					<div className="card">
						<img src={comic.img} alt="img" className="card-img-top" />
						<div className="card-body">
							<h3 className="card-title">{comic.title}</h3>
							<p className="card-text">{comic.author}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Comic;
