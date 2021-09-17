<script>
	import * as Fields from '$components/blocks/fields';
	import { Form, FormGroup, FormText, Input, Label, Button, Alert } from 'sveltestrap';
	export let data;
	let visible = false;

	const fields = data.fields.map((field) => {
		return Fields[field.__typename];
	});
	let formInputs = {};
	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		for (let field of formData) {
			const [key, value] = field;
			formInputs[key] = value;
		}
		visible = true;
	};
</script>

<h2>{data.formName}</h2>

<Form on:submit={onSubmit}>
	{#each fields as field, index}
		<svelte:component this={field} data={data.fields[index]} />
	{/each}
	<Button type="submit" color="primary">{data.cta}</Button>
</Form>

<Alert color="success" class="mt-3" isOpen={visible} toggle={() => (visible = false)}>
	{JSON.stringify(formInputs)}.
</Alert>
