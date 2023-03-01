<template>
  <v-row justify="center" class="add-item-card">
    <v-card v-if="dialog" >
      <v-card-title class="text-h5"> Add a new item </v-card-title>
      <ValidationObserver v-slot="{ invalid }">
        <form class="add-product-form">
          
          <ValidationProvider v-slot="{ errors }" name="title" rules="required">
            <v-text-field
              v-model="product.title"
              :error-messages="errors"
              label="Title"
              outlined
              clearable
              required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            name="subtitle"
            :rules="{
              required: true,
            }"
          >
            <v-text-field
              v-model="product.subtitle"
              :error-messages="errors"
              label="Subtitle"
              outlined
              clearable
              required
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" name="price">
            <v-text-field
              v-model.number="product.price"
              :error-messages="errors"
              label="Price"
              type="number"
              outlined
              clearable
              required
            ></v-text-field>
          </ValidationProvider>

          <v-select
            v-model="product.apparel"
            label="Select"
            :items="[
              'Headwear',
              'Chestwear',
              'Shoes',
            ]"
            class="select-menu"
          ></v-select>

          <v-file-input
            truncate-length="15"
            v-model="product.source"
          ></v-file-input>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="changeDialogVisibility">
              Cancel
            </v-btn>

            <v-btn
              color="green darken-1"
              :disabled="invalid"
              type="submit"
              text
              @click="addItemToStorage"
              :loading="isItemAdded"
            >
              Add
            </v-btn>
          </v-card-actions>
        </form>
      </ValidationObserver>
    </v-card>
  </v-row>
</template>

<script>
import { required, regex } from "vee-validate/dist/rules";
 import PostService from "@/PostService";

import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("regex", {
  ...regex,
  message:
    "The {_field_} must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)",
});
extend("regexPrice", {
  ...regex,
  message: "The {_field_} must contain only numbers",
});

export default {
  Name: "AddItem",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      product: {
        price: 0,
        title: "",
        subtitle: null,
        source: null,
        apparel: undefined,
      },
      isItemAdded: false,
    };
  },
  props: {
    dialog: Boolean,
  },
  methods: {
    changeDialogVisibility() {
      this.$emit("closeDialog");
    },
    async addItemToStorage() {
       let source = await PostService.insertPicture(this.product);
       this.product.source = source;
       this.$emit("add-item", this.product)
       await PostService.insertPost(this.product)

       location.reload();
    },
  },
};
</script>
<style scoped>
.add-product-form{
  @apply p-3
}
.add-item-card {
  @apply my-5;
}
  ::v-deep .v-menu{
    @apply block !important;
  }
</style>
