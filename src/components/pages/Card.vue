<template>
  <div class="card__main">
    <header class="container">
      <div class="card1">
        <div class="tainer btn-right" id="blur">
          <div>
            <Popup />
          </div>
        </div>
      </div>
      <Methodcard />
    </header>
    <main>
      <div class="back">
        <div class="recent">
          <div class="recent-selec">
            <h5>Recent boards</h5>

            <div class="opnios">
              <select id="select" boards name="select" class="select-input">
                <option value="">Last opened</option>
                <option value="">Last modified</option>
                <option value="">Alphabetically</option>
              </select>
            </div>
          </div>

          <div class="card-group">
            <div v-for="titles in dashboard" :key="titles.id">
              <div class="card">
                <div class="card-body"></div>
                <div class="card-footer">
                  <h5 class="card-title">{{ titles.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
