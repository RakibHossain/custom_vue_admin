import Vue from 'vue'

const helper = Vue.mixin({
	methods: {
		ucFirst(str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		},
	}
})

export default helper
