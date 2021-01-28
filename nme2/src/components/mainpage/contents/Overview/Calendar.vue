<template>
  <div class="calendar">
    {{ calendar.total }}
    <div class="calendarTable">
      <div class="week" v-for="(weekItem, index) in calendar.contributions" :key="index">
        <!-- {{ weekItem }} -->
        <div
          class="day"
          v-for="(dayItem, dayIndex) in weekItem"
          :class="'d' + dayItem.intensity.toString()"
          :key="dayIndex + 'd'"
        >
          <!-- {{ dayItem }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    calendar() {
      return this.$store.getters.calendar
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: column;
}
.calendarTable {
  display: flex;
}
.week {
  display: inline-flex;
  flex-direction: column;
}
.day {
  width: 9px;
  height: 9px;
  margin: 2px;
  border-radius: 4px;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: scale(2);
  }
  &.d0 {
    background: var(--github0);
  }
  &.d1 {
    background: var(--github1);
  }
  &.d2 {
    background: var(--github2);
  }
  &.d3 {
    background: var(--github3);
  }
  &.d4 {
    background: var(--github4);
  }
}
</style>
