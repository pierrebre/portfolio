<script>
	import '../app.css';
	import { Download } from 'lucide-svelte';
</script>

<div class="container mx-auto px-4 mt-4">
	<nav class="flex justify-between align-baseline">
		<p class="text-xl font-bold">Pierre Barbé</p>
		<ul class="flex">
			<li><a class="mr-8" href="/#">About Me</a></li>
			<li><a class="mr-8" href="/#">Skills</a></li>
			<li><a class="mr-8" href="/#">Projects</a></li>
			<li><a class="mr-8" href="/#">Contact Me</a></li>
		</ul>
		<button class="bg-black text-white py-2 px-5 rounded flex"
			>Resume<Download class="ml-2 mt-[0.15rem]" size={18} color="#ffffff" /></button
		>
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
	</section>
</div>
