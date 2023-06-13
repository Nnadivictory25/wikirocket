import getWikiResults from '@/utils/getWikiResults';
import React from 'react';
import Item from './components/Item';

interface Props {
	params: {
		searchTerm: string;
	};
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
	const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
	const data = await wikiData;
	const displayTerm = searchTerm.replaceAll('%20', ' ');

	if (!data?.query?.pages) {
		return {
			title: `${displayTerm} Not found`,
		};
	}

	return {
		title: displayTerm,
		description: `Search results for ${displayTerm}`,
	};
}

const SearchResults = async ({ params: { searchTerm } }: Props) => {
	const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
	const data = await wikiData;
	const results: Result[] | undefined = data.query?.pages;

	return (
		<main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen text-black'>
			{results ? (
				Object.values(results).map((result) => (
					<Item key={result.pageid} result={result} />
				))
			) : (
				<h2 className='text-xl p-2 font-semibold'>{`${searchTerm} not found`}</h2>
			)}
		</main>
	);
};

export default SearchResults;
