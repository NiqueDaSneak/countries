import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import  { ApolloClient, gql } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';



const Countries = ( props ) => {
	
	const [countries, setCountries] = useState([])


	const cache = new InMemoryCache();
	const link = new HttpLink({
  	uri: 'https://countries.trevorblades.com',
	})

	const client = new ApolloClient({
		cache,
		link
	});

	client.query({
			query: gql`
				{
					countries {
						name
						code
						languages{
							name
							native
						}
					}
				}
			`
	}).then(result => {
		setCountries(result.data.countries)
	});

	return (
		<ul>
			{
				countries.map( country => (
					<Link to={`country/${country.code}`} >
						<li key={country.name}>{country.name}</li>
						<ul>
							{country.languages.map( lang => (
								<>
									<li key={lang.native}>{lang.native}</li>
									<ul>
										<li key={lang.name}>{lang.name}</li>
									</ul>
								</>
							))}
						</ul>
					</Link>
				))
			}
		</ul>
	)
}

export default Countries