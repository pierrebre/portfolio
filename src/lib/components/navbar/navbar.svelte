<script lang="ts">
	export let isVisible: boolean = false;
	export let links: Array<{ href: string; name: string }> = [];
	import { Button } from '$lib/components/ui/button';
	import { AlignJustify, Download, X } from 'lucide-svelte';
</script>

<nav class="flex lg:flex-row flex-col justify-between lg:items-center items-start">
	<div class="flex justify-between w-full lg:w-auto">
		<a href="/" class="text-2xl font-bold">Pierra Barbé</a>
		<Button on:click={() => (isVisible = !isVisible)} class="lg:hidden">
			{#if isVisible}
				<X class="h-4 w-4" />
			{:else}
				<AlignJustify class="h-4 w-4" />
			{/if}
		</Button>
	</div>
	<ul class="flex lg:flex-row flex-col my-4 lg:my-0 {isVisible ? 'flex' : 'hidden lg:flex'}">
		{#each links as { href, name }}
			<li>
				<a class="mr-8 text-lg font-bold relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#0f172a] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left" {href}>
					{name}
				</a>
			</li>
		{/each}
	</ul>
	<div class={isVisible ? 'flex' : 'hidden lg:flex'}>
		<Button class="ease-out duration-300" href="./PierreBARBE_CV.pdf" download>
			<Download class="mr-2 h-4 w-4" />
			Resume
		</Button>
	</div>
</nav>
