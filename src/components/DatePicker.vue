<template>
  <div class="select-date-container">
    <f7-list>
      <f7-list-item
        :title="selectedDate.label"
        smart-select
        :smart-select-params="{ openIn: 'sheet' }"
      >
        <select name="datePicker" v-model="selectedDate">
          <option
            :value="day"
            v-for="(day, index) of week"
            :key="index"
            :selected="index == 0"
          >
            {{ day.label }}
          </option>
        </select>
      </f7-list-item>
    </f7-list>

    {{ selectedDate }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDate: [],
      days: [
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
        "Domenica",
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

  computed: {
    week() {
      let week = [];
      const current = new Date();

      for (let i = 0; i < 7; i++) {
        let month = current.getMonth() + 1;
        let day = current.getDate();
        let year = current.getFullYear();
        let date = [year, month, day].join("-");
        let label = `${this.days[current.getDay() - 1]} ${day} ${
          this.months[month - 1]
        }`;

        week.push({
          label: label,
          date: date,
        });
        current.setDate(current.getDate() + 1);
      }
      return week;
    },
  },
};
</script>