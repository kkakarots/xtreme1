<template>
  <a-collapse v-model:activeKey="activeKeys">
    <a-collapse-panel v-for="attr in attrs" :key="attr.id" :header="attr.name">
      <AttrValueCollapse :item="attr" :isDisable="false" preName="" @change="handleAttrChange" />
    </a-collapse-panel>
  </a-collapse>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import AttrValueCollapse from './AttrValueCollapse.vue';
  import { AttrType, IAttr, IAttrOption } from '../../../../image-editor';

  const props = defineProps<{
    attrs: IAttr[];
  }>();

  const emit = defineEmits(['change']);

  const activeKeys = ref<string[]>([]);

  function handleAttrChange(value: any) {
    emit('change', value);
  }
</script>
