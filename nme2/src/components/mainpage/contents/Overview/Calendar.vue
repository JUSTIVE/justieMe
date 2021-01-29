<template>
  <div class="calendar">
    {{ $store.state.langpack[$store.state.language].Overview.yearCommit }}{{ calendar.total }}
    <div class="calendarTable">
      <div>
        <div class="dayTag">M</div>
        <div class="dayTag">W</div>
        <div class="dayTag">F</div>
        <div class="dayTag">S</div>
      </div>
      <div class="week" v-for="(weekItem, index) in calendar.contributions" :key="index">
        <div
          class="day"
          v-for="(dayItem, dayIndex) in weekItem"
          :class="'d' + dayItem.intensity.toString()"
          :key="dayIndex + 'd'"
        />
      </div>
    </div>
    {{ todayCommit }}
  </div>
</template>

<script>
export default {
  computed: {
    calendar() {
      return this.$store.getters.calendar
    },
    todayCommit() {
      return this.$store.getters.todayCommit
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  display: flex;
  flex-direction: column;
  color: var(--text-color);
}
.calendarTable {
  display: flex;
  justify-content: center;
  padding: 12px 0px;
}
.dayTag {
  font-size: 8px;
  line-height: 10px;
  margin-bottom: 12px;
  vertical-align: text-top;
  margin-top: 1px;
  width: 10px;
}
.week {
  width: calc(min(100% / 53, 12px));
  display: inline-flex;
  flex-direction: column;
  margin: 0px 0.5px;
}
.day {
  width: 8px;
  height: 8px;
  margin: 0.5px 0px;
  border-width: 2px;
  border-radius: 1px;
  border-style: solid;
  border-color: hsla(0, 0%, 50%, 0.1);
  transition: all 0.01s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: scale(3);
    border-radius: 0px;
    border-color: transparent;
    box-shadow: var(--elevation8);
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
@media (max-width: 2000px) {
  .dayTag {
    margin-bottom: 10px;
  }
  .week {
    width: calc(min(100% / 53, 11px));
  }
  .day {
    width: 7px;
    height: 7px;
    margin: 0.5px 0px;
  }
}
@media (max-width: 1500px) {
  .dayTag {
    margin-bottom: 10px;
  }
  .week {
    width: calc(min(100% / 53, 9px));
  }
  .day {
    width: 5px;
    height: 5px;
    margin: 0.5px 0px;
  }
}
@media (max-width: 1200px) {
  .dayTag {
    margin-bottom: 8px;
  }
  .week {
    width: calc(min(100% / 53, 8px));
  }
  .day {
    width: 4px;
    height: 4px;
    margin: 0.5px 0px;
  }
}
</style>
