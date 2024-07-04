<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    import { formSchema, type FormSchema } from "./schema";
    import {
      type SuperValidated,
      type Infer,
      superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";

    export let data: SuperValidated<Infer<FormSchema>>;

    const form = superForm(data, {
      validators: zodClient(formSchema),
    });

    const { form: formData, enhance } = form;
</script>

  <form method="POST" use:enhance action="/contact" class="basis-2/4">
    <Form.Field {form} name="name">
      <Form.Control let:attrs>
        <Form.Label>Name</Form.Label>
        <Input {...attrs} bind:value={$formData.name} placeholder="Your name" />
      </Form.Control>
      <Form.Description>This is your public display name.</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="email">
      <Form.Control let:attrs>
        <Form.Label>Email</Form.Label>
        <Input {...attrs} type="email" bind:value={$formData.email}  placeholder="Your email" />
      </Form.Control>
      <Form.Description>This is your public email address.</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="message">
      <Form.Control let:attrs>
        <Form.Label>Message</Form.Label>
        <Textarea {...attrs} bind:value={$formData.message} placeholder="Your message" />
      </Form.Control>
      <Form.Description>Your message to us.</Form.Description>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Button>Submit</Form.Button>
    
  </form>