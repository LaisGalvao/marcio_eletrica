<template>
  <div class="text-center" style="padding: 5%">
    <form @submit.prevent="sendMail">
      <h1>Preencha o formulário e entraremos em contato:</h1>
      <label>Nome</label>
      <input type="text" v-model="name" name="name" placeholder="Seu nome:" />
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Seu email:"
      />
      <label>Mensagem</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Deixe sua mensagem:"
      >
      </textarea>

      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>
<script>
import api from "../../services";
export default {
  data() {
    return {
      obj: null,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendMail() {
      api
        .post("/sendMail", {
          name: this.name,
          email: this.email,
          message: this.msg,
        })
        .then(
          (response) => {
            if (response.status === 200) {
              console.log(response.data);
            }
          },
          (error) => {
            return Promise.reject(error);
          }
        );
      this.name = "";
      this.email = "";
      this.msg = "";
    },

    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
    },
  },
};
</script>
<style>
.form-contato {
  display: grid;
}

.btn-modal-contato {
  width: 50% !important;
  display: inline-block !important;
  margin-top: 5%;
  margin-left: 9%;
}

label {
  text-align: center;
}
span {
  text-align: center;
}

* {
  box-sizing: border-box;
}
label {
  float: left;
}
input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #b8c7b9;
}
.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
</style>
