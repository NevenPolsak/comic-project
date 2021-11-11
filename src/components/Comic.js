import React from 'react';
import { comics } from './data/comics';

const Comic = () => {
	return (
		<div className="container">
			<div className="row">
				{comics.map((comic) => (
					<div className="card" key={comic.id}>
						<div>
							<img src={comic.img} alt="img" />
						</div>
						<div className="card-body">
							<h3 className="card-title">{comic.title}</h3>
							<p className="card-text">{comic.author}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Comic;
