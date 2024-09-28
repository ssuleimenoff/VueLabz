<template>
  <div class="container">
    <span class="date">
      {{todayDate}}
    </span>

    <div class="configuration">
      <span class="category-title">
        {{selectedCategory}}
      </span>

      <span class="filter-section">
        <img src="../../assets/peopleList/selector.svg" alt="select" class="selector-image">
        <select v-model="selectedFilter" @change="applyFilters">
          <option value="Rating"> Rating</option>
          <option value="PubDate">Date</option>
        </select>
      </span>

      <span class="pagination"  @click="nextPage">
        <img src="../../assets/peopleList/Arrow.svg" alt="arrow" class="pagination-arrow">
        <p>{{currentPage}}/{{totalPages}}</p>
      </span>
    </div>


    <div class="cards-grid">
      <div class="card" v-for="person in paginatedPeople" :key="person.id">
        <person-card :person="person" @like="handleLike"></person-card>
      </div>
    </div>

  </div>
</template>

<script>
import { getTodayDate } from '@/utils/dateUtils';
import { people } from '@/data/peopleData';
import {selectedCategory} from "@/components/peopleCards/state";
import PersonCard from "@/components/peopleCards/personCard.vue";
import _ from "lodash";

export default {
  components: {PersonCard},
  setup(){
    return { selectedCategory }
  },
  data() {
    return {
      todayDate: '',
      people: people,
      selectedFilter: 'Rating',
      currentPage: 1,
      perPage: 4,
    };
  },
  created() {
    this.todayDate = getTodayDate();
  },
  computed: {

    filteredPeople() {
      let filteredByCategory = this.people;

      if (this.selectedCategory) {
        filteredByCategory = filteredByCategory.filter(
            (person) => person.Topic === this.selectedCategory
        );
      }
      if (this.selectedCategory === 'All'){
        filteredByCategory = this.people
      }

      if (this.selectedFilter === 'PubDate') {
        return _.orderBy(filteredByCategory, ['PubDate'], ['desc']);
      } else if (this.selectedFilter === 'Rating') {
        return _.orderBy(filteredByCategory, ['Rating'], ['desc']);
      }
      return filteredByCategory;
    },
    paginatedPeople() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.filteredPeople.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredPeople.length / this.perPage);
    },
  },
  methods: {
    applyFilters() {
      this.currentPage = 1;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      } else {
        this.currentPage = 1;
      }
    },
    handleLike(personId) {
      const person = this.people.find(p => p.id === personId);
      if (person) {
        // Increment the rating by 0.1, but ensure it doesn't exceed 5
        person.Rating = Math.min((person.Rating + 0.1).toFixed(1), 5);
      }
    },
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jersey+15&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;500;600;700&display=swap');

.container {
  color: white;
  background: linear-gradient(
      180deg,
      rgba(254, 254, 254, 0.9) 0%,
      rgba(206, 210, 210, 0.9) 40%,
      rgba(193, 197, 197, 0.9) 62%,
      rgba(184, 187, 187, 0.9) 100%
  );

  width: 1000px;
  height: 660px;
  border: 1px;

  display: flex;
  flex-direction: column;

  margin-top: 100px;
  margin-left: 227px;

  box-sizing: border-box;
}

.date {
  width: 249px;
  height: 42px;
  border-radius: 8px;

  background: #5BB9CD;

  margin-top: 30px;
  margin-left: 30px;

  font-family: "Inknut Antiqua", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 93px;

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.configuration {
  display: flex;

  margin-top: 40px;
  margin-left: 30px;

  height:auto;
}

.category-title {
  width: 351px;
  height: 51px;
  border-radius: 10px;

  background: #5BB9CD;

  font-family: "Jersey 15", sans-serif;
  font-size: 64px;
  font-weight: 400;
  line-height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-section {
  margin-left: 130px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.filter-section select {
  background: #EEFCF7;
  width: 187px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Jersey 15", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;

  color: #1DE390;
}

.selector-image {
  position: absolute;
  left: 761px;
  top: 237px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: 130px;

  width: auto;

}

.pagination p{
  font-family: "Inknut Antiqua", sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 60px;
  text-align: left;

  margin-top: 0;
}

.pagination-arrow {
  position: absolute;
  top: 180px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

</style>