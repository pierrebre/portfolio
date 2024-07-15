import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import 'dotenv/config';

const { API_KEY } = process.env;

const mailerSend = new MailerSend({ apiKey: API_KEY });
const sender = new Sender('you@pierrebarbe.fr', 'Contact - Portfolio');
const recipients = new Recipient('pierrebarbe0@gmail.com');

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		console.log(form.data);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const emailParams = new EmailParams().setFrom(sender).setTo([recipients]).setSubject('Contact from Portfolio').setText(`Name: ${form.data.name}	Email: ${form.data.email}
      Message: ${form.data.message}`);

		try {
			await mailerSend.email.send(emailParams);
			return {
				form,
				success: true
			};
		} catch (error) {
			console.log(error);
			return fail(500, {
				form
			});
		}
	}
};
