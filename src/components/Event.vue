<template>
    <div class="games-container">
      <h1 class="title">Upcoming Games</h1>
      <div v-if="upcomingGames.length === 0" class="no-games">
        <p>No upcoming games.</p>
      </div>
      <div class="games-list">
        <div class="game-card" v-for="game in upcomingGames" :key="game.id">
          <h2 class="game-title">Game Code: {{ game.game_code_number }}</h2>
          <p><strong>Sport:</strong> {{ game.sport_id }}</p>
          <p><strong>Entry Time:</strong> {{ formatDate(game.entry_time) }}</p>
          <p><strong>Game Time:</strong> {{ formatDate(game.game_time_stamp) }}</p>
          <p><strong>Location:</strong> {{ game.game_address }}, {{ game.game_city }}</p>
          <p><strong>Referee:</strong> {{ game.referee }}</p>
          <p><strong>Home Team ID:</strong> {{ game.home_team_id }}</p>
          <p><strong>Away Team ID:</strong> {{ game.away_team_id }}</p>
          <p><strong>Score:</strong> {{ game.game_score }}</p>
          <p><strong>Description:</strong> {{ game.game_description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const upcomingGames = ref([]);
  
      const fetchGames = async () => {
        try {
          const response = await fetch('https://growlotusfintech.in/school-app-backend-main/api/games/2024-09-12');
          const data = await response.json();
          upcomingGames.value = data.upcoming_games;
        } catch (error) {
          console.error('Error fetching games:', error);
        }
      };
  
      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
  
      onMounted(fetchGames);
  
      return {
        upcomingGames,
        formatDate,
      };
    },
  };
  </script>
  
  <style scoped>
  .games-container {
    padding: 150px 20px;
    background-color: #000000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    color: #fff; /* Set text color to white */
    font-size: 2rem; /* Adjusted for responsiveness */
    margin-bottom: 20px;
  }
  
  .no-games {
    text-align: center;
    font-style: italic;
    color: #999;
  }
  
  .games-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  .game-card {
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .game-card:hover {
    transform: scale(1.02);
  }
  
  .game-title {
    font-size: 1.5rem; /* Adjusted for responsiveness */
    margin-bottom: 10px;
  }
  
  /* Media Queries for Further Responsiveness */
  @media (max-width: 768px) {
    .title {
      font-size: 1.5rem; /* Adjust title size for smaller screens */
    }
  
    .game-title {
      font-size: 1.2rem; /* Adjust game title size for smaller screens */
    }
    .games-container {
    padding: 150px 20px;

  }
  }
  
  @media (max-width: 480px) {
    .games-container {
      padding: 150px 10px; /* Reduced padding for mobile */
    }
  
    .title {
      font-size: 1.2rem; /* Further adjust title size for smaller screens */
    }
  
    .game-card {
      padding: 10px; /* Reduce padding in game cards */
    }
  }
  </style>
  