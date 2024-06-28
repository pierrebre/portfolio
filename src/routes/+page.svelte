<script>
	import '../app.css';
	import { Download, Github, Linkedin } from 'lucide-svelte';
	import { Button } from "$lib/components/ui/button";
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
			<a  href="/" class="mr-8 border-solid border-2 border-black p-4 rounded hover:bg-black">
				<Github class='h-4 w-4' />
			</a>
			<a href="/" class="mr-8 border-solid border-2 border-black p-4 rounded">
				<Linkedin class='h-4 w-4' />
			</a>
		</div>
	</section>
</div>
