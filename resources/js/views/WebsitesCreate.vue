<template>
	<div class="h-screen py-8">
		<div class="bg-white mx-auto max-w-lg shadow-md rounded-lg border-gray-300 overflow-hidden px-2 py-4">
			<div class="flex-grow">
				<div class="flex justify-between items-center mb-4 border-b-2 pb-4 mt-2">
					<h3 class="px-2 text-2xl ml-2 leading-tight font-500">
						Add new website
					</h3>
				</div>
				<div class="w-full">
					<form class="px-8 pt-6 pb-8 mb-4"
						method="POST"
						action="/"
						v-on:submit.prevent="onSubmit">
						<div class="mb-4">
							<label class="block text-gray-700 mb-2 flex justify-between" for="name">
								Name <span class="text-red-500 text-sm" v-if="errors.name">{{ errors.name.join(' ') }}</span>
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="text"
								id="name"
								v-model="form.name"
								placeholder="A short website name"
								:required="false">
						</div>
						<div class="mb-4">
							<label class="block text-gray-700 mb-2 flex justify-between" for="url">
								URL <span class="text-red-500 text-sm" v-if="errors.url">{{ errors.url.join(' ') }}</span>
							</label>
							<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								type="url"
								id="url"
								v-model="form.url"
								placeholder="http://example.com"
								:required="false">
						</div>
						<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-135"
							type="submit"
							:disabled="submitting">
							Add
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				url: '',
			},
			submitting: false,
			errors: {},
		}
	},
	methods: {
		async onSubmit() {
			this.errors = {}
			try {
				await this.axios.post(`${this.API_URL}/websites`, this.form)
				this.$router.push({ name: 'websites' })
			} catch(e) {
				this.errors = e.response.data.errors
			}
		},
	},
}
</script>
