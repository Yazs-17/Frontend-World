<style scoped>
.item {
	position: absolute;
	height: 100px;
	width: 100px;
	border: 1px red dashed;
}
</style>
<template>
	<div class="item" ref="item" @mousedown="onMouseDone" @mouseup="onMouseup"></div>

</template>


<script setup>
import { ref } from 'vue'
const item = ref(null)
const pos = ref({ x: 0, y: 0 })
const offset = ref({ x: 0, y: 0 });

let isMoving = false;

const onMouseDone = (e) => {
	if (isMoving) return;
	isMoving = true;
	offset.value.x = e.offsetX;
	offset.value.y = e.offsetY;
	document.addEventListener("mousemove", mouseMove);
}
const mouseMove = (e) => {
	if (!isMoving) return;
	let dx = e.clientX - offset.value.x;
	let dy = e.clientY - offset.value.y;
	item.value.style.left = `${dx}px`
	item.value.style.top = `${dy}px`

}
const onMouseup = () => {
	isMoving = false;
	document.removeEventListener("mousemove", mouseMove);
}

defineOptions({
	name: "FloatingItemBasic"
})

</script>