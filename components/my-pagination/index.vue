<template>
	<div class="flex items-center mt-6 mb-10 justify-center">
		<Pagination class="ml-4" v-model:page="pager.page" @update:page="pageChange" v-slot="{ page }"
			:total="pager.count" :items-per-page="pager.size" :sibling-count="1" show-edges :default-page="1">
			<PaginationList v-slot="{ items }" class="flex items-center gap-1">
				<PaginationPrev class="w-8 h-8 p-0" />
				<template v-for="(item, index) in items">
					<PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
						<Button  class="w-8 h-8 p-0 " :variant="item.value === page ? 'default' : 'outline'">
							{{ item.value }}
						</Button>
					</PaginationListItem>
					<PaginationEllipsis v-else :key="item.type" :index="index" />
				</template>
				<PaginationNext class="w-8 h-8 p-0" />
			</PaginationList>
		</Pagination>
	</div>
</template>
<script setup>

	import {
		ref,
		computed,
		watch
	} from 'vue'
	const props = defineProps({
		modelValue: {
			type: Object,
			default: {}
		},
		pageSizeArray: {
			type: Array,
			default: [10, 20, 30],
		}
	});
	const emit = defineEmits(['update:modelValue', 'change']);

	const pager = computed({
		get() {
			return props.modelValue
		},
		set(value) {
			emit('update:modelValue', value)
		}
	});
	const pageChange = (page) => {
		emit('change')
	}
</script>
