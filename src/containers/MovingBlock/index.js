import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next'

import gsap, { Bounce, Elastic } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import sitePicture from './block.svg'

import imgBackground1 from './block.png'
import imgBackground2 from './block.png'
import turan from '@/assets/images/apps/turan.png'
import './index.scss'
import Image from 'next/image';


export const MovingBlock = () => {
	return (
		<div className="blocks relative flex flex-col justify-center items-center w-full">
			<div className="block absolute flex justify-center items-center bg-black w-full py-9 rounded-full min-w-[20rem] opacity-0 text-white">
				<div className="block-body text-white text-h4 lg:text-h4-d">
					Localization
				</div>
			</div>
			<div className="block absolute flex justify-center items-center bg-black w-full py-9 rounded-full min-w-[20rem] opacity-0 text-white">
				<div className="block-body text-white text-h4 lg:text-h4-d">
					Live Previews
				</div>
			</div>
			<div className="block absolute flex justify-center items-center bg-black w-full py-9 rounded-full min-w-[20rem] opacity-0 text-white">
				<div className="block-body text-white text-h4 lg:text-h4-d">
					Mobile Development
				</div>
			</div>
			<div className="block absolute flex justify-center items-center bg-black w-full py-9 rounded-full min-w-[20rem] opacity-0 text-white">
				<div className="block-body text-white text-h4 lg:text-h4-d">
					Regression Testing
				</div>
			</div>
			<div className="block absolute flex justify-center items-center bg-black w-full py-9 rounded-full min-w-[20rem] opacity-0 text-white">
				<div className="block-body text-white text-h4 lg:text-h4-d">
					Continuous Integration
				</div>
			</div>
			<div className="block absolute flex justify-center items-center bg-black w-full py-9 rounded-full min-w-[20rem] opacity-0 text-white">
				<div className="block-body text-white text-h4 lg:text-h4-d">
					UI Design
				</div>
			</div>
		</div>
	)
}



export const MovingBlockGsap = () => {
	const { t } = useTranslation()

	const imageRef = useRef(null);
	const tempRef = useRef(null);


	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(Elastic);

		const image = imageRef.current;
		const temp = tempRef.current;

		// let coorX = tempRef.current.offsetLeft;
		// let coorY = tempRef.current.offsetTop;

		// console.log(coorX);
		// console.log(coorY);

		// gsap.set(image, { x: '0%', y: '0%' });
		if (window.innerWidth >= 768) {
			gsap.to(image, {
				skewX: '6'
			});
			gsap.to(image, {
				duration: 5,
				x: -(window.innerWidth - imageRef.current.offsetLeft) / 2 + 100,
				y: (window.innerHeight + imageRef.current.offsetTop) / 2,
				skewX: '6',
				scrollTrigger: {
					trigger: image,
					start: 'top top',
					end: 'bottom bottom',
					scrub: 0.5,
					onUpdate: (self) => {
						const progress = self.progress;
						const amplitude = 1;
						const offsetY = Math.sin(progress * Math.PI) * amplitude;
						gsap.set(image, { y: 500 + offsetY });
					},
				},
			});
		} else {
			gsap.to(image, {
				skewX: '0'
			});
		}


		return () => {
			ScrollTrigger.getById(image).kill();
		};

		// not used for now
		// function handleScroll() {
		//     const windowScrollY = window.scrollY / 10;
		//     // const windowHeight = window.innerHeight;
		//     const windowHeight = 1200;
		//     const windowWidth = window.innerWidth;

		//     let scrollPercentage = (windowScrollY / windowHeight) * 2;

		//     // console.log(windowScrollY);
		//     // console.log(windowHeight);
		//     // console.log(scrollPercentage);

		//     let x = imageRef.current.offsetLeft;
		//     let y = imageRef.current.offsetTop;
		//     console.log(x);
		//     console.log(y);
		//     gsap.to(image, { x: `${scrollPercentage}`, y: `${scrollY}px`, duration: 100 });
		//     gsap.to(image, { x: -600*scrollPercentage, y: 470*scrollPercentage, duration: 0.3 });
		//     gsap.fromTo(image, {x: x, y: y}, {x: -scrollPercentage*10, y: scrollPercentage*10, duration: 0.3});

		// }

		// window.addEventListener('scroll', handleScroll);

		// return () => {
		//   window.removeEventListener('scroll', handleScroll);
		// };

	}, []);

	return (
		<div className='relative bg-white pt-10 pb-12  overflow-hidden'>
			<div className='relative'>
				<div className='  lg:px-8 lg:py-10 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
					<div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
						<div>
							<a
								className='text-xl lg:text-2xl inline-flex  px-0 py-0 border tracking-tight border-transparent  rounded-md text-gray-900  hover:bg-gray-50'
							>
								{t('main.recents.factchek.title')}
								<span>
									<svg
										className='-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400'
										data-todo-x-description='Heroicon name: solid/external-link'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
										<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
									</svg>
								</span>
							</a>
							<p className='mt-2 text-xl max-w-prose mx-aut text-gray-800'>
								{t('main.recents.factchek.description')}
							</p>
						</div>
					</div>
					<div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
						<div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
							<Image
								className='rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 transform -skew-x-6 responsive-img'
								src={imgBackground1}
								alt='factchek.kz новостной портал алматы'
								ref={imageRef}
							/>
						</div>
					</div>
					{/* <div className='mt-1 sm:mt-16 lg:mt-0'>
						<div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
							<img
								className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 transform -skew-x-6 max-w-full'
								src={imgBackground}
								alt='factchek.kz новостной портал алматы'
								ref={imageRef}
							/>
						</div>
					</div> */}
				</div>
			</div>
			<div className='relative'>
				<div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
					<div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
						<div>
							<a
								className='mt-5 text-xl lg:text-2xl inline-flex  px-0 py-0 border tracking-tight border-transparent  rounded-md text-gray-900  hover:bg-gray-50'
							>
								{t('main.recents.turan.title')}

								<span>
									<svg
										className='-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400'
										data-todo-x-description='Heroicon name: solid/external-link'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
										<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
									</svg>
								</span>
							</a>
							<p className='mt-2 text-xl max-w-prose mx-aut text-gray-800'>
								{t('main.recents.turan.description')}
							</p>
						</div>
					</div>
					<div className='mt-7 sm:mt-16 lg:mt-0 lg:col-start-1'>
						<div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
							{/* <img
              className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto'
              src={turan}
              alt='xponend мобильді қосымша алматы цена, низкая стоимость разработки'
              ref={tempRef}
            /> */}
						</div>
					</div>
				</div>
			</div>
			<div className='relative'>
				<div className='  lg:px-8 lg:py-10 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
					<div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
						<div>
							<a
								className='text-xl lg:text-2xl inline-flex  px-0 py-0 border tracking-tight border-transparent  rounded-md text-gray-900  hover:bg-gray-50'
							>
								{t('main.recents.factchek.title')}
								<span>
									<svg
										className='-mr-0 mt-0 ml-2 h-7 w-7 text-gray-400'
										data-todo-x-description='Heroicon name: solid/external-link'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'
									>
										<path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
										<path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
									</svg>
								</span>
							</a>
							<p className='mt-2 text-xl max-w-prose mx-aut text-gray-800'>
								{t('main.recents.factchek.description')}
							</p>
						</div>
					</div>
					<div className='mt-1 sm:mt-16 lg:mt-0'>
						<div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
							<Image
								className='rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 transform responsive-img'
								src={imgBackground2}
								alt='factchek.kz новостной портал алматы'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

