import React from 'react'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Long_Card from '../components/Long Card'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<div className='home'>
			<Nav />
			<Carousel />

			<div className="flex flex-col justify-center items-center min-h-screen py-10">
				<h1 className='text-4xl text-center font-extrabold mb-8'>Explore Our Destinations</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center min-h-screen py-10 m-5">
				<h1 className="text-4xl text-center font-extrabold mb-8">
					Discover Our Featured Destinations
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					<Long_Card />
					<Long_Card />
					<Long_Card />
					<Long_Card />
				</div>
			</div>

			<Footer />

		</div>
	)
}


