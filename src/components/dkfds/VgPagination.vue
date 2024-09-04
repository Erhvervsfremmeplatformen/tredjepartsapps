<template>
  <nav class="pagination" :aria-label="$t('erhvervsfremme.content.application.pagination.label')">
    <div v-if="isMobile" class="mobile d-flex">
      <button
        id="firstButton"
        class="button button-arrow button-first"
        :class="{ hidden: currentPage === 1 }"
        type="button"
        :aria-label="$t('erhvervsfremme.content.application.pagination.first.button')"
        @click="toPage(1)"
      >
        <VgIcon icon="paginationFirstPage" focusable="false" aria-hidden="true" />
      </button>
      <button
        id="prevButton"
        class="button button-arrow button-previous"
        :class="{ hidden: currentPage === 1 }"
        type="button"
        :aria-label="$t('erhvervsfremme.content.application.pagination.previous.button.aria_label')"
        @click="prevPage"
      >
        <VgIcon icon="paginationChevronLeft" focusable="false" aria-hidden="true" />
      </button>
      <span class="pagination-mobile">{{ paginationMobile }}</span>
      <button
        id="nextButton"
        class="button button-arrow button-next"
        :class="{ hidden: currentPage === pageCount }"
        type="button"
        :aria-label="$t('erhvervsfremme.content.application.pagination.next.button.aria_label')"
        @click="nextPage"
      >
        <VgIcon icon="paginationChevronRight" focusable="false" aria-hidden="true" />
      </button>
      <button
        id="lastButton"
        class="button button-arrow button-last"
        :class="{ hidden: currentPage === pageCount }"
        type="button"
        :aria-label="$t('erhvervsfremme.content.application.pagination.last.button.aria_label')"
        @click="toPage(pageCount)"
      >
        <VgIcon icon="paginationLastPage" focusable="false" aria-hidden="true" />
      </button>
    </div>
    <template v-else>
      <!-- PREVIOUS BUTTON -->
      <button
        id="prevButton"
        class="button button-link mr-4"
        type="button"
        :class="{ hidden: currentPage === 1 }"
        :aria-label="$t('erhvervsfremme.content.application.pagination.backwards.button')"
        @click="prevPage"
      >
        <VgIcon icon="paginationChevronLeft" focusable="false" aria-hidden="true" />
        {{ $t('erhvervsfremme.content.application.pagination.backwards.button') }}
      </button>
      <!-- BEFORE DOTS -->
      <template v-if="currentPage > 4">
        <button
          v-if="pageCount > 5"
          :id="`toPage-${1}`"
          class="button button-pagination"
          type="button"
          :aria-label="$t('erhvervsfremme.content.application.pagination.goto') + 1"
          @click="toPage(1)"
        >
          1
        </button>
        <div v-if="pageCount > 6" class="dots">...</div>
      </template>
      <!-- BETWEEN DOTS -->
      <button
        v-for="pageNum in previousPages"
        :id="`toPage-${pageNum}`"
        :key="pageNum"
        class="button button-pagination"
        type="button"
        :aria-label="$t('erhvervsfremme.content.application.pagination.goto') + pageNum"
        @click="toPage(pageNum)"
      >
        {{ pageNum }}
      </button>
      <button
        :id="`toPage-${currentPage}`"
        class="button button-pagination button-active"
        type="button"
        :aria-label="$t('erhvervsfremme.content.application.pagination.currentpage') + currentPage"
      >
        {{ currentPage }}
      </button>
      <button
        v-for="pageNum in upcomingPages"
        :id="`toPage-${pageNum}`"
        :key="pageNum"
        class="button button-pagination"
        type="button"
        :aria-label="$t('erhvervsfremme.content.application.pagination.goto') + pageNum"
        @click="toPage(pageNum)"
      >
        {{ pageNum }}
      </button>
      <!-- AFTER DOTS -->
      <template v-if="pageCount - currentPage > 3">
        <div v-if="pageCount > 6" class="dots">...</div>
        <button
          v-if="pageCount > 5"
          :id="`toPage-${pageCount}`"
          class="button button-pagination"
          type="button"
          :aria-label="$t('erhvervsfremme.content.application.pagination.goto') + pageCount"
          @click="toPage(pageCount)"
        >
          {{ pageCount }}
        </button>
      </template>
      <button id="nextButton" class="button button-link ml-0" type="button" :class="{ hidden: currentPage === pageCount }" @click="nextPage">
        {{ $t('erhvervsfremme.content.application.pagination.forwards.button') }}
        <VgIcon icon="paginationChevronRight" focusable="false" aria-hidden="true" />
      </button>
    </template>
  </nav>
</template>

<script setup lang="ts">
import range from 'lodash/range';
import { ParamType } from 'src/utils/tekstnoegle-util';
import { computed, inject, onUnmounted, ref } from 'vue';
import VgIcon from '../VgIcon.vue';

const $t: (tekstnoegle: string, params?: ParamType) => string = inject('$t')!;

const emits = defineEmits(['toPage']);
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  }
});

const paginationMobile = computed(() => $t('erhvervsfremme.content.application.pagination.mobile', [props.currentPage, props.pageCount]));

const isMobile = computed(() => width.value < 768);

const pagesAroundCurrent = computed((): number[] => {
  let first;
  if (props.currentPage < 5) {
    first = 1;
  } else if (props.pageCount - props.currentPage < 3) {
    first = props.pageCount - 4;
  } else {
    first = props.currentPage - 1;
  }
  let last;
  if (props.pageCount - props.currentPage < 4) {
    last = props.pageCount;
  } else if (props.currentPage < 5) {
    last = 5;
  } else {
    last = props.currentPage + 1;
  }
  return range(first, last + 1);
});

const previousPages = computed(() => pagesAroundCurrent.value.filter(num => num < props.currentPage));

const upcomingPages = computed(() => pagesAroundCurrent.value.filter(num => num > props.currentPage));

const prevPage = (): void => {
  if (props.currentPage > 1) {
    toPage(props.currentPage - 1);
  }
};
const nextPage = (): void => {
  if (props.currentPage < props.pageCount) {
    toPage(props.currentPage + 1);
  }
};
const toPage = (num: number): void => {
  emits('toPage', num);
};

const width = ref(window.innerWidth);

const handleResize = () => {
  width.value = window.innerWidth;
};

window.addEventListener('resize', handleResize);

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
