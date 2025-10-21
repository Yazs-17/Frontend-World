<template>
	<div class="draggable-container" @mousedown="onMouseDown">
		<div class="draggable-item" v-for="(box, index) in boxes" :key="index"
			:style="{ left: box.x + 'px', top: box.y + 'px' }" data-index="index">
			{{ index }}
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const boxes = ref([
	{ x: 50, y: 50 },
	{ x: 200, y: 100 }
])

let activeIndex = null
let offset = { x: 0, y: 0 }

const onMouseDown = (e) => {
	// 事件代理：只要容器监听一次
	const target = e.target.closest('.draggable-item')
	if (!target) return
	activeIndex = +target.dataset.index
	const box = boxes.value[activeIndex]
	offset.x = e.clientX - box.x
	offset.y = e.clientY - box.y
	document.addEventListener('mousemove', onMouseMove)
	document.addEventListener('mouseup', onMouseUp)
}

const onMouseMove = (e) => {
	if (activeIndex === null) return
	boxes.value[activeIndex].x = e.clientX - offset.x
	boxes.value[activeIndex].y = e.clientY - offset.y
}

const onMouseUp = () => {
	activeIndex = null
	document.removeEventListener('mousemove', onMouseMove)
	document.removeEventListener('mouseup', onMouseUp)
}
</script>

<style scoped>
.draggable-container {
	position: relative;
	width: 600px;
	height: 400px;
	border: 1px solid #ddd;
}

.draggable-item {
	position: absolute;
	width: 100px;
	height: 100px;
	background: rgba(250, 128, 114, 0.3);
	border: 1px dashed salmon;
	cursor: move;
	user-select: none;
	transition: box-shadow 0.2s ease;
}

.draggable-item:active {
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
