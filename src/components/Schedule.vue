<template>
  <div class="schedule-container">
    <table>
      <thead>
        <tr>
          <th>Ora</th>
          <th>Programma</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="program of schedule" :key="program">
          <td>
            <div class="date">{{ program.hour }}:{{ program.time }}</div>
          </td>
          <td>{{ program.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    schedule: Object,
  },

  mounted() {
    console.log("Schedule: ", this.schedule);
  },
};
</script>

<style lang="scss" scoped>
.schedule-container {
  width: 100vw;
  padding: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        margin: 1rem 0;
        th {
          font-size: 0.6rem;
          text-align: left;
        }
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #2c2c2c;

        td {
          padding: 0.8rem 1rem 0.8rem 0;
          font-size: 0.7rem;

          .date {
            border: 1px solid #07345e;
            background: #07345e38;
            color: #07345e;
            border-radius: 2rem;
            text-align: center;
            padding: 0 0.5rem;
          }
        }
      }
    }
  }
}
</style>