<script lang="ts">
	import { t, locales, locale } from '$lib/translation';
	import * as Select from '$lib/components/ui/select';
	import Navbar from '$lib/components/navbar/navbar.svelte';

	function handleSelectedChange(value: any) {
		$locale = value;
	}

	const links = [
		{ href: '/#skills', name: $t('home.titleSection1') },
		{ href: '/#experiences', name: $t('home.titleSection2') },
		{ href: '/#contact', name: 'Contact' },
	];

	let isVisible = false;
</script>

<!--<div class=" left-0 top-0 z-10 m-0 p-0 w-full h-full">
	<Select.Root onSelectedChange={(v) => v && handleSelectedChange(v.value)}>
		<Select.Trigger class="w-[120px]">
			<Select.Value placeholder="Language" />
		</Select.Trigger>
		<Select.Content>
			{#each $locales as value}
				<Select.Item {value}>{$t(`lang.${value}`)}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
-->
<div class="container mx-auto mt-4">
	<Navbar {isVisible} {links} />
</div>

<slot />
