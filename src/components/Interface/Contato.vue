<template>
  <div class="text-center" style="padding: 5%">
    <!--   <form class="form-contato" ref="form" @submit="sendMail">
      <b-row>
        <b-col cols="6"
          ><span>Nome:</span>
          <b-form-input type="text" name="user_name" v-model="form.name" />
        </b-col>

        <b-col cols="6">
          <span>Email:</span>
          <b-form-input type="email" name="user_email" v-model="form.email" />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <span>Celular:</span>
          <b-form-input type="tel" v-model="form.tel" />
        </b-col>

        <b-col cols="6"
          ><span>Selecione um serviço:</span>
          <b-form-select :options="form.options"></b-form-select>
        </b-col>
        <br />
      </b-row>
      <hr />
      <b-row>
        <br />
        <b-col cols="12">
          <span>Descreva seu problema:</span>

          <b-form-textarea
            id="textarea-default"
            name="message"
            v-model="form.msg"
            placeholder="Sua mensagem"
          ></b-form-textarea>
          <br />
        </b-col>

        <b-col cols="12">
          <br />
          <span>Anexos</span>
          <b-form-file
            class="mt-3"
            plain
            v-model="form.file"
            placeholder="Escolha um arquivo ou arraste aqui..."
            drop-placeholder="Solte um arquivo aqui..."
            >Anexar</b-form-file
          >
        </b-col>
      </b-row>
      <hr />
      <br /><br />
      <b-row>
        <b-col>
          <b-button
            id="btnShow"
            variant="outline-danger"
            class="btn-modal-contato"
            @click="hideModal"
            >Cancelar</b-button
          ></b-col
        >
        <b-col>
          <b-button
            variant="outline-success"
            class="btn-modal-contato"
            type="submit"
            >Enviar</b-button
          >
        </b-col>
      </b-row>
    </form> -->

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
