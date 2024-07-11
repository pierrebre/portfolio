<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { t } from '$lib/translation';

	export let data: SuperValidated<Infer<FormSchema>>;

	const svelteForm = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = svelteForm;

	let success = false;

	function handleSubmit() {
		success = false; 
	}
</script>

<div class="basis-2/4 w-[85%]">
	<form method="POST" use:enhance action="/contact" name="contact" on:submit={handleSubmit}>
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
