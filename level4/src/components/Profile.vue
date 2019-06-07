<template>
  <div class="Profile">
    <div class="name">{{labels.name}}</div>
    <div class="specs">
      <div class="specItem" v-for="(spec,index) in labels.description" :key="index">
        <div class="duration">{{spec.duration}}</div>
        <div class="specDesc">{{spec.spec}}</div>
      </div>
    </div>
    <contacts/>
  </div>
</template>

<script>
import Profile from "./profile.json";
import contacts from "./leftarea/contacts.vue";
export default {
  name: "Profile",
  components:{
    contacts
  },
  data: () => {
    return {
      labels: String
    };
  },
  created() {
    this.labels = Profile;
  }
};
</script>

<style>
.Profile {
  border: solid 1px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-color: rgba(0,0,0,0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 32px;
}
.name {
  font-size: 128px;
  font-weight: 900;
  line-height: 120px;
}
.specs {
  margin-top: 32px;
}
.specItem {
  margin-bottom: 16px;
}
.duration {
  font-weight: 700;
}
</style>
