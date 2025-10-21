<style scoped>
:global(html),
:global(body),
:global(#app) {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
}

.container {
	width: 98vw;
	height: 98vh;
	border: 1px solid black;
	display: grid;
	grid-template-rows: auto 1fr auto;
}

header,
footer {
	text-align: center;
	border: 1px solid black;
	line-height: 1.5rem;
}
</style>

<template>
	<div class="container">
		<header>MovableItem</header>
		<main>
			<FloatingItemBasic></FloatingItemBasic>


		</main>
		<footer>Powered by Yazs. All Rights Reserved.</footer>
	</div>
</template>
<script setup>
import FloatingItemBasic from './components/FloatingItemBasic.vue'

</script>
