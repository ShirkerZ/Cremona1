<template>
  <div class="date-picker-container">
    <f7-list>
      <f7-list-item
        :title="getDateLabel(selectedDate)"
        smart-select
        :smart-select-params="{
          openIn: 'sheet',
          sheetSwipeToClose: true,
          sheetCloseLinkText: 'Chiudi',
          closeOnSelect: true,
        }"
        smart-select-init
      >
        <select name="datePicker" v-model="selectedDate" @change="dateSelected">
          <option
            :value="day.date"
            v-for="(day, index) of week"
            :key="index"
            :selected="index === 3"
          >
            {{ day.label }}
          </option>
        </select>
      </f7-list-item>
    </f7-list>
  </div>
</template>

<script>
import store from "../js/store.js";

export default {
  data() {
    return {
      selectedDate: [],
      days: [
        "Domenica",
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
      ],
      months: [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
      ],
    };
  },

  methods: {
    dateSelected() {
      store.dispatch("fetchSchedule", this.selectedDate);
      // this.getDateLabel(this.selectedDate);
    },

    getDateLabel(selectedDate) {
      if (selectedDate.length) {
        let foundDate = this.week.find((date) => date.date == selectedDate);
        return foundDate.label;
      } else {
        return selectedDate;
      }
    },
  },

  computed: {
    week() {
      let week = [];
      const current = new Date();

      for (let i = 0; i < 7; i++) {
        let month = current.getMonth() + 1;
        let day = current.getDate();
        let year = current.getFullYear();
        let date = [year, month, day].join("-");
        let label = `${this.days[current.getDay()]} ${day} ${
          this.months[month - 1]
        }`;

        week.push({
          label: label,
          date: date,
        });
        current.setDate(current.getDate() + 1);
      }
      this.selectedDate = week[0].date;
      return week;
    },
  },
};
</script>

<style lang="scss" scoped>
.date-picker-container {
  .list {
    margin-bottom: 0;
  }
}
</style>