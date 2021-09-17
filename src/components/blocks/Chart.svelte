<script>
	export let data;
	import Chart from 'chart.js/auto/auto.js';
	$: isPercentage = data.percentage;
	$: type = data.chartType.toLowerCase();
	$: label = data.chartLabel;
	$: datasetLabels = data.chartDataset.map((dataset) => {
		return dataset.label;
	});
	$: datasetValues = data.chartDataset.map((dataset) => {
		return isPercentage ? dataset.value : dataset.value;
	});
	$: datasetColors = data.chartDataset.map((dataset) => {
		return dataset.color.css;
	});

	let borderRadius = 0;

	const initChart = (node, params) => {
		var ctx = node.getContext('2d');
		var myChart = new Chart(ctx, {
			type: params.type,
			data: {
				labels: params.datasetLabels,
				datasets: [
					{
						label: params.label,
						data: params.datasetValues,
						backgroundColor: params.datasetColors,
						hoverOffset: 4,
						borderRadius: params.borderRadius
					}
				]
			},
			options: {
				scales: {
					y: {
						suggestedMin: 0,
						suggestedMax: 100
					}
				}
			}
		});

		return {
			update(newParams) {
				params = newParams;
				myChart.data.datasets[0].label = params.label;
				myChart.data.datasets[0].borderRadius = params.borderRadius;
				myChart.update();
			},
			destroy() {
				myChart.destroy();
			}
		};
	};
</script>

<h2>{label}</h2>

<label
	>Border radius
	<input type="range" bind:value={borderRadius} min={0} max={120} step={1} />
</label>
<canvas
	use:initChart={{ borderRadius, type, label, datasetLabels, datasetValues, datasetColors }}
	id={data.id}
/>
