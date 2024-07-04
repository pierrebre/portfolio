<script lang="ts">
	import '../app.css';
	import { Download, Github, Linkedin, Mail, Phone, AlignJustify, X } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import type { PageData } from './$types';
	import ContactForm from './contact/contact-form.svelte';
	export let data: PageData;

	let isVisible = false;

	const skills = [
		{
			title: 'Linux',
			content: './linux.svg'
		},
		{
			title: 'Git',
			content: './git.svg'
		},
		{
			title: 'Node.js',
			content: './nodedotjs.svg'
		},
		{
			title: 'Typescript',
			content: './typescript.svg'
		},
		{
			title: 'PHP',
			content: './php.svg'
		},
		{
			title: 'Wordpress',
			content: './wordpress.svg'
		},
		{
			title: 'React',
			content: './react.svg'
		},
		{
			title: 'Tailwind CSS',
			content: './tailwindcss.svg'
		}
	];

	const experiences = [
		{
			title: 'Web Developer',
			description: '24/10/2021 - Present',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae.'
		},
		{
			title: 'Web Developer',
			description: '24/10/2021 - Present',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae.'
		},
		{
			title: 'Web Developer',
			description: '24/10/2021 - Present',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae.'
		}
	];
</script>

<div class="container mx-auto mt-4">
	<nav class="flex lg:flex-row flex-col justify-between align-baseline lg:items-center">
		<div class="flex flex-raw justify-between">
			<p class="text-2xl font-bold">Pierre Barbé</p>
			<Button on:click={() => (isVisible = !isVisible)} class="flex lg:hidden">
				{#if isVisible}
					<X class="h-4 w-4" />
				{:else}
					<AlignJustify class="h-4 w-4" />
				{/if}
			</Button>
		</div>
		<ul class="flex lg:flex-row flex-col my-4 {isVisible ? 'flex ' : 'hidden lg:flex'}">
			<li>
				<a
					class="mr-8 text-lg font-bold relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#0f172a] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
					href="/#skills">Skills</a
				>
			</li>
			<li>
				<a
					class="mr-8 text-lg font-bold relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#0f172a] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
					href="/#experience">Experience</a
				>
			</li>
			<li>
				<a
					class="mr-8 text-lg font-bold relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#0f172a] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
					href="/#contact">Contact Me</a
				>
			</li>
		</ul>
		<div class={isVisible ? 'flex' : 'hidden lg:flex'}>
			<Button>
				<Download class="mr-2 h-4 w-4" />
				Resume
			</Button>
		</div>
	</nav>
	<section class="mt-16">
		<div>
			<p class="text-4xl">
				Hello I'am <span class="font-bold">Pierre BARBÉ.</span><br />
				<span class="font-bold">Web</span> Developper<br />
				Based In <span class="font-bold">Montreal.</span>
			</p>
		</div>
		<div class="mt-8">
			<p class="texte text-[#8e8b8c] lg:w-2/5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur
				consectetur soluta, eum explicabo nesciunt nam in incidunt vitae. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum
				explicabo nesciunt nam in incidunt vitae.
			</p>
		</div>
		<div class="flex mt-16 items-end">
			<a
				href="/"
				class="mr-8 border-solid border-2 border-black p-3 rounded hover:bg-black hover:text-white ease-out duration-500"
			>
				<Github class="h-5 w-5" />
			</a>
			<a
				href="/"
				class="mr-8 border-solid border-2 border-black p-3 rounded hover:bg-black hover:text-white ease-out duration-500"
			>
				<Linkedin class="h-5 w-5" />
			</a>
			<Separator class="" />
		</div>
	</section>
	<section id="skills" class="mt-16 text-center">
		<h2 class="text-3xl mb-8">My <span class="font-bold">Skills</span></h2>
		<ul class="grid gap-4 lg:grid-cols-5 align-baseline justify-center items-center">
			{#each skills as skill}
				<li class="mb-8 w-[250px]">
					<Card.Root
						class="custom-shadow hover:shadow-lg hover:scale-155 ease-linear duration-300 hover:cursor-pointer"
					>
						<Card.Header>
							<Card.Title>{skill.title}</Card.Title>
						</Card.Header>
						<Card.Content class="flex justify-center items-center">
							<img src={skill.content} alt="skill" class="h-12 w-12" />
						</Card.Content>
					</Card.Root>
				</li>
			{/each}
		</ul>
	</section>
</div>
<div class="w-full bg-black text-white mt-16">
	<div class="container mx-auto px-4">
		<section id="experience" class="py-16">
			<h2 class="text-center text-3xl">My <span>Experience</span></h2>
			{#each experiences as experience}
				<Card.Root
					class="mt-8 border-zinc-600 bg-black text-white hover:bg-zinc-800 ease-linear duration-300"
				>
					<Card.Header>
						<Card.Title>{experience.title}</Card.Title>
						<Card.Description class="text-whiteC">{experience.description}</Card.Description>
					</Card.Header>
					<Card.Content>
						<p class="text-zinc-300">{experience.content}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</section>
	</div>
</div>
<div>
	<div class="container mx-auto px-4 mt-4">
		<section id="contact" class="py-16">
			<div class="flex lg:flex-row flex-col justify-between items-center">
				<ContactForm {data} class="basis-2/4 mt-8" />
				<div
					class="flex flex-col text-center items-center justify-between lg:items-start mt-16 lg:mt-0"
				>
					<h4 class="text-2xl font-bold">Let's talk for more informations</h4>
					<span class="texte mt-2"
						>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, neque!</span
					>
					<span class="flex flex-raw items-center mt-2"
						><Mail class="mr-2" />pierre.barbe@gmail.com</span
					>
					<span class="flex flex-raw items-center mt-2"
						><Phone class="mr-2" />+33 (0) 1 23 45 67 89</span
					>
					<span class="flex flex-raw mt-4">
						<a
							href="/"
							class="mr-8 border-solid border-2 border-black p-3 rounded hover:bg-black hover:text-white ease-out duration-500"
						>
							<Github class="h-5 w-5" />
						</a>
						<a
							href="/"
							class="mr-8 border-solid border-2 border-black p-3 rounded hover:bg-black hover:text-white ease-out duration-500"
						>
							<Linkedin class="h-5 w-5" />
						</a>
					</span>
				</div>
			</div>
		</section>
	</div>
</div>
<div class="bg-black text-white">
	<footer class="container mx-auto px-4 mt-4 py-6 text-right">
		<p>Made with ❤️ by Pierre Barbé</p>
	</footer>
</div>
