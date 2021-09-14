<script>
	export let data;
</script>

<div class="form-group">
	<label for={data.id}>{data.label}:</label>
	<input
		id={data.id}
		type={data.type.toLowerCase()}
		name={data.name}
		required={data.required}
		placeholder={data.placeholder}
	/>
</div>

<style>
	.form-group {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
</style>
