<script lang="ts">
	import '../app.css';

	import { t } from '$lib/translation';

	import { Download, Github, Linkedin, Mail, Phone, AlignJustify, X } from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';

	import type { PageData } from './$types';
	import ContactForm from './contact/contact-form.svelte';
	export let data: PageData;

	import skills from '$lib/assets/data/skills.json';
	import experiences from '$lib/assets/data/experiences.json';
	import degrees from '$lib/assets/data/degrees.json';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let isVisible = false;

	let formData;
	let success = false;

	onMount(() => {
		const unsubscribe = page.subscribe(($page) => {
			formData = $page.data.form;
			success = $page.form?.success || false;
		});
		return () => unsubscribe();
	});
</script>

<svelte:head>
	<title>{$t('home.pageTitle')}</title>
	<meta name="description" content={$t('home.metaDescription')} />
</svelte:head>

<div class="container mx-auto mt-4">
	<nav class="flex lg:flex-row flex-col justify-between lg:items-center items-start">
		<div class="flex justify-between w-full lg:w-auto">
			<p class="text-2xl font-bold">Pierre Barbé</p>
			<Button on:click={() => (isVisible = !isVisible)} class="lg:hidden">
				{#if isVisible}
					<X class="h-4 w-4" />
				{:else}
					<AlignJustify class="h-4 w-4" />
				{/if}
			</Button>
		</div>
		<ul class="flex lg:flex-row flex-col my-4 lg:my-0 {isVisible ? 'flex' : 'hidden lg:flex'}">
			{#each [$t('home.titleSection1'), $t('home.titleSection2'), 'Contact'] as item}
				<li>
					<a class="mr-8 text-lg font-bold relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#0f172a] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left" href={`/#${item.toLowerCase().replace(' ', '-')}`}>
						{item}
					</a>
				</li>
			{/each}
		</ul>
		<div class={isVisible ? 'flex' : 'hidden lg:flex'}>
			<Button>
				<Download class="mr-2 h-4 w-4" />
				Resume
			</Button>
		</div>
	</nav>

	<section class="mt-8 lg:mt-16">
		<div>
			<p class="lg:text-4xl text-3xl">
				{$t('home.introduction.hello')}<br class="lg:hidden" />
				<span class="font-bold text-[#0f172a]"> Pierre BARBÉ. </span>
				<br />
				<span class="font-bold text-[#0f172a]">{$t('home.introduction.role')}</span>
				{$t('home.introduction.role2')}
				<br />
				{$t('home.introduction.location1')}
				<span class="text-[#0f172a] mx-1 font-extrabold lg:text-4xl relative inline-block stroke-current">
					{$t('home.introduction.location2')}
					<svg class="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
						<path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
					</svg>
				</span>
			</p>
		</div>
		<div class="mt-12 lg:w-[45%]">
			<p class=" text-[#8e8b8c] text-justify whitespace-pre-line break-words">{$t('home.presentation')}<br class="lg:hidden" /><br class="lg:hidden" />{$t('home.presentation2')}</p>
		</div>
		<div class="flex mt-16 items-end">
			{#each [{ icon: 'github', link: '/' }, { icon: 'linkedin', link: '/' }] as social}
				<a href={social.link} aria-label="Follow me on {social.icon}" class="mr-8 border-solid border-2 border-black p-3 rounded hover:bg-black hover:text-white ease-out duration-500">
					{#if social.icon === 'github'}
						<Github class="h-5 w-5" />
					{:else if social.icon === 'linkedin'}
						<Linkedin class="h-5 w-5" />
					{/if}
				</a>
			{/each}
			<Separator />
		</div>
	</section>

	<section id="skills" class="mt-16 text-center">
		<h2 class="text-3xl mb-8">
			<span class="font-bold">
				{$t('home.titleSection1')}
			</span>
		</h2>
		<ul class="grid gap-4 lg:grid-cols-5 justify-center items-center">
			{#each skills as skill}
				<li class="mb-8 w-[250px]">
					<Card.Root class="custom-shadow hover:shadow-lg hover:scale-155 ease-linear duration-300 cursor-pointer">
						<Card.Header>
							<Card.Title>{skill.title}</Card.Title>
						</Card.Header>
						<Card.Content class="flex justify-center items-center">
							<img src={skill.content} alt="Logo of {skill.title}" class="h-12 w-12" />
						</Card.Content>
					</Card.Root>
				</li>
			{/each}
		</ul>
	</section>
</div>

<div class="w-full bg-black text-white mt-16">
	<div class="container mx-auto px-4">
		<section id="experiences" class="py-16">
			<h2 class="text-center text-3xl">
				<span>{$t('home.titleSection2')}</span>
			</h2>
			<Tabs.Root value="experiences" class="flex flex-col items-center">
				<Tabs.List class="mt-8">
					<Tabs.Trigger value="experiences">Experiences</Tabs.Trigger>
					<Tabs.Trigger value="degrees" class="text-black">Degrees</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="degrees" class="w-full">
					{#each degrees as degree}
						<Card.Root class="mt-8 border-zinc-600 bg-black text-white hover:bg-zinc-800 ease-linear duration-300">
							<Card.Header>
								<Card.Title>{degree.title}</Card.Title>
								<Card.Description class="text-whiteC">{degree.description}</Card.Description>
							</Card.Header>
							<Card.Content>
								<p class="text-zinc-300">{degree.content}</p>
								{#if degree.details}
									<p class="text-zinc-300 mt-2">{degree.details}</p>
								{/if}
							</Card.Content>
						</Card.Root>
					{/each}
				</Tabs.Content>
				<Tabs.Content value="experiences" class="w-full">
					{#each experiences as experience}
						<Card.Root class="mt-8 border-zinc-600 bg-black text-white hover:bg-zinc-800 ease-linear duration-300">
							<Card.Header>
								<Card.Title>{experience.title}</Card.Title>
								<Card.Description class="text-whiteC">{experience.description}</Card.Description>
							</Card.Header>
							<Card.Content>
								<p class="text-zinc-300">{experience.content}</p>
							</Card.Content>
						</Card.Root>
					{/each}
				</Tabs.Content>
			</Tabs.Root>
		</section>
	</div>
</div>

<div class="container mx-auto px-4 mt-4">
	<section id="contact" class="py-16">
		<h2 class="text-3xl text-center mb-8">
			<span class="font-bold">
				{$t('home.titleSection3')}
			</span>
		</h2>
		{#if success}
			<div class="inline-flex items-center my-8 bg-white leading-none text-black rounded-full p-2 shadow text-teal text-sm">
				<span class="inline-flex bg-[#0f172a] text-white rounded-full h-6 px-3 justify-center items-center">{$t('home.formSuccess.success')}</span>
				<span class="inline-flex px-2">{$t('home.formSuccess.message')}</span>
			</div>
		{/if}
		<div class="flex lg:flex-row flex-col justify-between items-center">
			<ContactForm {data} class="mt-8" />
			<div class="flex flex-col text-left items-start lg:w-[35%] w-[85%] mt-16 lg:mt-0">
				<h3 class="text-xl font-bold">{$t('home.contactTitle')}</h3>
				<!--<span class="texte mt-4"> {$t('home.contactText')} </span>-->
				<span class="flex items-center mt-2">
					<Mail class="mr-2" />pierre.barbe@gmail.com
				</span>
				<span class="flex items-center mt-2">
					<Phone class="mr-2" />+1 867-322-3874
				</span>

				<span class="flex mt-4">
					{#each [{ icon: 'github', link: '/' }, { icon: 'linkedin', link: '/' }] as social}
						<a href={social.link} aria-label="Follow me on {social.icon}" class="mr-8 border-solid border-2 border-black p-3 rounded hover:bg-black hover:text-white ease-out duration-500">
							{#if social.icon === 'github'}
								<Github class="h-5 w-5" />
							{:else if social.icon === 'linkedin'}
								<Linkedin class="h-5 w-5" />
							{/if}
						</a>
					{/each}
				</span>
			</div>
		</div>
	</section>
</div>

<div class="bg-black text-white">
	<footer class="container mx-auto px-4 mt-4 py-6 text-right">
		<p>Made with ❤️ by Pierre Barbé</p>
	</footer>
</div>
