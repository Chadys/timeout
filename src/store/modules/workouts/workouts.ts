import { Module } from "vuex";
import { WorkoutsState } from "@/store/modules/workouts/workouts.type";

const moduleWorkouts: Module<WorkoutsState, any> = {
  state: () => ({
    workoutsMap: new Map([])
  })
};

export default moduleWorkouts;
