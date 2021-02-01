<template>
  <div class="calendar">
    <div class="calendarHeader">
      {{ `${$store.state.langpack[$store.state.language].Overview.yearCommit}\t` }}
      <span class="yearCommitCount">{{ calendar.total }}</span>
    </div>

    <div class="calendarTable">
      <div class="calendarContent">
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
            @mouseover="hover(dayItem)"
            @mouseleave="clear"
          />
        </div>
      </div>
      <div class="currentDayCommit">
        <div>
          <span>{{ $store.getters.lang.Overview.todayCommit.title }}</span>
          <span class="value">{{ $store.getters.lang.Overview.todayCommit.value[todayCommit] }}</span>
        </div>
        <div class="date" v-if="current !== undefined">
          <span>{{ $store.getters.lang.Overview.currentCommit.date }}</span>
          <span class="value">{{ current.date }}</span>
        </div>
        <div class="commits" v-if="current !== undefined">
          <span>{{ $store.getters.lang.Overview.currentCommit.commits }}</span>
          <span class="value">{{ current.count }}</span>
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
    },
    todayCommit() {
      return this.$store.getters.todayCommit
    }
  },
  data() {
    return {
      current: undefined
    }
  },
  methods: {
    hover(dayItem) {
      this.current = dayItem
    },
    clear() {
      this.current = undefined
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
.yearCommitCount {
  display: inline-block;
  color: var(--accent);
}
.calendarTable {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 12px 0px;
}
.calendarContent {
  display: inline-flex;
  width: fit-content;
  justify-content: flex-start;
  margin: 0px auto;
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
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &.d1 {
    background: var(--github1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &.d2 {
    background: var(--github2);
    transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &.d3 {
    background: var(--github3);
    transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &.d4 {
    background: var(--github4);
    transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
.currentDayCommit {
  height: 34px;
  font-size: var(--font-size6);
  .value {
    color: var(--accent);
    margin-left: 4px;
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
    width: 5px;
    height: 5px;
    margin: 0.5px 0px;
  }
}
@media (max-width: 1600px) {
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
    margin-bottom: 6px;
  }
  .week {
    width: calc(min(100% / 53, 8px));
  }
  .day {
    width: 3px;
    height: 3px;
    margin: 0.5px 0px;
  }
}
@media (max-width: 400px) {
  .dayTag {
    margin-bottom: 2px;
  }
  .week {
    width: calc(min(100% / 53, 8px));
  }
  .day {
    width: 0.5px;
    height: 0.5px;
    margin: 0.5px 0px;
  }
}
</style>
