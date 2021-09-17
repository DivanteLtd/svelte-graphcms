<script>
	import { FormGroup, Input, Label } from 'sveltestrap';
	let radioGroup;
	export let data;
</script>

<FormGroup>
	<Label for={data.id}>{data.label}:</Label>
	<Input
		id={data.id}
		type={data.type.toLowerCase()}
		name={data.name}
		required={data.required}
		placeholder={data.placeholder}
	/>
</FormGroup>
