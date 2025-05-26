<template>
  <div>
    <a-radio-group v-if="item.type === 'RADIO'" v-model:value="item.value" @change="handleChange">
      <a-radio v-for="opt in item.options" :key="opt.id" :value="opt.name">
        {{ opt.name }}
      </a-radio>
    </a-radio-group>

    <a-checkbox-group
      v-else-if="item.type === 'MULTI_SELECTION'"
      v-model:value="item.value"
      @change="handleChange"
    >
      <a-checkbox v-for="opt in item.options" :key="opt.id" :value="opt.name">
        {{ opt.name }}
      </a-checkbox>
    </a-checkbox-group>

    <!-- 子属性展开 -->
    <a-collapse v-if="childAttributes.length">
      <a-collapse-panel v-for="child in childAttributes" :key="child.id" :header="child.name">
        <AttrValueCollapse
          :item="child"
          :isDisable="isDisable"
          :preName="preName + '-' + child.name"
          @change="$emit('change', $event)"
        />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue';
  import type { IAttrItem, IOptionItem } from './types'; // 替换为你自己的类型路径

  const props = defineProps<{
    item: IAttrItem;
    isDisable: boolean;
    preName: string;
  }>();

  const emit = defineEmits(['change']);

  function handleChange() {
    emit('change', {
      name: props.item.name,
      value: props.item.value,
    });
  }

  // 获取被选中的选项对应的子属性
  const childAttributes = computed(() => {
    const opts = props.item.options || [];

    if (props.item.type === 'RADIO') {
      const selected = opts.find((o) => o.name === props.item.value);
      return selected?.attributes || [];
    }

    if (props.item.type === 'MULTI_SELECTION') {
      return opts
        .filter((o) => (props.item.value || []).includes(o.name))
        .flatMap((o) => o.attributes || []);
    }

    return [];
  });
</script>
