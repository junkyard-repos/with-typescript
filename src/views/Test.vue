<template>
	<div>
		<h1>{{}}</h1>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "../types";

export default Vue.extend({
	name: "Home",
	data() {
		return {
			user: {} as User,
		};
	},
	computed: {
		fullName(): string {
			return `${this.user.firstName} ${this.user.lastName}`;
		},
	},
	mounted(): void {
		// this.user = {
		// 	firstName: `Sammy`,
		// 	lastName: `Shark`,
		// 	twitterHandle: `@digitalocean`,
		// 	location: {
		// 		city: `New York City`,
		// 		state: `NY`,
		// 	},
		// };
	},
});
</script>


<style>
</style>