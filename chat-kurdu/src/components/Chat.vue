<template>
  <div class="chat container">
    <h2 class="center deep-orange-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="m in messages" :key="m.id">
            <span class="deep-orange-text">{{ m.name }}: </span>
            <span class="teal-text text-darken-3">{{ m.content }}</span>
            <span class="grey-text time">{{ m.date }}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import NewMessage from "./NewMessage";
import db from "../firebase/init";
import moment from "moment";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    let ref = db.collection("message").orderBy("date");
    ref.onSnapshot((snap) => {
      // console.log(snap.docChanges())
      snap.docChanges().forEach((c) => {
        if (c.type == "added") {
          let doc = c.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            date: moment(doc.data().date).format('lll'),
          });
        }
      });
    });
  },
};
</script>

<style scoped>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
</style>