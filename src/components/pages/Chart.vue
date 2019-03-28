<template>

	<div>
						
		<div class="row">
		
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">						
				<div class="card mb-3">
					<div class="card-header">
						<i class="fa fa-table"></i> Bar Chart
					</div>
						
					<div class="card-body">
						<canvas id="barChart"></canvas>
					</div>							
					<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
				</div><!-- end card-->					
			</div>
			
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">						
				<div class="card mb-3">
					<div class="card-header">
						<i class="fa fa-table"></i> Combo Bar Line Chart
					</div>
						
					<div class="card-body">
						<canvas id="comboBarLineChart"></canvas>
					</div>							
					<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
				</div><!-- end card-->					
			</div>

		</div>
		
		
		<div class="row">
		
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">						
				<div class="card mb-3">
					<div class="card-header">
						<i class="fa fa-table"></i> Pie Chart
					</div>
						
					<div class="card-body">
						<canvas id="pieChart"></canvas>
					</div>
					<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
				</div><!-- end card-->					
			</div>
			
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">						
				<div class="card mb-3">
					<div class="card-header">
						<i class="fa fa-table"></i> Doughnut Chart
					</div>
						
					<div class="card-body">
						<canvas id="doughnutChart"></canvas>
					</div>
					<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
				</div><!-- end card-->					
			</div>
			
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">						
				<div class="card mb-3">
					<div class="card-header">
						<i class="fa fa-table"></i> Radar Chart
					</div>
						
					<div class="card-body">
						<canvas id="radarChart"></canvas>
					</div>
					<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
				</div><!-- end card-->					
			</div>
			
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">						
				<div class="card mb-3">
					<div class="card-header">
						<i class="fa fa-table"></i> Polar Area Chart
					</div>
						
					<div class="card-body">
						<canvas id="polarAreaChart"></canvas>
					</div>
					<div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
				</div><!-- end card-->					
			</div>
				
		</div>
		<!-- end row -->							

	</div>

</template>

<script>
	export default {
		name: 'Chart',
	}
</script>

<style scoped>
	
</style>
