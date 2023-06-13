'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setSearch('');
		router.push(`/${search}/`);
	};

	return (
		<form
			className='w-50 flex justify-center md:justify-between'
			onSubmit={handleSubmit}>
			<input
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='bg-white p-3 w-80 text-xl rounded-xl text-black'
				placeholder='Search'
			/>

			<button type='submit' className='p-3 text-xl rounded-xl bg-slate-300 ml-2 font-bold hover:bg-slate-100'>
				🚀
			</button>
		</form>
	);
};

export default Search;
