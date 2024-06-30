<script>
	import '../app.css';
	import { Download, Github, Linkedin } from 'lucide-svelte';
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import * as Card from "$lib/components/ui/card";
 
	const skills = [
		{
		 title: "Git",
		 content:"lorem"
		},
		{
			title: "Typescript",
			content: "lorem"
		},
		{
			title: "Javasript",
			content: "lorem"
		},
		{
			title: "Svelte",
			content: "lorem"
		},
		{
			title: "Tailwind",
			content: "lorem"
		},
		{
			title: "HTML",
			content: "lorem",
		}
	];

	const experiences = [
		{
			title: "Web Developer",
			description: "24/10/2021 - Present",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae."
		},
		{
			title: "Web Developer",
			description: "24/10/2021 - Present",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae."
		},
		{
			title: "Web Developer",
			description: "24/10/2021 - Present",
			content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum explicabo nesciunt nam in incidunt vitae."	
		}
	];
</script>


<div class="container mx-auto px-4 mt-4">
	<nav class="flex lg:flex-row flex-col justify-between align-baseline">
		<p class="text-xl font-bold">Pierre Barbé</p>
			<ul class="flex lg:flex-row flex-col my-4">
				<li><a class="mr-8" href="/#">About Me</a></li>
				<li><a class="mr-8" href="/#">Skills</a></li>
				<li><a class="mr-8" href="/#">Projects</a></li>
				<li><a class="mr-8" href="/#">Contact Me</a></li>
			</ul>
			<div>
				<Button>
					<Download class="mr-2 h-4 w-4" />
					Resume
				</Button>
			</div>
	</nav>
	<section class="mt-16">
		<div>
			<p>
				Hello I'am <span>Pierre BARBÉ.</span><br />
				<span>Web</span> Developper<br />
				Based In <span>Montreal.</span>
			</p>
		</div>
		<div class="mt-8">
			<p class="texte text-[#8e8b8c]">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis pariatur
				consectetur soluta, eum explicabo nesciunt nam in incidunt vitae. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Quisquam perferendis pariatur consectetur soluta, eum
				explicabo nesciunt nam in incidunt vitae.
			</p>
		</div>
		<div class="flex mt-16">
			<a  href="/" class="mr-8 border-solid border-2 border-black p-3 rounded hover:bg-black">
				<Github class='h-4 w-4' />
			</a>
			<a href="/" class="mr-8 border-solid border-2 border-black p-3 rounded">
				<Linkedin class='h-4 w-4' />
			</a>
			<Separator class="" />
		</div>
	</section>
	<section class="mt-16 text-center">
		<h2 class="">My <span>Skills</span></h2>
		<ul class="mt-8 flex lg:flex-row lg:flex-wrap flex-col justify-between align-baseline">
			{#each skills as skill}
				<li class="mb-8">
					<Card.Root class="w-[350px]">
						<Card.Header>
							<Card.Title>{skill.title}</Card.Title>
						</Card.Header>
						<Card.Content>
							<p>{skill.content}</p>
						</Card.Content>
					</Card.Root>
				</li>
			{/each}
		</ul>
	</section>
</div>
<div class="w-full bg-black text-white">
    <div class="container mx-auto px-4">
        <section class="py-16">
            <h2 class="text-center">My <span>Experience</span></h2>
			{#each experiences as experience}
				<Card.Root class="mt-8">
					<Card.Header>
						<Card.Title>{experience.title}</Card.Title>
						<Card.Description>{experience.description}</Card.Description>
					</Card.Header>
					<Card.Content>
						<p class="texte">{experience.content}</p>
					</Card.Content>
				</Card.Root>
			{/each}
        </section>
    </div>
</div>