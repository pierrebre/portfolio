<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { onMount } from 'svelte';
	import { t } from '$lib/translation';

	export let data: SuperValidated<Infer<FormSchema>>;
	export let form: any; // Ceci vient de l'extérieur

	const svelteForm = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = svelteForm;
</script>

<div class="basis-2/4 w-[85%]">
	{#if form?.success}
		<div class="inline-flex items-center my-8 bg-white leading-none text-black rounded-full p-2 shadow text-teal text-sm">
			<span class="inline-flex bg-[#0f172a] text-white rounded-full h-6 px-3 justify-center items-center">{$t('home.formSuccess.success')}</span>
			<span class="inline-flex px-2">{$t('formSuccess.message')}</span>
		</div>
	{/if}
	<form method="POST" use:enhance action="/contact" name="contact">
		<Form.Field form={svelteForm} name="name">
			<Form.Control let:attrs>
				<Form.Label>{$t('home.formFields.name.label')}</Form.Label>
				<Input {...attrs} bind:value={$formData.name} name="name" placeholder="{$t('home.formFields.name.placeholder')}" autocomplete="name" />
			</Form.Control>
			<Form.Description>{$t('home.formFields.name.description')}</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field form={svelteForm} name="email">
			<Form.Control let:attrs>
				<Form.Label>{$t('home.formFields.email.label')}</Form.Label>
				<Input {...attrs} type="email" bind:value={$formData.email} name="email" placeholder="{$t('home.formFields.email.placeholder')}" autocomplete="email" />
			</Form.Control>
			<Form.Description>{$t('home.formFields.email.description')}</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Field form={svelteForm} name="message">
			<Form.Control let:attrs>
				<Form.Label>{$t('home.formFields.message.label')}</Form.Label>
				<Textarea {...attrs} bind:value={$formData.message} name="message" placeholder="{$t('home.formFields.message.placeholder')}" />
			</Form.Control>
			<Form.Description>{$t('home.formFields.message.description')}</Form.Description>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button type="submit" name="submit">{$t('home.formFields.submit')}</Form.Button>
	</form>
</div>
