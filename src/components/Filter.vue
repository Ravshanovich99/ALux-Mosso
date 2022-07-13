<template>
  <div class="container">
    <div class="filter">
      <div class="filter-btns">
        <div class="filter-btn" v-for="item in typeBtnsData" :key="item.id">
          <button
            @click="
              () => {
                typeButton(item.id);
              }
            "
            :class="this.$store.state.typeBtn == item.id ? 'active' : ''"
          >
            {{ item.title }}
          </button>
        </div>
      </div>

      <div class="object-checkboxes">
        <div class="obj-checkbox">
          <input
            type="checkbox"
            name="ready"
            id="ready"
            @click="
              () => {
                selectReady();
              }
            "
          />
          <span class="checkbox_style"></span>
          <label for="ready" v-if="language == 'en'">ready project</label>
          <label for="ready" v-else>готовый проект</label>
        </div>
        <div class="obj-checkbox">
          <input
            type="checkbox"
            name="first"
            id="first"
            @click="
              () => {
                selectPrimary();
              }
            "
          />
          <span class="checkbox_style"></span>
          <label for="first" v-if="language == 'en'">primary real estate</label>
          <label for="first" v-else>первичная недвижимость</label>
        </div>
        <div class="obj-checkbox">
          <input
            type="checkbox"
            name="second"
            id="second"
            @click="
              () => {
                selectSecondary();
              }
            "
          />
          <span class="checkbox_style"></span>
          <label for="second" v-if="language == 'en'"
            >secondary real estate</label
          >
          <label for="second" v-else>вторичная недвижимость</label>
        </div>
      </div>

      <div class="filter-selection">
        <div class="select-object">
          <label for="object" v-if="language == 'en'">Type objects</label>
          <label for="object" v-else>Тип объекта</label>
          <div class="type-object" @click="typeObject = !typeObject">
            <p>
              <span v-if="this.$store.state.selectedTypes.length == 0"
                >Выбрать</span
              >
              <span v-else
                >Выбрано ({{ this.$store.state.selectedTypes.length }})</span
              >
              <i
                class="fa-solid fa-angle-down"
                :class="typeObject ? 'active' : ''"
              ></i>
            </p>
            <div class="types-object" :class="typeObject ? 'active' : ''">
              <p v-for="(item, index) in categoriesData" :key="item.id">
                <input
                  type="checkbox"
                  :id="index"
                  @click="
                    () => {
                      selectTypes(item.id);
                    }
                  "
                />
                <label :for="index">{{ item.name }}</label>
              </p>
            </div>
          </div>
        </div>
        <div class="select-city">
          <label for="city" v-if="language == 'en'">City</label>
          <label for="city" v-else>Город</label>
          <div class="type-city" @click="cityShow = !cityShow">
            <p>
              <span v-if="this.$store.state.selectedCities.length == 0"
                >Выбрать</span
              >
              <span v-else
                >Выбрано ({{ this.$store.state.selectedCities.length }})</span
              >
              <i
                class="fa-solid fa-angle-down"
                :class="cityShow ? 'active' : ''"
              ></i>
            </p>
            <div class="types-city" :class="cityShow ? 'active' : ''">
              <p v-for="item in citiesData" :key="item.id">
                <input
                  type="checkbox"
                  :id="item.name"
                  @click="
                    () => {
                      selectCity(item.id);
                    }
                  "
                />
                <label :for="item.name">{{ item.name }}</label>
              </p>
            </div>
          </div>
          <!-- <select name="city" id="city" v-model="city">
            <option :value="item.id" v-for="item in citiesData" :key="item.id">
              {{ item.name }}
            </option>
          </select> -->
        </div>
        <div class="select-district">
          <label for="district" v-if="language == 'en'">District</label>
          <label for="district" v-else>Район</label>
          <div class="type-district" @click="districtShow = !districtShow">
            <p>
              <span v-if="this.$store.state.selectedDistricts.length == 0"
                >Выбрать</span
              >
              <span v-else
                >Выбрано ({{
                  this.$store.state.selectedDistricts.length
                }})</span
              >
              <i
                class="fa-solid fa-angle-down"
                :class="districtShow ? 'active' : ''"
              ></i>
            </p>
            <div class="types-district" :class="districtShow ? 'active' : ''">
              <p v-for="item in districtsku" :key="item.id">
                <input
                  type="checkbox"
                  :id="item.name"
                  @click="
                    () => {
                      selectDistrict(item.id);
                    }
                  "
                />
                <label :for="item.name">{{ item.name }}</label>
              </p>
            </div>
          </div>
          <!-- <select name="district" id="district" v-model="district">
            <option :value="item.id" v-for="item in districts" :key="item.id">
              {{ item.name }}
            </option>
          </select> -->
        </div>
        <div class="price-start">
          <label for="start-price-label" v-if="language == 'en'"
            >Price from, €</label
          >
          <label for="start-price-label" v-else>Цена от, €</label>

          <input
            type="number"
            name="start-price"
            id="start-price-inp"
            placeholder="0"
            v-model="this.$store.state.startingPrice"
          />
        </div>
        <div class="price-end">
          <label for="end-price-label" v-if="language == 'en'"
            >Price till, €</label
          >
          <label for="end-price-label" v-else>Цена до, €</label>
          <input
            type="number"
            name="end-price"
            id="end-price-inp"
            placeholder="200 000"
            v-model="this.$store.state.endingPrice"
          />
        </div>
        <div class="select-id">
          <label for="select-id-label">ID</label>
          <input
            type="number"
            name="select-id"
            id="select-id-inp"
            v-model="this.$store.state.identifier"
          />
        </div>
      </div>
      <div class="mid">
        <div class="structures">
          <p v-if="language == 'en'">Special infrastructure</p>
          <p v-else>Особая инфраструктура</p>
          <div class="type-structure" @click="structuresOpen = !structuresOpen">
            <div>
              <div v-if="language == 'en'">
                <span v-if="this.$store.state.selectedStructures.length == 0"
                  >Choose from the list</span
                >
                <span v-else
                  >Chose ({{
                    this.$store.state.selectedStructures.length
                  }})</span
                >
              </div>
              <div v-else>
                <span v-if="this.$store.state.selectedStructures.length == 0"
                  >Выбрать из списка</span
                >
                <span v-else
                  >Выбрано ({{
                    this.$store.state.selectedStructures.length
                  }})</span
                >
              </div>
              <i
                class="fa-solid fa-angle-down"
                :class="structuresOpen ? 'active' : ''"
              ></i>
            </div>
            <div
              class="types-structure"
              :class="structuresOpen ? 'active' : ''"
            >
              <p
                v-for="(item, index) in specialInfrastructureData"
                :key="index"
              >
                <input
                  type="checkbox"
                  :id="item.name"
                  @click="
                    () => {
                      selectStructure(item.id);
                    }
                  "
                />
                <label :for="item.name">{{ item.name }}</label>
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="structure-checkboxes-box">
          <h3 class="checkboxes-box-title">Особая инфраструктура</h3>
          <div class="structure-checkboxes">
            <div class="structure-checkbox" :value="item.id">
              <span class="checkbox_style"></span>
            </div>
          </div>
          <div class="checkboxes-box-btns">
            <Button
              type="elevated"
              title="Cancel"
              class="cancel-btn"
              @click="structuresOpen = false"
              v-if="language == 'en'"
            />
            <Button
              v-else
              type="elevated"
              title="Отменить"
              class="cancel-btn"
              @click="structuresOpen = false"
            />

            <Button
              v-if="language == 'en'"
              type="elevated"
              title="Apply"
              @click="structuresOpen = false"
            />
            <Button
              v-else
              type="elevated"
              title="Применить"
              @click="structuresOpen = false"
            />
          </div>
        </div> -->

        <div class="surface">
          <label for="surface" v-if="language == 'en'">total area </label>
          <label for="surface" v-else>Общая площадь</label>
          <div class="surface-inputs">
            <input
              type="number"
              name="from"
              id="surface"
              placeholder="От"
              v-model="this.$store.state.startArea"
            />
            <input
              type="number"
              name="to"
              id="surface"
              placeholder="До"
              v-model="this.$store.state.endArea"
            />
            <p>м2</p>
          </div>
        </div>

        <div class="build-year">
          <label for="build" v-if="language == 'en'"
            >Year of construction</label
          >
          <label for="build" v-else>Год Строительства</label>
          <div class="build-inputs">
            <input
              type="number"
              name="from"
              id="build"
              placeholder="С"
              v-model="this.$store.state.startYear"
            />
            <input
              type="number"
              name="to"
              id="build"
              placeholder="По"
              v-model="this.$store.state.endYear"
            />
          </div>
        </div>
      </div>

      <div class="filter-bottom">
        <div class="filter-bottom-left">
          <div class="filter-cancel" @click="clearFilter">
            <i class="fa-solid fa-xmark"></i>
            <p v-if="language == 'en'">Cancel all parametres</p>
            <p v-else>Сбросить все параметры</p>
          </div>
        </div>
        <Button
          v-if="language == 'en'"
          title="Find house"
          type="elevated"
          @click="
            this.$emit('getFiltred'), this.$router.push('/filtred-objects')
          "
        />
        <Button
          v-if="language == 'ru'"
          title="Подобрать жилье"
          type="elevated"
          @click="
            this.$emit('getFiltred'), this.$router.push('/filtred-objects')
          "
        />
      </div>
    </div>
    <!-- <div
      class="objects-filter-container"
      :class="parametresOpen ? 'active' : ''"
    >
      <div class="objects-filter" :class="structuresOpen ? 'blur-active' : ''">
        <div class="top">
          <div class="apartments">
            <p class="appartments-title" v-if="language == 'en'">Apartments</p>
            <p class="appartments-title" v-else>Квартиры</p>
            <div class="nums">
              <p
                class="num"
                @click="numberOfRooms = 1"
                :class="numberOfRooms == 1 ? 'active' : ''"
              >
                1
              </p>
              <p
                class="num"
                @click="numberOfRooms = 2"
                :class="numberOfRooms == 2 ? 'active' : ''"
              >
                2
              </p>
              <p
                class="num"
                @click="numberOfRooms = 3"
                :class="numberOfRooms == 3 ? 'active' : ''"
              >
                3
              </p>
              <p
                class="num"
                @click="numberOfRooms = 4"
                :class="numberOfRooms == 4 ? 'active' : ''"
              >
                4
              </p>
              <p
                class="num"
                @click="numberOfRooms = 5"
                :class="numberOfRooms == 5 ? 'active' : ''"
              >
                5
              </p>
            </div>
            <p class="appartments-description" v-if="language == 'en'">rooms</p>
            <p class="appartments-description" v-else>комн</p>
          </div>
          <div class="money">
            <p v-if="language == 'en'">Price, €</p>
            <p v-else>Цена, €</p>
            <input
              type="number"
              name="from"
              id="from"
              placeholder="От"
              v-model="startingPrice"
            />
            <input
              type="number"
              name="to"
              id="to"
              placeholder="До"
              v-model="endingPrice"
            />
          </div>
          <div class="checkboxes">
            <div class="checkbox-1">
              <input
                type="checkbox"
                name="photo"
                id="photo"
                v-model="photosPresent"
              />
              <span class="checkbox_style"></span>
            </div>
            <label for="photo" v-if="language == 'en'">have photo</label>
            <label for="photo" v-else>есть фото</label>
            <div class="checkbox-2">
              <input
                type="checkbox"
                name="settings"
                id="settings"
                v-model="isNewlyBuilt"
              />
              <span class="checkbox_style"></span>
            </div>
            <label for="settings" v-if="language == 'en'">new buildings</label>
            <label for="settings" v-else>новостройки</label>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import axios from "axios";
