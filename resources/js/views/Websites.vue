<template>
	<div class="h-screen py-8">
		<div class="bg-white mx-auto max-w-lg shadow-md rounded-lg border-gray-300 overflow-hidden px-2 py-4">
			<div class="flex-grow">
				<div class="flex justify-between items-center mb-6 border-b-2 pb-4 mt-2">
					<h3 class="px-2 text-2xl ml-2 leading-tight font-500">
						Websites
					</h3>
					<router-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-135 text-center" to="/websites/create">
						Add new +
					</router-link>
				</div>
				<div class="w-full flex justify-between mb-6">
					<input type="text"
						placeholder="Search"
						class="w-3/5 text-sm bg-gray-200 text-grey-darkest rounded h-10 ml-2 p-3 focus:outline-none"
						v-model="search"
						v-on:keyup="loadWebsites"/>
					<div class="dropdown inline-block relative">
						<button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center min-w-135">
							<span class="mr-1">Sort: {{ sort.toUpperCase() }}</span>
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
							</svg>
						</button>
						<ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
							<li>
								<button class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block min-w-135"
									@click="sortBy('date')">
									Date
								</button>
							</li>
							<li>
								<button class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block min-w-135"
									@click="sortBy('name')">
									Name
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div class="w-full">
					<ul class="px-2">
						<li class="hover:bg-gray-100 p-2 mb-2" v-for="web in websites" :key="web.id">
							<a :href="web.url" class="flex hover:text-blue-600 block mb-1" target="_blank">
								<img src="/images/favicon.svg" class="w-4 mr-2">
								{{ web.name }}
							</a>
							<a :href="web.url" class="text-gray-600 hover:text-blue-600 ml-6 block leading-tight" target="_blank">
								{{ web.url }}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="mx-auto max-w-lg mt-5 mb-10 flex justify-center">
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline min-w-135 mb-8"
				type="button"
				@click="loadMore(links.next)"
				v-if="links.next">
				Load more
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fetched: false,
			websites: [],
			search: '',
			sort: 'date',
			links: {},
			meta: {},
		}
	},
	mounted() {
		this.loadWebsites()
	},
	methods: {
		sortBy(type) {
			this.sort = type
			this.loadWebsites()
		},
		async loadWebsites() {
			try {
				const { form, sort, search } = this
				const webs = await this.axios.get(`${this.API_URL}/websites`, {
					params: {
						form,
						sort,
						search,
					},
				})
				this.websites = webs.data.data
				this.links = webs.data.links
				this.meta = webs.data.meta
			} catch (e) {
				alert('An unexpected error happened.')
			}
		},
		async loadMore(url) {
			try {
				const webs = await this.axios.get(url)
				this.websites = { ...this.websites, ...webs.data.data }
				this.links = webs.data.links
				this.meta = webs.data.meta
			} catch (e) {
				// console.log(e)
			}
		},
	},
}
</script>
<style>
.dropdown:hover .dropdown-menu {
	display: block;
}
</style>
