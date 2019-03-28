<template>

	<div id="main" class="forced">

    <Navbar/>
    <Sidebar/>
    
    <div class="content-page">

      <!-- Start content -->
      <div class="content">
            
        <div class="container-fluid">

          <!-- nav row -->
          <div class="row">
            <div class="col-xl-12">
              <div class="breadcrumb-holder">
                  <h1 class="main-title float-left">{{ ucFirst($route.name) }}</h1>
                  <ol class="breadcrumb float-right">
                    <li class="breadcrumb-item">Home</li>
                    <li class="breadcrumb-item active">{{ $route.name }}</li>
                  </ol>
                  <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <!-- end of nav row -->

          <!-- vue router -->
          <router-view/>
          <!-- end of vue router -->

        </div>

      </div>

    </div>

    <Footer/>

	</div>

</template>

<script>
import Navbar from './components/layouts/Navbar.vue'
import Sidebar from './components/layouts/Sidebar.vue'
import Footer from './components/layouts/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Sidebar,
    Footer,
  }
}
</script>

<style >

</style>
