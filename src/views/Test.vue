<template lang="pug">
div
	h1 {{ user.lastName }}
</template>

<script lang="ts">
import Vue from "vue";
import { User, SuperUser } from "../types";

export default Vue.extend({
	name: "Home",
	data() {
		return {
			user: {} as User,
			superUser: {} as SuperUser,
		};
	},
	computed: {
		fullName(): string {
			return `${this.user.firstName} ${this.user.lastName}`;
		},
	},
	mounted(): void {
		this.user = {
			firstName: `Sammy`,
			lastName: `Shark`,
			twitterHandle: `@digitalocean`,
			location: {
				city: `New York City`,
				state: `NY`,
			},
		};

		this.superUser = new SuperUser(this.user, 'looser', 'stupid', 99)
	},
});
</script>


<style>
</style>