export default {
  emits: ["getFiltred"],
  data() {
    return {
      typeObject: false,
      cityShow: false,
      districtShow: false,
      districtsku: [],
      structuresOpen: false,

      readyObj: null,
      firstObj: null,
      secondObj: null,

      categoriesData: null,
      citiesData: null,
      typeBtnsData: null,
      language: localStorage.getItem("language"),
    };
  },

  async mounted() {
    try {
      const resCities = await axios.get("https://mosso.a-lux.dev/api/cities");
      this.citiesData = resCities.data.data;

      const resSpecInfraStruc = await axios.get(
        "https://mosso.a-lux.dev/api/special-infrastructures"
      );
      this.specialInfrastructureData = resSpecInfraStruc.data.data;

      const resTypeBtns = await axios.get(
        "https://mosso.a-lux.dev/api/filter-categories"
      );
      this.typeBtnsData = resTypeBtns.data.data;
    } catch (e) {
      console.log(e);
    }
  },

  components: {
    Button,
  },

  methods: {
    async typeButton(id) {
      this.$store.state.ids = [id];
      try {
        const { data } = await axios.get(
          `https://mosso.a-lux.dev/api/filter-categories/${id}/types-of-objects`
        );
        this.categoriesData = data.data;
        this.$store.state.typeBtn = id;
      } catch (e) {
        console.log(e);
      }
    },

    selectTypes(id) {
      if (this.$store.state.selectedTypes.includes(id)) {
        this.$store.state.selectedTypes =
          this.$store.state.selectedTypes.filter((element) => element != id);
        // console.log(this.$store.state.selectedTypes);
      } else {
        this.$store.state.selectedTypes.push(id);
        // console.log(this.$store.state.selectedTypes);
      }
    },

    async districts() {
      if (this.$store.state.selectedCities.length == 1) {
        const { data } = await axios.get(
          `https://mosso.a-lux.dev/api/cities/${this.$store.state.selectedCities[0]}/districts`
        );
        // console.log(data.data);
        data.data.forEach((dist) => {
          this.districtsku.push(dist);
        });
      } else {
        this.districtsku = [];
      }
    },

    selectCity(id) {
      if (this.$store.state.selectedCities.includes(id)) {
        this.$store.state.selectedCities =
          this.$store.state.selectedCities.filter((elem) => elem != id);
      } else {
        this.$store.state.selectedCities.push(id);
      }

      this.districts();
    },

    selectDistrict(id) {
      if (this.$store.state.selectedDistricts.includes(id)) {
        this.$store.state.selectedDistricts =
          this.$store.state.selectedDistricts.filter((elem) => elem != id);
      } else {
        this.$store.state.selectedDistricts.push(id);
      }
    },

    selectStructure(id) {
      if (this.$store.state.selectedStructures.includes(id)) {
        this.$store.state.selectedStructures =
          this.$store.state.selectedStructures.filter((elem) => elem != id);
      } else {
        this.$store.state.selectedStructures.push(id);
      }
    },

    selectReady() {
      if (this.$store.state.isReady == 1) {
        this.$store.state.isReady = 0;
      } else {
        this.$store.state.isReady = 1;
      }
    },

    selectPrimary() {
      if (this.$store.state.isPrimary == 1) {
        this.$store.state.isPrimary = 0;
      } else {
        this.$store.state.isPrimary = 1;
      }
    },

    selectSecondary() {
      if (this.$store.state.isSecondary == 1) {
        this.$store.state.isSecondary = 0;
      } else {
        this.$store.state.isSecondary = 1;
      }
    },
  },
};
</script>

<style>
</style>