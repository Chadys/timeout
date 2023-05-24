<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-form ref="form">
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ selectedExercise.exercise.name }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    type="number"
                    outlined
                    required
                    :rules="numberRules"
                    v-model.number="selectedExercise.secondsDuration"
                    :placeholder="selectedExercise.secondsDuration.toString()"
                    label="Exercise duration"
                    suffix="seconds"
                    clearable
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    type="number"
                    outlined
                    required
                    :rules="numberRules"
                    v-model.number="selectedExercise.secondsBreak"
                    :placeholder="selectedExercise.secondsBreak.toString()"
                    label="Exercise break duration"
                    suffix="seconds"
                    clearable
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="accent" text @click="save">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import { FilledSelectedExercise } from "@/store/modules/exercises/exercises.type";

@Component({
  name: "EditExerciseDialog"
})
export default class EditExerciseDialog extends Vue {
  @Prop() readonly selectedExercise!: FilledSelectedExercise;

  dialog = false;
  numberRules = [
    (v: string | number | null) => /^\d+$/.test(v) || "Number expected"
  ];

  save(): void {
    if (this.$refs.form.validate()) {
      this.editExercise(
        Number(this.selectedExercise.secondsDuration),
        Number(this.selectedExercise.secondsBreak)
      );
      this.dialog = false;
    }
  }

  @Emit("edit-exercise")
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  editExercise(_secondsDuration: number, _secondsBreak: number): void {}
}
</script>

<style scoped></style>
