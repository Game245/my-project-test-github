import React, { useState, useEffect } from 'react'
import TestOne from '../assets/images/Test one.jpg'
import TestTwo from '../assets/images/Test two.jpg'
import TestThree from '../assets/images/Test three.jpg'
import TestFour from '../assets/images/Test four.jpg'
import TestFive from '../assets/images/Test five.jpg'

export default function CarouselMyth() {
	const images = [TestOne, TestTwo, TestThree, TestFour, TestFive]
	const [currentIndex, setCurrentIndex] = useState(0)

	// เปลี่ยนภาพอัตโนมัติทุก 3 วินาที
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 3000)
		return () => clearInterval(interval)
	}, [images.length])

	// ฟังก์ชันเลื่อนภาพ
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
	}

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
	}

	return (
		<div className="relative w-full h-screen"> {/* ใช้ h-screen ให้เต็มจอ */}
			{/* Carousel wrapper */}
			<div className="relative h-full w-full overflow-hidden">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Slide ${index + 1}`}
						className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
							index === currentIndex ? "opacity-100" : "opacity-0"
						}`}
					/>
				))}
			</div>

			{/* Slider controls */}
			<button
				className="absolute cursor-pointer top-1/2 left-4 md:left-8 lg:left-12 z-30 transform -translate-y-1/2 bg-black/40 text-white p-3 md:p-4 lg:p-5 rounded-full hover:bg-black/60"
				onClick={prevSlide}
			>
				&lt;
			</button>

			<button
				className="absolute cursor-pointer top-1/2 right-4 md:right-8 lg:right-12 z-30 transform -translate-y-1/2 bg-black/40 text-white p-3 md:p-4 lg:p-5 rounded-full hover:bg-black/60"
				onClick={nextSlide}
			>
				&gt;
			</button>

			{/* Indicators */}
			<div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full ${
							index === currentIndex ? "bg-white" : "bg-gray-400"
						}`}
						onClick={() => setCurrentIndex(index)}
					></button>
				))}
			</div>
		</div>
	)
}
